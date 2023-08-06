<script setup>
import { CCheckbox, CWrap } from '@chakra-ui/vue-next';
</script>

<template>
  <CWrap spacing="5" align="center" direction="row">
    <CCheckbox size='sm' color-scheme='red'>
      Small
    </CCheckbox>
    <CCheckbox size='md' color-scheme='green' default-checked>
      Medium
    </CCheckbox>
    <CCheckbox size='lg' color-scheme='orange' default-checked>
      Large
    </CCheckbox>
  </CWrap>
</template>