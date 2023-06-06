<template>
    <c-stack spacing="4" w="xl" align-items="center">
        <c-input-group>
            <c-input-left-element><c-icon name="phone" color="gray.300" /></c-input-left-element>
            <c-input type="phone" placeholder="Phone number" />
        </c-input-group>

        <c-input-group>
            <c-input-left-element color="gray.300" fontSize="1.2em">¥</c-input-left-element>
            <c-input placeholder="Enter amount" />
            <c-input-right-element><c-icon name="check" color="green.500" /></c-input-right-element>
        </c-input-group>
    </c-stack>
</template>

<script setup>
import { CInput, CStack, CInputGroup, CInputLeftElement, CIcon, CInputRightElement } from '@chakra-ui/vue-next';
</script>