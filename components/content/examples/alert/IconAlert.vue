<template>
  <c-alert variant="left-accent" status="info" mb="3">
    <c-alert-icon mr="2" />
    <c-alert-description> Please, update your KYC. </c-alert-description>
  </c-alert>

  <c-alert variant="left-accent" status="warning" mb="3">
    <c-alert-icon mr="2" />
    <c-alert-description> Incorrect Password </c-alert-description>
  </c-alert>

  <c-alert variant="left-accent" status="success" mb="3">
    <c-alert-icon mr="2" />
    <c-alert-description>
      Congratulations!. You scored above 75%
    </c-alert-description>
  </c-alert>

  <c-alert variant="left-accent" status="error" mb="3">
    <c-alert-icon mr="2" />
    <c-alert-description> Access revoked!</c-alert-description>
  </c-alert>
</template>
<script setup>
import { CAlert, CAlertIcon } from '@chakra-ui/vue-next';
</script>
