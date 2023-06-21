<template>
  <c-flex min-width='max-content' align-items='center' gap='2'>
    <c-box p='2'>
      <c-heading size='md'>Chakra App</c-heading>
    </c-box>
    <c-spacer />
    <c-button-group p='2'>
      <c-button rounded="10px" color-scheme='teal'>Sign Up</c-button>
      <c-button rounded="10px" color-scheme='teal'>Log in</c-button>
    </c-button-group>
  </c-flex>
</template>

<script setup>
import { CFlex, CSpacer, CBox, CHeading, CButtonGroup, CButton } from '@chakra-ui/vue-next';
</script>
