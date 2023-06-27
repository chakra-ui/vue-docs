<template>
  <c-h-stack :spacing="5">
    <c-box :p="5" shadow="md" border-width="1px">
      <c-heading>See the Vue</c-heading>
      <c-text :mt="4">Vue makes front-end development a breeze.</c-text>
    </c-box>
    <c-box :p="5" shadow="md" border-width="1px">
      <c-heading>Go Nuxt!</c-heading>
      <c-text :mt="4">Nuxt makes writing Vue even easier.</c-text>
    </c-box>
  </c-h-stack>
</template>

<script setup>
import { CHStack, CBox, CHeading, CText } from '@chakra-ui/vue-next';
</script>
