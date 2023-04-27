<template>
  <c-alert
    flex-direction="column"
    text-align="left"
    justify-content="start"
    align-items="start"
  >
    <c-alert-title font-size="md">Updated Successfully</c-alert-title>
    <c-alert-description font-size="sm"
      >Click to view your profile</c-alert-description
    >
  </c-alert>
</template>
<script setup>
import { CAlert, CAlertDescription, CAlertTitle } from '@chakra-ui/vue-next';
</script>
