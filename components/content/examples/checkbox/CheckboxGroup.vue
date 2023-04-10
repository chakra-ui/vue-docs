<script setup>
import { CCheckboxGroup, CCheckbox } from '@chakra-ui/vue-next';

const items = ref(["naruto", "sasuke"])
</script>

<template>
  <c-checkbox-group v-model="items" color-scheme="blue" size="lg">
    <c-stack>
      <c-checkbox value="naruto"> Naruto </c-checkbox>
      <c-checkbox value="sasuke"> Sasuke </c-checkbox>
      <c-checkbox value="kakashi"> Kakashi </c-checkbox>
    </c-stack>
  </c-checkbox-group>
</template>