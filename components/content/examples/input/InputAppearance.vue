<template>
    <c-stack spacing="3" w="2xl" align-items="center">
        <c-input variant='outline' placeholder='Outline' />
        <c-input variant='filled' placeholder='Filled' />
        <c-input variant='flushed' placeholder='Flushed' />
        <c-input variant='unstyled' placeholder='Unstyled' />
    </c-stack>
</template>

<script setup>
import { CInput, CStack } from '@chakra-ui/vue-next';
</script>