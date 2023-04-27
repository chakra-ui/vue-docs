<template>
  <c-alert variant="left-accent" status="info" mb="3">
    <c-alert-icon mr="2" />
  </c-alert>
  <c-alert variant="left-accent" status="warning" mb="3">
    <c-alert-icon mr="2" />
  </c-alert>
  <c-alert variant="left-accent" status="success" mb="3">
    <c-alert-icon mr="2" />
  </c-alert>
  <c-alert variant="left-accent" status="error" mb="3">
    <c-alert-icon mr="2" />
  </c-alert>
</template>
<script setup>
import { CAlert, CAlertIcon } from '@chakra-ui/vue-next';
</script>
