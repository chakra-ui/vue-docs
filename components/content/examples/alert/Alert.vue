<template>
  <c-alert status="success">
    <c-alert-icon />
    <c-alert-title>Updated Successfully</c-alert-title>
    <c-alert-description>Click to view your profile</c-alert-description>
  </c-alert>
</template>
<script setup>
import {
  CAlert,
  CAlertIcon,
  CAlertTitle,
  CAlertDescription
} from '@chakra-ui/vue-next';
</script>
