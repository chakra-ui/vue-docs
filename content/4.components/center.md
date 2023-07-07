---
title: Center
description: Center Component
version: 2.0+
---

# Center

Center is a layout component that centers its child within itself.

## Import

```js
import { CCenter, CCircle, CSquare } from '@chakra-ui/vue-next';
```

- CCenter: centers its child given `width` and `height`
- CSquare: centers its child given `size` (width and height)
- CCircle: a Square with round `border-radius`

## Usage

Put any child element inside it, give it any `width` or/and `height`, it'll ensure the child is centered.

::showcase
  ::simple-center{width=full}
  ::
::

```html
<CCenter bg='tomato' h='100px' color='white'>
    This is the Center
</CCenter>
```

## With Icons

CCenter can be used to create frames around icons or numbers.

::showcase
::icon-center
::
::

```html
<CHStack>
    <CCenter w='40px' h='40px' bg='tomato' color='white'>
        <CIcon name="phone" />
    </CCenter>
    <CCenter w='40px' h='40px' bg='tomato' color='white'>
        <CBox as='span' fontWeight='bold' fontSize='lg'>
        1
        </CBox>
    </CCenter>
</CHStack>
```

## Square and Circle

The Square and Circle components automatically centers its children given the size.

::showcase
::square-and-circle
::
::

```html
<CHStack>
    <CCircle size='40px' bg='teal.800' color='white'>
        <CIcon name="phone" />
    </CCircle>
    <CSquare size='40px' bg='rebeccapurple' color='white'>
        <CIcon name="phone" />
    </CSquare>
</CHStack>
  ```
