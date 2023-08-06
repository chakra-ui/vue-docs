<script setup>
import { CCheckboxGroup, CCheckbox, CStack } from '@chakra-ui/vue-next';

const items = ref(["naruto", "sasuke"])
</script>

<template>
  <CCheckboxGroup v-model="items" color-scheme="blue" size="lg">
    <CStack>
      <CCheckbox value="naruto"> Naruto </CCheckbox>
      <CCheckbox value="sasuke"> Sasuke </CCheckbox>
      <CCheckbox value="kakashi"> Kakashi </CCheckbox>
    </CStack>
  </CCheckboxGroup>
</template>