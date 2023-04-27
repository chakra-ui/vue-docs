<template>
  <c-alert status="info" mb="3"
    ><c-alert-icon mr="2" /> Please update your KYC.</c-alert
  >
  <c-alert status="success" mb="3"
    ><c-alert-icon mr="2" />
    Your Info has been saved successfully.
  </c-alert>
  <c-alert status="warning" mb="3"
    ><c-alert-icon mr="2" /> Unable to process request
  </c-alert>
  <c-alert status="error" mb="3"
    ><c-alert-icon mr="2" /> Password is Incorrect!.
  </c-alert>
</template>
<script setup>
import { CAlert, CAlertIcon } from '@chakra-ui/vue-next';
</script>
