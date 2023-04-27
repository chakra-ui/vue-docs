<template>
  <c-button
    v-if="!showAlert"
    @click="showAlert = true"
    border="1px solid rgba(47, 43, 67, 0.1)"
    border-radius="2xl"
    mr="3"
    variant="outline"
    box-shadow="0px 1px 3px rgba(47, 43, 67, 0.1), inset 0px -1px 0px rgba(47, 43, 67, 0.1)"
    bg="transparent"
  >
    Show Alert
  </c-button>
  <c-alert
    v-if="showAlert"
    status="warning"
    variant="subtle"
    flex-direction="column"
    align-items="center"
    justify-content="center"
    text-align="center"
  >
    <c-alert-icon />
    <c-alert-title mt="4" mb="1" font-size="lg"
      >Before Submitting</c-alert-title
    >
    <c-alert-description max-width="sm" mt="auto" font-weight="normal">
      Kindly note that this decision cannot be reversed, once you submit, your
      results are uploaded to the database.
    </c-alert-description>
    <c-button-group variant="outline" mt="4">
      <c-button color-scheme="blue" @click="showAlert = false"
        >Proceed</c-button
      >
      <c-button @click="showAlert = false">Cancel</c-button>
    </c-button-group>
  </c-alert>
</template>

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
