<template>
    <c-input-group size="md">
        <c-input pr="4.5rem" :type="show ? 'text' : 'password'" placeholder="Enter password" v-model="password" />
        <c-input-right-element width="4.5rem">
            <c-button h="1.75rem" size="sm" @click="show = !show">
                {{ show ? 'Hide' : 'Show' }}
            </c-button>
        </c-input-right-element>
    </c-input-group>
</template>
  
<script setup>
import { CInput, CInputGroup, CInputRightElement } from '@chakra-ui/vue-next';
const show = ref(false);
const password = ref('kurama<3naruto');
</script>