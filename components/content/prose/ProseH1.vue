<script setup lang="ts">
import { chakra } from '@chakra-ui/vue-next';
defineProps<{ id: string }>();
</script>

<template>
  <chakra.h1
    id="skip-nav"
    text-style="display.lg"
    mb="5"
    max-w="85ch"
    tab-index="-1"
  >
    <slot />
  </chakra.h1>
</template>
