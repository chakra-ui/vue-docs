<script setup>
import { CButton, CInput, CInputGroup, CInputRightElement } from '@chakra-ui/vue-next';
const show = ref(false);
const password = ref('kurama<3naruto');
</script>

<template>
    <CInputGroup size="md">
        <CInput v-model="password" pr="4.5rem" :type="show ? 'text' : 'password'" placeholder="Enter password" />
        <CInputRightElement width="4.5rem">
            <CButton h="1.75rem" size="sm" @click="show = !show">
                {{ show ? 'Hide' : 'Show' }}
            </CButton>
        </CInputRightElement>
    </CInputGroup>
</template>
