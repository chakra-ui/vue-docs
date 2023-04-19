<script setup>
import { CCheckbox } from '@chakra-ui/vue-next';
</script>

<template>
  <c-stack spacing="5" direction="row"> 
    <c-checkbox is-disabled> Disabled checkbox </c-checkbox> 
    <c-checkbox is-disabled default-checked> Disabled checked </c-checkbox>
  </c-stack>
</template>