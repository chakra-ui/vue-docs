<script setup>
import {
  CButtonGroup,
  CButton,
  CAlert,
  CAlertIcon,
  CAlertTitle,
  CAlertDescription
} from '@chakra-ui/vue-next';
import { ref } from 'vue';

const showAlert = ref(true);
</script>

<template>
  <CButton
    v-if="!showAlert"
    border="1px solid rgba(47, 43, 67, 0.1)"
    border-radius="2xl"
    mr="3"
    variant="outline"
    box-shadow="0px 1px 3px rgba(47, 43, 67, 0.1), inset 0px -1px 0px rgba(47, 43, 67, 0.1)"
    bg="transparent"
    @click="showAlert = true"
  >
    Show Alert
  </CButton>
  <CAlert
    v-if="showAlert"
    status="warning"
    variant="subtle"
    flex-direction="column"
    align-items="center"
    justify-content="center"
    text-align="center"
  >
    <CAlertIcon />
    <CAlertTitle mt="4" mb="1" font-size="lg"
      >Before Submitting</CAlertTitle
    >
    <CAlertDescription max-width="sm" mt="auto" font-weight="normal">
      Kindly note that this decision cannot be reversed, once you submit, your
      results are uploaded to the database.
    </CAlertDescription>
    <CButtonGroup variant="outline" mt="4">
      <CButton color-scheme="blue" @click="showAlert = false"
        >Proceed</CButton
      >
      <CButton @click="showAlert = false">Cancel</CButton>
    </CButtonGroup>
  </CAlert>
</template>
