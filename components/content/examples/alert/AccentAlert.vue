<template>
  <c-alert variant="solid" status="success">
    <c-alert-icon mr="2" />
    <c-alert-description> Submitted Successfully! </c-alert-description>
  </c-alert>

  <c-alert variant="subtle" status="success" mb="3">
    <c-alert-icon mr="2" />
    <c-alert-description> Submitted Successfully! </c-alert-description>
  </c-alert>

  <c-alert variant="left-accent" status="success" mb="3">
    <c-alert-icon mr="2" />
    <c-alert-description> Submitted Successfully! </c-alert-description>
  </c-alert>

  <c-alert variant="top-accent" status="success" mb="3">
    <c-alert-icon mr="2" />
    <c-alert-description> Submitted Successfully! </c-alert-description>
  </c-alert>
</template>
<script setup>
import { CAlert, CAlertDescription } from '@chakra-ui/vue-next';
</script>
