<template>
  <CBreadcrumb font-size="sm" font-weight="semibold" color="red.500">
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

<script setup>
import {
  CBreadcrumb,
  CBreadcrumbItem,
  CBreadcrumbLink
} from '@chakra-ui/vue-next';
</script>
