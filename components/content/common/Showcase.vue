<script setup>
import { CCenter } from "@chakra-ui/vue-next"
</script>

<template>
  <c-center py="3" border="1px solid" border-color="gray.200" border-radius="5" px="4" my="5">
    <slot />
  </c-center>
</template>