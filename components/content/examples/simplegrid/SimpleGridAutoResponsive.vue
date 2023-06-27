<script setup>
import { CSimpleGrid, CBox } from '@chakra-ui/vue-next';
</script>

<template>
  <c-simple-grid min-child-width="120px" spacing="40px">
    <c-box background="green" height="80px"></c-box>
    <c-box background="red" height="80px"></c-box>
    <c-box background="blue.900" height="80px"></c-box>
    <c-box background="darkorange" height="80px"></c-box>
    <c-box background="yellow" height="80px"></c-box>
  </c-simple-grid>
</template>