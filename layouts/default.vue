<script setup lang="ts">
import { chakra, useColorModeValue } from '@chakra-ui/vue-next';
import TopNavigation from '~/components/navigation/top-navigation.vue';
import Sidebar from '~/components/navigation/sidebar.vue';
import { documentationUrl } from '~/config/site-config';
import { useRoute } from 'vue-router';


/**
 * Styling
 */
const color = useColorModeValue('gray.700', 'white');

/**
 * Edit pages/content on github dynamic route for edit URL at page footer
 */
const route = useRoute();
const { path } = useRoute();

const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne()
}, { watch: [route] })

const routeSlug = data.value?._id.toString().replace(/:/g, "/").replace(/\s/g, "");

const editUrl = ref<string>(`${documentationUrl}/${routeSlug}`);
</script>

<template>
  <chakra.div :min-h="['auto', 'auto', '100vh']" w="100%" :color="color">
    <TopNavigation />
    <chakra.div :key="path" max-w="8xl" mx="auto" d="flex">
      <!-- Sidebar Navigation -->
      <chakra.div :display="{ base: 'none', lg: 'block' }" position="fixed" z-index="30" bottom="0" top="6rem"
        left="max(0px, calc(50% - 45rem))" right="auto" width="19.5rem" pb="10" px="8" overflow-y="auto"
        overscroll-behavior="contain">
        <sidebar />
      </chakra.div>
      <chakra.main :pl="{ base: 4, lg: '19.5rem' }" pt="4" pb="24" :pr="{ base: 4, xl: 16 }" class="chakra-prose">
        <chakra.div :mr="{ xl: '15.5rem' }">
          <slot />

          <EditPage :editUrl="editUrl" />
        </chakra.div>
        <!-- <table-of-contents /> -->
      </chakra.main>
    </chakra.div>
  </chakra.div>
</template>
