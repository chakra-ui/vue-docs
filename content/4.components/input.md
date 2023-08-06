---
title: Input
description: Input component is a component that is used to get user input in a text field.
version: 2.0+
---

# Input

Input component is a component that is used to get user input in a text field.


## Import

```js
import { CInput } from '@chakra-ui/vue-next';
```

## Usage

Here's a basic usage example of the `CInput` component:

::showcase
::basic-input
::
::

```html
    <CInput placeholder="Basic usage" />
```


## Changing the size of the Input

The `Input` component comes in four sizes. The default is `md`.
* xs (24px)
* sm (32px)
* md (40px)
* lg (48px)

::showcase
::size-input
::
::

```html
<CStack spacing="3" w="2xl" align-items="center">
    <CInput placeholder="extra small size" size="xs" />
    <CInput placeholder="small size" size="sm" />
    <CInput placeholder="medium size" size="md" />
    <CInput placeholder="large size" size="lg" />
</CStack>
```

If you want to use the native DOM `size` attribute you can use the `htmlSize` prop. For it to work as expected you will also need to provide the `width` prop set to `auto`.

::showcase
::input-html-size
::
::

```html
<CInput html-size="4" width="auto" />
```


## Changing the appearance of the input

The input component comes in 4 variants: `outline`, `unstyled`, `flushed`, and `filled`. Pass the `variant` prop and set it to one of these values.

::showcase
::input-appearance
::
::

```html
<CStack spacing="3" w="2xl" align-items="center">
    <CInput variant='outline' placeholder='Outline' />
    <CInput variant='filled' placeholder='Filled' />
    <CInput variant='flushed' placeholder='Flushed' />
    <CInput variant='unstyled' placeholder='Unstyled' />
</CStack>
```


## Left and Right Addons

Like bootstrap, you can add addons to the left and right of the `Input` component. Chakra UI exports `InputGroup`, `InputLeftAddon`, and `InputRightAddon` to help with this use case.

::showcase
::input-addon
::
::


```html
<CStack spacing="4" w="xl" align-items="center">
    <CInputGroup>
        <CInputLeftAddon>+234</CInputLeftAddon>
        <CInput type="tel" rounded-left="0" placeholder="phone number" />
    </CInputGroup>

    <CInputGroup>
        <CInputLeftAddon>https://</CInputLeftAddon>
        <CInput rounded="0" placeholder="mysite" />
        <CInputRightAddon>.com</CInputRightAddon>
    </CInputGroup>
</CStack>
```

## Add elements inside Input

In some scenarios, you might need to add an icon or button inside the input component. Chakra UI exports `InputLeftElement` and `InputRightElement` to help with this use case.

If the left or right is an icon or text, you can pass `pointerEvents="none"` to `InputLeftElement` or `InputRightElement` to ensure that clicking on them focused the input.

::showcase
::input-elements
::
::

```html
<CStack spacing="4" w="xl" align-items="center">
    <CInputGroup>
        <CInputLeftElement><CIcon name="phone" color="gray.300" /></CInputLeftElement>
        <CInput type="phone" placeholder="Phone number" />
    </CInputGroup>

    <CInputGroup>
        <CInputLeftElement color="gray.300" fontSize="1.2em">¥</CInputLeftElement>
        <CInput placeholder="Enter amount" />
        <CInputRightElement><CIcon name="check" color="green.500" /></CInputRightElement>
    </CInputGroup>
</CStack>
```


## Password Input Example

Let's use these components to create a password input with a show/hide password functionality:

::showcase
::input-password
::
::

```html
<template>
    <CInputGroup size="md">
        <CInput pr="4.5rem" :type="show ? 'text' : 'password'" placeholder="Enter password" v-model="password" />
        <CInputRightElement width="4.5rem">
            <CButton h="1.75rem" size="sm" @click="show = !show">
                {{ show ? 'Hide' : 'Show' }}
            </CButton>
        </CInputRightElement>
    </CInputGroup>
</template>
  
<script setup>
    import { CInput, CInputGroup, CInputRightElement, CButton } from '@chakra-ui/vue-next';
    const show = ref(false);
    const password = ref('kurama<3naruto');
</script>
```


## Changing the focus and error border colors

You can change the border color that shows when the input receives focus (`focusBorderColor`) and when `isInvalid` is set to `true` (`errorBorderColor`). The value can be set to a color in the `$chakraTheme` object, like `green.400` or a raw CSS value.

::showcase
::input-focus
::
::

```html
<CStack spacing="4" w="xl" align-items="center">
    <CInput focus-border-color="lime" placeholder="Here is a sample placeholder" />
    <CInput focus-border-color="pink.400" placeholder="Here is a sample placeholder" />
    <CInput is-invalid error-border-color="red.300" placeholder="Here is a sample placeholder" />
    <CInput is-invalid error-border-color="crimson" placeholder="Here is a sample placeholder" />
</CStack>
```


## Styling the placeholder

The placeholder of an input can be styled by using the `_placeholder` prop. Per default the placeholder has an opacity of 0.6, so it can be necessary to set the opacity to 1 if you want the placeholder to have a specific color.

::showcase
::input-placeholder-style
::
::

```html
<c-stack spacing="4" w="xl" align-items="center">
    <CInput placeholder='default placeholder' />
    <CInput placeholder='custom placeholder' :_placeholder="{ opacity: 1, color: 'gray.500' }" />
    <CInput color='teal' placeholder='custom placeholder' :_placeholder="{ color: 'inherit' }" />
    <CInput color='tomato' placeholder='custom placeholder' :_placeholder="{ opacity: 0.4, color: 'inherit' }" />
</c-stack>
```


## Input Methods other than Text

You can use different types with `Input` such as dateTime, color, search, file etc.

Date and Time Picker

::showcase
::input-date
::
::

```html
<CInput type="datetime-local" placeholder="Select Date and Time" size="md" />
```

Check for different input types available : https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#input_types

## Props

The Input component composes PseudoBox so you can pass all `CPseudoBox` props, and normal `HTMLInput` attributes.

| Name             | Type                               | Default | Description                                                                                                                   |
|------------------|------------------------------------|---------|-------------------------------------------------------------------------------------------------------------------------------|
| `as`               | `HTMLElement` or `Vue.Component`       | `input`   | The component to use in place of `input`.                                                                                       |
| `aria-label`       | `string`                             |         | Accessibility label to use, in scenarios where the input has no visible label. A11y: It's usefult for screen readers.         |
| `aria-describedby` | `string`                             |         | Accessibility label to use, in scenarios where the input has no visible label. A11y: It's usefult for screen readers.         |
| `isDisabled`       | `boolean`                            | `false`   | If `true`, the input will be disabled. This sets `aria-disabled=true` and you can style this state by passing `_disabled` prop.     |
| `isInvalid`        | `boolean`                            | `false`   | If `true`, the input will indicate an error. This sets `aria-invalid=true` and you can style this state by passing `_invalid` prop. |
| `isRequired`       | `boolean`                            | `false`   | If `true`, the input element will be required.                                                                                  |
| `isFullWidth`      | `boolean`                            | `false`   | If `true`, the input element will span the full width of it's parent.                                                           |
| `isReadOnly`       | `boolean`                            | `false`   | If `true`, prevents the value of the input from being edited.                                                                   |
| `size`             | `sm`, `md`, `lg`                         | `md`      | The visual size of the `input` element.                                                                                         |
| `variant`          | `outline`, `unstyled`, `flushed`, `filled` | `outline` | The variant of the input style to use.                                                                                        |
| `focusBorderColor` | `string`                             |         | The border color when the input is focused.                                                                                   |
| `errorBorderColor` | `string`                             |         | The border color when `isInvalid` is set to `true`.                                                                               |


