<script setup>
import { CCloseButton } from '@chakra-ui/vue-next';
</script>

<template>
  <CCloseButton size="sm" @click="handleClose" />
  <CCloseButton ml="6" size="md" @click="handleClose" />
  <CCloseButton ml="6" size="lg" @click="handleClose" />
</template>
