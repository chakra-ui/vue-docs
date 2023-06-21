---
title: Flex
description: Flex Component
version: 2.0+
---

# Flex

Flex is `Box` with `display: flex` and comes with helpful style shorthand. It renders a `div` element.

## Import

```js
import { CFlex, CSpacer } from '@chakra-ui/vue-next';
```

- Flex: A `Box` with `display: flex`.
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
<c-flex color='white'>
    <c-center w='100px' bg='green.500'>
      <c-text>Box 1</c-text>
    </c-center>
    <c-square bg='blue.500' size='150px'>
      <c-text>Box 2</c-text>
    </c-square>
    <c-box flex='1' bg='tomato'>
      <c-text>Box 3</c-text>
    </c-box>
</c-flex>
```

### Using the Spacer

As an alternative to `CStack`, you can combine `CFlex` and `CSpacer` to create stackable and responsive layouts.

::showcase
::spacer-flex{width=full}
::
::

```html
<c-flex>
    <c-box p='4' bg='red.400'>
        Box 1
    </c-box>
    <c-spacer />
    <c-box p='4' bg='green.400'>
        Box 2
    </c-box>
</c-flex>
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
<c-box>
    <c-text>Flex and Spacer: Full width, equal Spacing</c-text>
    <c-flex>
      <c-box w='70px' h='10' bg='red.500' />
      <c-spacer />
      <c-box w='170px' h='10' bg='red.500' />
      <c-spacer />
      <c-box w='180px' h='10' bg='red.500' />
    </c-flex>

    <c-text>
      Grid: The children start at the beginning, the 1/3 mark and 2/3 mark
    </c-text>
    <c-grid template-columns='repeat(3, 1fr)' gap={6}>
      <c-box w='70px' h='10' bg='blue.500' />
      <c-box w='170px' h='10' bg='blue.500' />
      <c-box w='180px' h='10' bg='blue.500' />
    </c-grid>

    <c-text>
      HStack: The children have equal spacing but don't span the whole container
    </c-text>
    <c-h-stack spacing='24px'>
      <c-box w='70px' h='10' bg='teal.500' />
      <c-box w='170px' h='10' bg='teal.500' />
      <c-box w='180px' h='10' bg='teal.500' />
    </c-h-stack>
  </c-box>
  ```

  A good use case for `CSpacer` is to create a navbar with a signup/login button aligned to the right.

Since `CSpacer` renders a `div`, any `gap` value provided to the parent is applied to both sides of this component, and therefore make the gap appear doubled when the spacer is completely collapsed.

> The example below is not responsive on purpose as you might switch to a collapsed menu on mobile.

::showcase
::sign-up-flex{width=full}
::
::

```html
<c-flex min-width='max-content' align-items='center' gap='2'>
    <c-box p='2'>
      <c-heading size='md'>Chakra App</c-heading>
    </c-box>
    <c-spacer />
    <c-button-group p='2'>
      <c-button rounded="10px" color-scheme='teal'>Sign Up</c-button>
      <c-button rounded="10px" color-scheme='teal'>Log in</c-button>
    </c-button-group>
</c-flex>
```