<template>
  <CBreadcrumb :separator="Sun">
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
  CBreadcrumbLink,
  CIcon
} from '@chakra-ui/vue-next';

const Sun = () => {
  return h(CIcon, {
    name: 'sun'
  });
};
</script>
