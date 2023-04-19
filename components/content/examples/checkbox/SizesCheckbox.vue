<script setup>
import { CWrap, CCheckbox } from '@chakra-ui/vue-next';
</script>

<template>
  <c-wrap spacing="5" align="center" direction="row">
    <c-checkbox size='sm' color-scheme='red'>
      Small
    </c-checkbox>
    <c-checkbox size='md' color-scheme='green' default-checked>
      Medium
    </c-checkbox>
    <c-checkbox size='lg' color-scheme='orange' default-checked>
      Large
    </c-checkbox>
  </c-wrap>
</template>