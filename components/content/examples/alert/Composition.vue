<script setup>
import {
  CAlert,
  CAlertTitle,
  CAlertDescription,
  CAlertIcon
} from '@chakra-ui/vue-next';
</script>

<template>
  <CAlert
    variant="subtle"
    status="success"
    flex-direction="column"
    height="auto"
    text-align="center"
    align-items="center"
    justify-content="center"
    w="full"
  >
    <CAlertIcon box-size="40px" />
    <CAlertTitle mt="4" mb="1" font-size="lg">
      Application Submitted!
    </CAlertTitle>
    <CAlertDescription max-width="sm" mt="auto" font-weight="normal">
      Our team will review your application. If you are found a fit for this
      role, someone will be in touch with you. Please do well to stay in touch
      with our Jobs page
    </CAlertDescription>
  </CAlert>
</template>
