<script setup>
import { CInput, CStack } from '@chakra-ui/vue-next';
</script>

<template>
    <CStack spacing="3" w="2xl" align-items="center">
        <CInput variant='outline' placeholder='Outline' />
        <CInput variant='filled' placeholder='Filled' />
        <CInput variant='flushed' placeholder='Flushed' />
        <CInput variant='unstyled' placeholder='Unstyled' />
    </CStack>
</template>
