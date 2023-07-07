<template>
    <c-stack spacing="3" w="2xl" align-items="center">
        <c-input placeholder="extra small size" size="xs" />
        <c-input placeholder="small size" size="sm" />
        <c-input placeholder="medium size" size="md" />
        <c-input placeholder="large size" size="lg" />
    </c-stack>
</template>

<script setup>
import { CInput, CStack } from '@chakra-ui/vue-next';
</script>