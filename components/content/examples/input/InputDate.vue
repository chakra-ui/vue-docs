<script setup>
import { CInput, CStack } from '@chakra-ui/vue-next';
</script>

<template>
    <CStack spacing="4" w="xl" align-items="center">
        <CInput type="datetime-local" placeholder="Select Date and Time" size="md" />
    </CStack>
</template>