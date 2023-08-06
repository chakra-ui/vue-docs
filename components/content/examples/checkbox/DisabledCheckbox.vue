<script setup>
import { CCheckbox, CStack } from '@chakra-ui/vue-next';
</script>

<template>
  <CStack spacing="5" direction="row"> 
    <CCheckbox is-disabled> Disabled checkbox </CCheckbox> 
    <CCheckbox is-disabled default-checked> Disabled checked </CCheckbox>
  </CStack>
</template>