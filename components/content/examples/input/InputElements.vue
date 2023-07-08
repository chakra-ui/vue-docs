<script setup>
import { CInput, CInputGroup, CInputLeftElement, CIcon, CInputRightElement, CStack } from '@chakra-ui/vue-next';
</script>

<template>
    <CStack spacing="4" w="xl" align-items="center">
        <CInputGroup>
            <CInputLeftElement><CIcon name="phone" color="gray.300" /></CInputLeftElement>
            <CInput type="phone" placeholder="Phone number" />
        </CInputGroup>

        <CInputGroup>
            <CInputLeftElement color="gray.300" font-size="1.2em">¥</CInputLeftElement>
            <CInput placeholder="Enter amount" />
            <CInputRightElement><CIcon name="check" color="green.500" /></CInputRightElement>
        </CInputGroup>
    </CStack>
</template>
