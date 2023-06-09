---
title: Container
description:
  Container component is used to constrain a content's width to the current breakpoint, while keeping it fluid.
version: 2.0+
---

# Container

Containers are used to constrain a content's width to the current breakpoint, while keeping it fluid.

## Import

```js
import { CContainer } from '@chakra-ui/vue-next'
```

## Usage

To contain any piece of content, wrap it in the `CContainer` component.

::showcase
  ::simple-container
  ::
::

```html
<c-container>
    There are many benefits to a joint design and development system. Not only
    does it bring benefits to the design team, but it also brings benefits to
    engineering teams. It makes sure that our experiences have a consistent look
    and feel, not just in our design specs, but in production
</c-container>
```

### Container Size

By default, the `CContainer` component sets the `max-width` of the content to 60 characters (`60ch`) but you can customize this by passing custom `max-width` values or changing the size tokens.

> * About the default value: The `ch` unit is a relative unit defined by the rendered typeface's "0" character width. This width varies by the shape and style of the font. 
> * If you are curious about the reason for this default value of `60` characters, consider this explanation about [line length](https://betterwebtype.com/articles/2019/06/16/5-keys-to-accessible-web-typography/#line-length) from Better Web Type.

::showcase
  ::container-size
  ::
::

```html
<c-v-stack w="2xl" align-items="center">
    <c-container max-w='md' bg='blue.600' color='white'>
        "md" Container
    </c-container>
    <c-container max-w='550px' bg='purple.600' color='white'>
        "550px" Container
    </c-container>
    <c-container max-w='container.sm' bg='green.400' color='#262626'>
        "container.sm" Container
    </c-container>
</c-v-stack>
```

### Centering the children

In some cases, the width of the content can be smaller than the container's width. You can use the `center-content` prop to center the content. It renders a flexbox with `flex-direction` set to `column` and `align-items` set to `center`.
::showcase
  ::container-center
::

```html
<c-container max-w='2xl' bg='blue.600' center-content>
    <c-box padding='4' bg='blue.400' color='black' max-w='md'>
        There are many benefits to a joint design and development system. Not only
        does it bring benefits to the design team, but it also brings benefits to
        engineering teams. It makes sure that our experiences have a consistent look
        and feel, not just in our design specs, but in production.
    </c-box>
</c-container>
```
