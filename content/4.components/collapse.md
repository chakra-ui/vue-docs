---
title: Collapse
description: Collapse component
version: 2.0+
---
# Collapse

The Collapse component is used to create regions of content that can expand/collapse with a basic animation. It helps to hide content that's not immediately relevant to the user.

This component leverages [animejs](https://animejs.com/){target="_blank"}, and composes the Box component.

## Import

```js
import { CCollapse } from "@chakra-ui/vue-next";
```

## Usage

::showcase
:simple-collapse{width=full}
::


```html
<CBox>
  <CButton mb="4" variant-color="blue" @click="show = !show">
    Toggle
  </CButton>
  <CCollapse :is-open="show">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
    type specimen book.
  </CCollapse>
</CBox>
```

## Change the Starting Height

::showcase
:height-collapse{width=full}
::


```html
<CBox>
  <CButton mb="4" variant-color="blue" @click="show = !show">
    Show {{ show ? 'Less' : 'More' }}
  </CButton>
  <CCollapse :is-open="show" :starting-height="20">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
    type specimen book.
  </CCollapse>
</CBox>
```

## Props

This component doesn't have any custom props.

| Name           | Type      | Description                                                                                                                                       |
|----------------|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| isOpen         | `boolean` | If `true`, the content will be visible                                                                                                            |
| animateOpacity | `boolean` | If `true`, the opacity of the content will be animated                                                                                            |
| duration       | `number`  | The animation duration as it expands                                                                                                              |
| startingHeight | `number`  | he height you want the content in it's collapsed state. Set to `0` by default                                                                     |
| endingHeight   | `number`  | The height you want the content in it's expanded state. Set to `auto` by default                                                                  |
| easing         | `string`  | Add easing function for entering and leaving state. Accepts easing props from [animejs](https://animejs.com/documentation/#linearEasing){target="_blank"}. Set to `easeInOutSine` by default. |

## Events

| Name           | Payload      | Description                                                                                                                                       |
|----------------|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| `@start`         | `Event` | 	The event to be called when the collapse animation starts.                                                                                                            |
| `@finish` | `Event` | The event to be called when the collapse animation ends.                                                                                            |
