<script setup>
import { CInput, CStack } from '@chakra-ui/vue-next';
</script>

<template>
    <CStack spacing="3" w="2xl" align-items="center">
        <CInput placeholder="extra small size" size="xs" />
        <CInput placeholder="small size" size="sm" />
        <CInput placeholder="medium size" size="md" />
        <CInput placeholder="large size" size="lg" />
    </CStack>
</template>
