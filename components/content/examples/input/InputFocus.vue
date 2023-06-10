<template>
    <c-stack spacing="4" w="xl" align-items="center">
        <c-input focus-border-color="lime" placeholder="Here is a sample placeholder" />
        <c-input focus-border-color="pink.400" placeholder="Here is a sample placeholder" />
        <c-input is-invalid error-border-color="red.300" placeholder="Here is a sample placeholder" />
        <c-input is-invalid error-border-color="crimson" placeholder="Here is a sample placeholder" />
    </c-stack>
</template>

<script setup>
import { CInput, CStack } from '@chakra-ui/vue-next';
</script>