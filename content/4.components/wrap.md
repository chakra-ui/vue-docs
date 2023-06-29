---
title: Wrap
description: Wrap component
version: 2.0+
---

# Wrap

Wrap is a layout component used to add space between elements and wraps automatically if there isn't enough space.

## Import

```js
import { CWrap, CWrapItem } from '@chakra-ui/vue-next';
```

- Wrap: Wrap composes the Box component and renders a <ul> tag
- WrapItem: WrapItem composes the Box component and renders the HTML <li> tag

## Usage

The Wrap component is a `flex` box container that can wrap its children onto multiple lines with `flex-wrap` and `spacing` support. It is useful for displaying elements that are typically placed side-by-side, such as dialog buttons, tags, and chips.

The example below shows how the last `Box` component wraps to the next line because there is not enough space to fit it on the same line as the other Box components.

::showcase
::simple-wrap
::
::

```html
<c-wrap spacing='10px'>
    <c-wrap-item>
        <c-center w='180px' h='80px' bg='red.200'>
        Box 1
        </c-center>
    </c-wrap-item>
    <c-wrap-item>
        <c-center w='180px' h='80px' bg='green.200'>
        Box 2
        </c-center>
    </c-wrap-item>
    <c-wrap-item>
        <c-center w='180px' h='80px' bg='tomato'>
        Box 3
        </c-center>
    </c-wrap-item>
    <c-wrap-item>
        <c-center w='180px' h='80px' bg='blue.200'>
        Box 4
        </c-center>
    </c-wrap-item>
    <c-wrap-item>
        <c-center w='180px' h='80px' bg='purple.200'>
        Box 5
        </c-center>
    </c-wrap-item>
</c-wrap>
```

## Change the spacing

To ensure that the spacing between each child is consistent, even if the children wrap, pass the `spacing` prop.

> Pro Tip: You can pass responsive values for the spacing.

::showcase
::spacing-wrap
::
::

```html
<c-wrap spacing='30px'>
    <c-wrap-item>
        <c-center w='180px' h='80px' bg='red.200'>
        Box 1
        </c-center>
    </c-wrap-item>
    <c-wrap-item>
        <c-center w='180px' h='80px' bg='green.200'>
        Box 2
        </c-center>
    </c-wrap-item>
    <c-wrap-item>
        <c-center w='180px' h='80px' bg='tomato'>
        Box 3
        </c-center>
    </c-wrap-item>
    <c-wrap-item>
        <c-center w='180px' h='80px' bg='blue.200'>
        Box 4
        </c-center>
    </c-wrap-item>
    <c-wrap-item>
        <c-center w='180px' h='80px' bg='purple.200'>
        Box 5
        </c-center>
    </c-wrap-item>
</c-wrap>
```

## Change the alignment

The `align` prop can be used to change the alignment of a child along the cross axis.

::showcase
::align-wrap
::
::

```html
<c-wrap spacing='30px' align='center'>
    <c-wrap-item>
      <c-center w='180px' h='80px' bg='red.200'>
        Box 1
      </c-center>
    </c-wrap-item>
    <c-wrap-item>
      <c-center w='180px' h='40px' bg='green.200'>
        Box 2
      </c-center>
    </c-wrap-item>
    <c-wrap-item>
      <c-center w='180px' h='80px' bg='tomato'>
        Box 3
      </c-center>
    </c-wrap-item>
    <c-wrap-item>
      <c-center w='180px' h='60px' bg='blue.200'>
        Box 4
      </c-center>
    </c-wrap-item>
    <c-wrap-item>
      <c-center w='180px' h='80px' bg='purple.200'>
        Box 5
      </c-center>
    </c-wrap-item>
</c-wrap>
```
The `justify` prop specifies the alignment of a child along the main axis.

::showcase
::justify-wrap
::
::

```html
<c-wrap spacing='30px' justify='center'>
    <c-wrap-item>
      <c-center w='180px' h='80px' bg='red.200'>
        Box 1
      </c-center>
    </c-wrap-item>
    <c-wrap-item>
      <c-center w='180px' h='80px' bg='green.200'>
        Box 2
      </c-center>
    </c-wrap-item>
    <c-wrap-item>
      <c-center w='180px' h='80px' bg='tomato'>
        Box 3
      </c-center>
    </c-wrap-item>
    <c-wrap-item>
      <c-center w='180px' h='80px' bg='blue.200'>
        Box 4
      </c-center>
    </c-wrap-item>
    <c-wrap-item>
      <c-center w='180px' h='80px' bg='purple.200'>
        Box 5
      </c-center>
    </c-wrap-item>
</c-wrap>
```

