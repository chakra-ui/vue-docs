<script setup>
import { CSimpleGrid, CBox } from '@chakra-ui/vue-next';
</script>

<template>
  <c-simple-grid :columns="2" spacing-x="40px" spacing-y="20px">
    <c-box background="green" height="80px"></c-box>
    <c-box background="red" height="80px"></c-box>
    <c-box background="blue.900" height="80px"></c-box>
    <c-box background="darkorange" height="80px"></c-box>
    <c-box background="yellow" height="80px"></c-box>
  </c-simple-grid>
</template>