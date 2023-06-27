<template>
  <c-stack :spacing="4">
    <c-text>Chakra component 1</c-text>
    <p>HTML paragraph element</p>
    <h3>HTML heading element</h3>
    <c-text>Chakra component 2</c-text>
  </c-stack>
</template>

<script setup>
import { CStack, CText } from '@chakra-ui/vue-next';
</script>
