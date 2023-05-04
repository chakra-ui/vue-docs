---
title: Button
description: Button component
version: 2.0+
---

# Button

Button in their variant forms typically allowusers to perform an action when clicked. They can be used in different components for different purposes. Like;

- Alert Component
- Form Component

## Import

Chakra UI Vue exports 2 button related components

- **CButton**: The button component with support for other features like icons, and spinners.
- **CButtonGroup**: The button group component for pair buttons with related functions

```js
import { CButtton, CButtonGroup } from '@chakra-ui/vue-next';
```

## Usage

::showcase
::base-button{size="lg"}
::
::

```html
<CButton>Button</CButton>
```

### Button Sizes

Use the size prop to change the size of the button. You can set the value to `xs,` `sm,` `md,` or `lg`.

::showcase
::sizes-button{spacing="2"}
::
::

```html
<c-button size="xs" color-scheme="teal"> Button </c-button>
<c-button size="sm" color-scheme="teal"> Button </c-button>
<c-button size="md" color-scheme="teal"> Button </c-button>
<c-button size="lg" color-scheme="teal"> Button </c-button>
```

### Button Variants

You can change the button style to either `solid` `ghost` `outline` or `link` by applying the `variant` prop.

::showcase
::variant-button{spacing="2"}
::
::

```html
<c-button variant="luxury"> Button </c-button>
<c-button variant="solid" color-scheme="teal"> Button </c-button>
<c-button variant="outline" color-scheme="teal"> Button </c-button>
<c-button variant="ghost" color-scheme="teal"> Button </c-button>
<c-button variant="link" color-scheme="teal"> Button </c-button>
```

### Button with Icon

You can change the button style to either `solid` `ghost` `outline` or `link` by applying the `variant` prop.

::showcase
::icon-button
::
::

```html
<c-button mr="3" left-icon="email" variant="solid" color-scheme="teal">
  Base button
</c-button>
<c-button mr="3" right-icon="star" variant="outline" color-scheme="teal">
  Base button
</c-button>
```

### Button Loading State

You can set the loading props on a button when it is loading,to indicate it is carrying out an action by using the `:is-loading` props to set an onClick action.

::showcase
::loading-button
::
::

```html
<c-button
  mr="3"
  :is-loading="isLoading"
  color-scheme="teal"
  loading-text="Saving..."
  size="lg"
  color="white"
  font-size="sm"
  @click="doTask"
>
  Click me
</c-button>
<c-button
  mr="3"
  :is-loading="isLoading"
  @click="doTask"
  color-scheme="purple"
  size="lg"
  font-size="sm"
>
  Click me
</c-button>
```

### Button Group

You can use the `CButtonGroup` component to group buttons. When you use the ButtonGroup component, it allows you to:

- Set the size and variant of all buttons within it.
- Add spacing between the buttons.
- Flush the buttons together by removing the border radius of their children as needed.

::showcase
::button-group
::
::

```html
<c-button-group variant="outline">
  <c-button color-scheme="blue">Proceed</c-button>
  <c-button>Cancel</c-button>
</c-button-group>
```

## Accessibility

- Button has role of button.
- When Button has focus, Space or Enter activates it.

## Composition

All props you pass `variant`, `colorScheme`, `size` etc are converted to style props. This therefore means you can override any style of the Button via props.

::showcase
::button-composition
::
::

```html
<c-button
  size="md"
  height="48px"
  width="200px"
  border="2px"
  border-radius="sm"
  color-scheme="blue"
  variant="outline"
>
  Button
</c-button>
```

## Customizable Button

You can pass-in other props to make fully customizable buttons, you can do this easily by defining each props based on your button composition.

::showcase
::custom-button
::
::

```html
<c-button
  border="1px solid rgba(47, 43, 67, 0.1)"
  border-radius="12px"
  mr="3"
  variant="outline"
  box-shadow="0px 1px 3px rgba(47, 43, 67, 0.1), inset 0px -1px 0px rgba(47, 43, 67, 0.1)"
  bg="transparent"
  size="lg"
>
  Button
</c-button>
```
