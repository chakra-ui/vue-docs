<template>
    <c-stack spacing="4" w="xl" align-items="center">
        <c-input-group>
            <c-input-left-addon>+234</c-input-left-addon>
            <c-input type="tel" roundedLeft="0" placeholder="phone number" />
        </c-input-group>
        <!-- If you add the size prop to `InputGroup`, it'll pass it to all its children.  -->

        <c-input-group>
            <c-input-left-addon>https://</c-input-left-addon>
            <c-input rounded="0" placeholder="mysite" />
            <c-input-right-addon>.com</c-input-right-addon>
        </c-input-group>
    </c-stack>
</template>

<script setup>
import { CInput, CStack, CInputGroup, CInputLeftAddon, CInputRightAddon } from '@chakra-ui/vue-next';
</script>