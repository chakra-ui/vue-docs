<script setup>
import {
  CBreadcrumb,
  CBreadcrumbItem,
  CBreadcrumbLink,
  CIcon
} from '@chakra-ui/vue-next';
</script>

<template>
  <CBreadcrumb>
    <template v-slot:#separator>
      <CIcon name="chevron-right" />
    </template>
    <CBreadcrumbItem>
      <CBreadcrumbLink href="#">Home</CBreadcrumbLink>
    </CBreadcrumbItem>
    <CBreadcrumbItem>
      <CBreadcrumbLink href="#">Docs</CBreadcrumbLink>
    </CBreadcrumbItem>
    <CBreadcrumbItem is-current-page>
      <CBreadcrumbLink href="#">About</CBreadcrumbLink>
    </CBreadcrumbItem>
  </CBreadcrumb>
</template>
