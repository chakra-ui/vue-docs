<script setup>
import { CAlert, CAlertIcon } from '@chakra-ui/vue-next';
</script>

<template>
  <CAlert variant="left-accent" status="info" mb="3">
    <CAlertIcon mr="2" />
    <CAlertDescription> Please, update your KYC. </CAlertDescription>
  </CAlert>

  <CAlert variant="left-accent" status="warning" mb="3">
    <CAlertIcon mr="2" />
    <CAlertDescription> Incorrect Password </CAlertDescription>
  </CAlert>

  <CAlert variant="left-accent" status="success" mb="3">
    <CAlertIcon mr="2" />
    <CAlertDescription>
      Congratulations!. You scored above 75%
    </CAlertDescription>
  </CAlert>

  <CAlert variant="left-accent" status="error" mb="3">
    <CAlertIcon mr="2" />
    <CAlertDescription> Access revoked!</CAlertDescription>
  </CAlert>
</template>
