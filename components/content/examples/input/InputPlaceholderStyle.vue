<template>
    <c-stack spacing="4" w="xl" align-items="center">
        <c-input placeholder='default placeholder' />
        <c-input placeholder='custom placeholder' :_placeholder="{ opacity: 1, color: 'gray.500' }" />
        <c-input color='teal' placeholder='custom placeholder' :_placeholder="{ color: 'inherit' }" />
        <c-input color='tomato' placeholder='custom placeholder' :_placeholder="{ opacity: 0.4, color: 'inherit' }" />
    </c-stack>
</template>

<script setup>
import { CInput, CStack } from '@chakra-ui/vue-next';
</script>