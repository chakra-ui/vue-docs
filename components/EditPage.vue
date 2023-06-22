<template>
    <c-h-stack align-items="center" mt="6">
        <c-icon name="info" />
        <c-link :href="editUrl ? editUrl : `https://github.com/chakra-ui/vue-docs`" is-external
            :_hover="{ color: '#55c392', textDecoration: 'underline' }">
            Edit this page on GitHub
        </c-link>
    </c-h-stack>
</template>

<script setup>
import { CHStack, CIcon, CLink } from '@chakra-ui/vue-next';

const props = defineProps({
    editUrl: String
})
</script>