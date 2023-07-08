<template>
  <CAlert status="info" mb="3">
    <CAlertIcon mr="2" /> 
    Please update your KYC.
  </CAlert>
  <CAlert status="success" mb="3">
    <CAlertIcon mr="2" />
    Your Info has been saved successfully.
  </CAlert>
  <CAlert status="warning" mb="3">
    <CAlertIcon mr="2" />
    Unable to process request
  </CAlert>
  <CAlert status="error" mb="3">
    <CAlertIcon mr="2" />
    Password is Incorrect!.
  </CAlert>
</template>

<script setup>
import { CAlert, CAlertIcon } from '@chakra-ui/vue-next';
</script>
