---
title: Close Button
description: Close Button Component
version: 2.0+
---

# Close Button

CloseButton is essentially a button with a close icon, that performsa close action on a component usually a dialogue or alert component.

## Usage

Chakra-Ui Vue exports one Close-button component

- **CloseButton**: The box container containing the close icon

```js
import { CCloseButton } from '@chakra-ui/vue-next';
```

Base button

Simply display the close button by using the `CCloseButton` component

::showcase
::close-button
::
::

```html
<c-close-button @click="handleClose" />
```

### Button Size

You can adjust the button sizes by passing the `size` prop as either `sm`,`md`, or `lg`

::showcase
::close-button-sizes{spacing="4"}
::
::

```html
<c-stack>
  <c-close-button size="sm" @click="handleClose" />
  <c-close-button size="md" @click="handleClose" />
  <c-close-button size="lg" @click="handleClose" />
</c-stack>
```

## Composition

The Close Button can be used to perform close actions with other components. See how;

::showcase
::close-button-composition
::
::
