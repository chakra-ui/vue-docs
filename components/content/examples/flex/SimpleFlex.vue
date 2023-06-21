<template>
  <c-flex color='white'>
    <c-center w='100px' bg='green.500'>
      <c-text>Box 1</c-text>
    </c-center>
    <c-square bg='blue.500' size='150px'>
      <c-text>Box 2</c-text>
    </c-square>
    <c-box flex='1' bg='tomato'>
      <c-text>Box 3</c-text>
    </c-box>
  </c-flex>
</template>

<script setup>
import { CFlex, CCenter, CText, CSquare, CBox } from '@chakra-ui/vue-next';
</script>
