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
<c-center bg='tomato' h='100px' color='white'>
    This is the Center
</c-center>
```

## With Icons

CCenter can be used to create frames around icons or numbers.

::showcase
::icon-center
::
::

```html
<c-h-stack>
    <c-center w='40px' h='40px' bg='tomato' color='white'>
        <c-icon name="phone" />
    </c-center>
    <c-center w='40px' h='40px' bg='tomato' color='white'>
        <c-box as='span' fontWeight='bold' fontSize='lg'>
        1
        </c-box>
    </c-center>
</c-h-stack>
```

## Square and Circle

The Square and Circle components automatically centers its children given the size.

::showcase
::square-and-circle
::
::

```html
<c-h-stack>
    <c-circle size='40px' bg='teal.800' color='white'>
        <c-icon name="phone" />
    </c-circle>
    <c-square size='40px' bg='rebeccapurple' color='white'>
        <c-icon name="phone" />
    </c-square>
</c-h-stack>
  ```
