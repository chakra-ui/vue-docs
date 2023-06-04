<template>
    <c-v-stack w="2xl" align-items="center">
        <c-container maxW='md' bg='blue.600' color='white'>
            "md" Container
        </c-container>
        <c-container maxW='550px' bg='purple.600' color='white'>
            "550px" Container
        </c-container>
        <c-container maxW='container.sm' bg='green.400' color='#262626'>
            "container.sm" Container
        </c-container>
    </c-v-stack>
</template>

<script setup>
import { CContainer, CVStack } from '@chakra-ui/vue-next';
</script>
