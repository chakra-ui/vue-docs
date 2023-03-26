<script setup lang="ts">
import { chakra, useColorModeValue } from '@chakra-ui/vue-next';
import TheNavbar from '../components/TheNavbar.vue';

const color = useColorModeValue('gray.700', 'whiteAlpha.900');
</script>

<template>
  <chakra.div :color="color" :min-h="['auto', 'auto', '100vh']" w="100%">
    <TheNavbar />
    <slot />
  </chakra.div>
</template>
