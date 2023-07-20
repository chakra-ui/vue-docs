---
title: Flex
description: Flex Component
version: 2.0+
---

# Flex

Flex is `CBox` with `display: flex` and comes with helpful style shorthand. It renders a `div` element.

## Import

```js
import { CFlex, CSpacer } from '@chakra-ui/vue-next';
```

- Flex: A `CBox` with `display: flex`.
- Spacer: Creates an adjustable, empty space that can be used to tune the spacing between child elements within Flex.

## Usage

When using the Flex component, you can use some of the following helpful shorthand props:

- `direction` for `flexDirection`
- `wrap` for `flexWrap`
- `align` for `alignItems`
- `justify` for `justifyContent`
<!-- - `basis` for `flexBasis`
- `shrink` for `flexShrink` -->
While you can pass the verbose props, using the shorthand can save you some time.

::showcase
::simple-flex{width=full}
::
::

```html
<CFlex color='white'>
    <CCenter w='100px' bg='green.500'>
      <CText>Box 1</CText>
    </CCenter>
    <CSquare bg='blue.500' size='150px'>
      <CText>Box 2</CText>
    </CSquare>
    <CBox flex='1' bg='tomato'>
      <CText>Box 3</CText>
    </CBox>
</CFlex>
```

### Using the Spacer

As an alternative to `CStack`, you can combine `CFlex` and `CSpacer` to create stackable and responsive layouts.

::showcase
::spacer-flex{width=full}
::
::

```html
<CFlex>
    <CBox p='4' bg='red.400'>
        Box 1
    </CBox>
    <CSpacer />
    <CBox p='4' bg='green.400'>
        Box 2
    </CBox>
</CFlex>
```

### Flex and Spacer vs Grid vs Stack

The `CFlex` and `CSpacer` components, `CGrid` and `CHStack` treat children of different widths differently.

- In `CHStack`, the children will have equal spacing between them but they won't span the entire width of the container.
- In `CGrid`, the starting points of the children will be equally spaced but the gaps between them will not be equal.
- With `CFlex` and `CSpacer`, the children will span the entire width of the container and also have equal spacing between them.

::showcase
::compare-flex{width=full}
::
::

```html
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
  ```

  A good use case for `CSpacer` is to create a navbar with a signup/login button aligned to the right.

Since `CSpacer` renders a `div`, any `gap` value provided to the parent is applied to both sides of this component, and therefore make the gap appear doubled when the spacer is completely collapsed.

> The example below is not responsive on purpose as you might switch to a collapsed menu on mobile.

::showcase
::sign-up-flex{width=full}
::
::

```html
<CFlex min-width='max-content' align-items='center' gap='2'>
    <CBox p='2'>
      <CHeading size='md'>Chakra App</CHeading>
    </CBox>
    <CSpacer />
    <CButtonGroup p='2'>
      <CButton rounded="10px" color-scheme='teal'>Sign Up</CButton>
      <CButton rounded="10px" color-scheme='teal'>Log in</CButton>
    </CButtonGroup>
</CFlex>
```