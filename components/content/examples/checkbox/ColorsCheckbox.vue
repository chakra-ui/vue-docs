<script setup>
import { CStack, CCheckbox } from '@chakra-ui/vue-next';
</script>

<template>
  <c-stack spacing="5" direction="row">
    <c-checkbox color-scheme='red' default-checked>
      Red
    </c-checkbox>
    <c-checkbox color-scheme='green' default-checked>
      Green
    </c-checkbox>
  </c-stack>
</template>