<script setup lang="ts">
import { chakra, useColorModeValue } from '@chakra-ui/vue-next';
import TopNavigation from '~/components/navigation/top-navigation.vue';
import Sidebar from '~/components/navigation/sidebar.vue';

/**
 * Styling
 */
const color = useColorModeValue('gray.700', 'white');
</script>

<template>
  <chakra.div :min-h="['auto', 'auto', '100vh']" w="100%" :color="color">
    <TopNavigation />
    <chakra.div max-w="8xl" mx="auto" d="flex">
      <!-- Sidebar Navigation -->
      <chakra.div
        :display="{ base: 'none', lg: 'block' }" position="fixed" z-index="30" bottom="0" top="6rem"
        left="max(0px, calc(50% - 45rem))" right="auto" width="19.5rem" pb="10" px="8" overflow-y="auto"
        overscroll-behavior="contain">
        <Sidebar />
      </chakra.div>
      <chakra.main :pl="{ base: 4, lg: '19.5rem' }" pt="4" pb="24" :pr="{ base: 4, xl: 16 }" class="chakra-prose">
        <chakra.div :mr="{ xl: '15.5rem' }" :pl="{ base: 2, lg: '1rem' }">
          <slot />

          <CHStack align-items="center" mt="6">
            <CIcon name="info" />
            <p>Edit this page on GitHub</p>
          </CHStack>
        </chakra.div>
        <!-- <table-of-contents /> -->
      </chakra.main>
    </chakra.div>
  </chakra.div>
</template>
