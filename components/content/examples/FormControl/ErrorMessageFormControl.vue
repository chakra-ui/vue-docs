<script setup lang="ts">
const input = ref("")
const isError = computed(() => input.value === "")
</script>

<template>
  <CFormControl :is-invalid="isError">
    <CFormLabel>Email</CFormLabel>
    <CInput v-model="input" type="email" />
    <CFormHelperText v-if="!isError">
      Enter the email you'd like to receive the newsletter on.
    </CFormHelperText>
    <CFormErrorMessage v-else>Email is required.</CFormErrorMessage>
  </CFormControl>
</template>