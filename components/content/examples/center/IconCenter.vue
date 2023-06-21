<template>
  <c-h-stack>
    <c-center w='40px' h='40px' bg='tomato' color='white'>
      <c-icon name="phone" />
    </c-center>
    <c-center w='40px' h='40px' bg='tomato' color='white'>
      <c-box as='span' fontWeight='bold' fontSize='lg'>
        1
      </c-box>
    </c-center>
  </c-h-stack>
</template>
<script setup>
import { CCenter, CHStack, CBox } from '@chakra-ui/vue-next';
</script>
