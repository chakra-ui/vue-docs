<template>
    <c-h-stack align-items="center" mt="6">
        <c-icon name="info" />
        <c-link :href="editUrl ? editUrl : `https://github.com/chakra-ui/vue-docs`" is-external
            :_hover="{ color: '#55c392', textDecoration: 'underline' }">
            Edit this page on GitHub
        </c-link>
    </c-h-stack>
</template>

<script setup lang="ts">
import { CHStack, CIcon, CLink } from '@chakra-ui/vue-next';
import { documentationUrl } from '~/config/site-config';
import { useRoute, useRouter } from 'vue-router';

const route = computed(() => useRoute());
const path = computed(() => route.value.path);

console.log(path.value);

const { data, refresh } = await useAsyncData(`content-${path}`, () => {
    return queryContent().where({ _path: path.value }).findOne()
}, { watch: [route] })

const routeSlug = data.value?._id.toString().replace(/:/g, "/").replace(/\s/g, "");

const editUrl = ref<string>(`${documentationUrl}/${routeSlug}`);

</script>