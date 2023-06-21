<template>
  <c-box>
    <c-text>Flex and Spacer: Full width, equal Spacing</c-text>
    <c-flex>
      <c-box w='70px' h='10' bg='red.500' />
      <c-spacer />
      <c-box w='170px' h='10' bg='red.500' />
      <c-spacer />
      <c-box w='180px' h='10' bg='red.500' />
    </c-flex>

    <c-text>
      Grid: The children start at the beginning, the 1/3 mark and 2/3 mark
    </c-text>
    <c-grid template-columns='repeat(3, 1fr)' gap={6}>
      <c-box w='70px' h='10' bg='blue.500' />
      <c-box w='170px' h='10' bg='blue.500' />
      <c-box w='180px' h='10' bg='blue.500' />
    </c-grid>

    <c-text>
      HStack: The children have equal spacing but don't span the whole container
    </c-text>
    <c-h-stack spacing='24px'>
      <c-box w='70px' h='10' bg='teal.500' />
      <c-box w='170px' h='10' bg='teal.500' />
      <c-box w='180px' h='10' bg='teal.500' />
    </c-h-stack>
  </c-box>
</template>

<script setup>
import { CFlex, CSpacer, CBox, CHStack, CText, CGrid } from '@chakra-ui/vue-next';
</script>
