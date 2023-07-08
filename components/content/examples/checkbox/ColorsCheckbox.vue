<script setup>
import { CCheckbox, CStack } from '@chakra-ui/vue-next';
</script>

<template>
  <CStack spacing="5" direction="row">
    <CCheckbox color-scheme='red' default-checked>
      Red
    </CCheckbox>
    <CCheckbox color-scheme='green' default-checked>
      Green
    </CCheckbox>
  </CStack>
</template>