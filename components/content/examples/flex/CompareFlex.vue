<template>
  <CBox>
    <CText>Flex and Spacer: Full width, equal Spacing</CText>
    <CFlex>
      <CBox w='70px' h='10' bg='red.500' />
      <CSpacer />
      <CBox w='170px' h='10' bg='red.500' />
      <CSpacer />
      <CBox w='180px' h='10' bg='red.500' />
    </CFlex>

    <CText>
      Grid: The children start at the beginning, the 1/3 mark and 2/3 mark
    </CText>
    <CGrid template-columns='repeat(3, 1fr)' gap={6}>
      <CBox w='70px' h='10' bg='blue.500' />
      <CBox w='170px' h='10' bg='blue.500' />
      <CBox w='180px' h='10' bg='blue.500' />
    </CGrid>

    <CText>
      HStack: The children have equal spacing but don't span the whole container
    </CText>
    <CHStack spacing='24px'>
      <CBox w='70px' h='10' bg='teal.500' />
      <CBox w='170px' h='10' bg='teal.500' />
      <CBox w='180px' h='10' bg='teal.500' />
    </CHStack>
  </CBox>
</template>