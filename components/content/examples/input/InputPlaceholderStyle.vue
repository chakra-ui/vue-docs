<template>
    <CStack spacing="4" w="xl" align-items="center">
        <CInput placeholder='default placeholder' />
        <CInput placeholder='custom placeholder' :_placeholder="{ opacity: 1, color: 'gray.500' }" />
        <CInput color='teal' placeholder='custom placeholder' :_placeholder="{ color: 'inherit' }" />
        <CInput color='tomato' placeholder='custom placeholder' :_placeholder="{ opacity: 0.4, color: 'inherit' }" />
    </CStack>
</template>
