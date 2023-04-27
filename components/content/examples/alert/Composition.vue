<template>
  <c-alert
    variant="subtle"
    status="success"
    flex-direction="column"
    height="auto"
    text-align="center"
    align-items="center"
    justify-content="center"
    w="full"
  >
    <c-alert-icon box-size="40px" />
    <c-alert-title mt="4" mb="1" font-size="lg"
      >Application Submitted!</c-alert-title
    >
    <c-alert-description max-width="sm" mt="auto" font-weight="normal"
      >Our team will review your application. If you are found a fit for this
      role, someone will be in touch with you. Please do well to stay in touch
      with our Jobs page</c-alert-description
    >
  </c-alert>
</template>
<script setup>
import {
  CAlert,
  CAlertTitle,
  CAlertDescription,
  CAlertIcon
} from '@chakra-ui/vue-next';
</script>
