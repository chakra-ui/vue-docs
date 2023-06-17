<template>
    <c-stack direction='row'>
        <c-badge>Default</c-badge>
        <c-badge color-scheme='green'>Success</c-badge>
        <c-badge color-scheme='red'>Removed</c-badge>
        <c-badge color-scheme='purple'>New</c-badge>
    </c-stack>
</template>
<script setup>
import { CStack, CBadge } from '@chakra-ui/vue-next';
</script>
  