
<script setup>
import { CInput, CInputGroup, CInputLeftAddon, CInputRightAddon, CStack } from '@chakra-ui/vue-next';
</script>

<template>
    <CStack spacing="4" w="xl" align-items="center">
        <CInputGroup>
            <CInputLeftAddon>+234</CInputLeftAddon>
            <CInput type="tel" rounded-left="0" placeholder="phone number" />
        </CInputGroup>
        <!-- If you add the size prop to `InputGroup`, it'll pass it to all its children.  -->

        <CInputGroup>
            <CInputLeftAddon>https://</CInputLeftAddon>
            <CInput rounded="0" placeholder="mysite" />
            <CInputRightAddon>.com</CInputRightAddon>
        </CInputGroup>
    </CStack>
</template>
