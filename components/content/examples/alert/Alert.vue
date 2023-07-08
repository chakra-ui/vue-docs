<script setup>
import {
  CAlert,
  CAlertIcon,
  CAlertTitle,
  CAlertDescription
} from '@chakra-ui/vue-next';
</script>

<template>
  <CAlert status="success">
    <CAlertIcon />
    <CAlertTitle>Updated Successfully</CAlertTitle>
    <CAlertDescription>Click to view your profile</CAlertDescription>
  </CAlert>
</template>
