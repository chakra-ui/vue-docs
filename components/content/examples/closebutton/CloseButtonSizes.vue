<template>
  <c-close-button size="sm" @click="handleClose" />
  <c-close-button ml="6" size="md" @click="handleClose" />
  <c-close-button ml="6" size="lg" @click="handleClose" />
</template>
<script setup>
import { CCloseButton } from '@chakra-ui/vue-next';
</script>
