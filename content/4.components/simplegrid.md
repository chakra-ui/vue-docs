---
title: SimpleGrid
description: SimpleGrid component
version: 2.0+
---

# SimpleGrid


SimpleGrid is a user-friendly tool for effortlessly creating responsive grid layouts, utilizing a div element with display: grid.

## Import

```js
import { CSimpleGrid } from '@chakra-ui/vue-next';
```

## Usage

Specifying the number of columns for the grid layout.

### Sample Tag :

::showcase
::simple-grid-example{width=full}
::
::

```html
<CSimpleGrid :columns="2" :spacing="10">
  <CBox background="green" height="80px"></CBox>
  <CBox background="red" height="80px"></CBox>
  <CBox background="blue.900" height="80px"></CBox>
  <CBox background="darkorange" height="80px"></CBox>
  <CBox background="yellow" height="80px"></CBox>
</CSimpleGrid>
```

You can also make it responsive by passing array or object values into the `columns` prop.

::showcase
::simple-grid-responsive{width=full}
::
::

```html
<CSimpleGrid :columns="[2, null, 3]" spacing="40px">
  <CBox background="green" height="80px"></CBox>
  <CBox background="red" height="80px"></CBox>
  <CBox background="blue.900" height="80px"></CBox>
  <CBox background="darkorange" height="80px"></CBox>
  <CBox background="yellow" height="80px"></CBox>
</CSimpleGrid>
```

### Auto-responsive grid#

To make the grid responsive adjust automatically without passing `columns`, simply pass the `min-child-width` prop to specify the `min-width` a child should have before adjusting the layout.

This uses css grid `auto-fit` and `minmax()` internally.

### Changing the spacing for columns and rows

Simply pass the `spacing` prop to change the row and column spacing between the grid items. `SimpleGrid` also allows you pass `spacing-x` and `spacing-y` to define the space between columns and rows respectively.

::showcase
::simple-grid-spacing{width=full}
::
::

```html
<CSimpleGrid :columns="2" spacing-x="40px" spacing-y="20px">
  <CBox background="green" height="80px"></CBox>
  <CBox background="red" height="80px"></CBox>
  <CBox background="blue.900" height="80px"></CBox>
  <CBox background="darkorange" height="80px"></CBox>
  <CBox background="yellow" height="80px"></CBox>
</CSimpleGrid>
```

## Props

SimpleGrid composes `Box` so you can pass all the `Box` props and CSS grid props with the addition of these:

| Name             | Type                        | Description                                                                                                                           |
|------------------|-----------------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| `columns`        | `number`                    | The number of columns                                                                                                                 |
| `spacing`        | `GridProps["gridGap"]`      | The gap between the grid items                                                                                                        |
| `spacingX`       | `GridProps["gridGap"]`      | The `column` gap between the grid items                                                                                               |
| `spacingY`       | `GridProps["gridGap"]`      | The `row` gap between the grid items                                                                                                  |
| `minChildWidth` | `CSSProperties["minWidth"]` | The width at which child elements will break into columns. Pass a number for pixel values or a string for any other valid CSS length. |