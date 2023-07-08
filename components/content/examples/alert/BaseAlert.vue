
<script setup>
import { CAlert, CAlertDescription, CAlertTitle } from '@chakra-ui/vue-next';
</script>

<template>
  <CAlert
    flex-direction="column"
    text-align="left"
    justify-content="start"
    align-items="start"
  >
    <CAlertTitle font-size="md">Updated Successfully</CAlertTitle>
    <CAlertDescription font-size="sm">
      Click to view your profile
    </CAlertDescription>
  </CAlert>
</template>
