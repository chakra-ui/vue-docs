<template>
    <c-stack is-inline>
        <c-code>console.log(welcome)</c-code>
        <c-code color-scheme="red">var chakra = 'awesome!'</c-code>
        <c-code color-scheme="yellow">npm install chakra</c-code>
    </c-stack>
</template>

<script setup>
import { CStack, CCode } from '@chakra-ui/vue-next';

</script>