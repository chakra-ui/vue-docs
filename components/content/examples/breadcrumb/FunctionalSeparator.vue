<template>
  <c-breadcrumb :separator="Sun">
    <c-breadcrumb-item>
      <c-breadcrumb-link href="#"
        >Home</c-breadcrumb-link
      >
    </c-breadcrumb-item>
    <c-breadcrumb-item>
      <c-breadcrumb-link href="#">Docs</c-breadcrumb-link>
    </c-breadcrumb-item>
    <c-breadcrumb-item is-current-page>
      <c-breadcrumb-link href="#">About</c-breadcrumb-link>
    </c-breadcrumb-item>
  </c-breadcrumb>
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
