<template>
    <CInputGroup size="md">
        <CInput pr="4.5rem" :type="show ? 'text' : 'password'" placeholder="Enter password" v-model="password" />
        <CInputRightElement width="4.5rem">
            <CButton h="1.75rem" size="sm" @click="show = !show">
                {{ show ? 'Hide' : 'Show' }}
            </CButton>
        </CInputRightElement>
    </CInputGroup>
</template>
  
<script setup>
const show = ref(false);
const password = ref('kurama<3naruto');
</script>