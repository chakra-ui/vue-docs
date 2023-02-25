<script setup lang="ts">
import { useColorModeValue, CCode } from '@chakra-ui/vue-next';

const color = useColorModeValue('purple.500', 'purple.200');
</script>

<template>
  <CCode :color="color">
    <slot />
  </CCode>
</template>
