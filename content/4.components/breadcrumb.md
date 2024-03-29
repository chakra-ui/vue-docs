---
title: Breadcrumb
description: Breadcrumb component
version: 2.0+
---

# Breadcrumbs

Breadcrumbs is a navigation pattern that helps users understand the hierarchy and organization of the website's content. They appear top of a web page, and display the successive paths a user on a web page. They are clickable links that represent preceeding pages to a current web page.

## Usage

Chakra-Ui Vue exports 4 breadcrumb compoennts

- **CBreadcrumb**: The parent container for breadcrumbs component.
- **CBreadcrumbItem**: Individual breadcrumb element containing a link and a divider.
- **CBreadcrumbLink**: The breadcrumb link.
- **CBreadcrumbSeparator**: The separator between eac breadcrumb item. Usualy an icon, string, chevron and others.

```js
import {
  CBreadcrumb,
  CBreadcrumbItem,
  CBreadcrumbLink,
  CBreadcrumbSeparator
} from '@chakra-ui/vue-next';
```

## Usage

::showcase
::simple-breadcrumb
::
::

When you use the `is-current-page` prop on a `CBreadcrumbItem`, it tells the `CBreadcrumbLink` that it represents the current page.

```html
<c-breadcrumb>
  <c-breadcrumb-item>
    <c-breadcrumb-link href="#">Home</c-breadcrumb-link>
  </c-breadcrumb-item>
  <c-breadcrumb-item>
    <c-breadcrumb-link href="#">Docs</c-breadcrumb-link>
  </c-breadcrumb-item>
  <c-breadcrumb-item is-current-page>
    <c-breadcrumb-link href="#">About</c-breadcrumb-link>
  </c-breadcrumb-item>
</c-breadcrumb>
```

### With Separators

Breadcrumb separators can be used in four ways, either as default separator, with separator as string, with separator props as functional component, and with separator slot.

#### Using the default separator

::showcase
::default-separator
::
::

```html
<c-breadcrumb>
  <c-breadcrumb-item>
    <c-breadcrumb-link href="#">Home</c-breadcrumb-link>
  </c-breadcrumb-item>
  <c-breadcrumb-item>
    <c-breadcrumb-link href="#">Docs</c-breadcrumb-link>
  </c-breadcrumb-item>
  <c-breadcrumb-item is-current-page>
    <c-breadcrumb-link href="#">About</c-breadcrumb-link>
  </c-breadcrumb-item>
</c-breadcrumb>
```

#### Using functional separator

::showcase
::functional-separator
::
::

```html
<c-breadcrumb :separator="Sun">
  <c-breadcrumb-item>
    <c-breadcrumb-link href="#">Home</c-breadcrumb-link>
  </c-breadcrumb-item>
  <c-breadcrumb-item>
    <c-breadcrumb-link href="#">Docs</c-breadcrumb-link>
  </c-breadcrumb-item>
  <c-breadcrumb-item is-current-page>
    <c-breadcrumb-link href="#">About</c-breadcrumb-link>
  </c-breadcrumb-item>
</c-breadcrumb>
```

#### Using String as separator

::showcase
::string-separator
::
::

```html
<c-breadcrumb separator=">">
  <c-breadcrumb-item>
    <c-breadcrumb-link href="#">Home</c-breadcrumb-link>
  </c-breadcrumb-item>
  <c-breadcrumb-item>
    <c-breadcrumb-link href="#">Docs</c-breadcrumb-link>
  </c-breadcrumb-item>
  <c-breadcrumb-item is-current-page>
    <c-breadcrumb-link href="#">About</c-breadcrumb-link>
  </c-breadcrumb-item>
</c-breadcrumb>
```

#### Using slot

::showcase
::slot-separator
::
::

```html
<c-breadcrumb>
  <template v-slot:separator>
    <c-icon name="chevron-right" />
  </template>
  <c-breadcrumb-item>
    <c-breadcrumb-link href="#">Home</c-breadcrumb-link>
  </c-breadcrumb-item>
  <c-breadcrumb-item>
    <c-breadcrumb-link href="#">Docs</c-breadcrumb-link>
  </c-breadcrumb-item>
  <c-breadcrumb-item is-current-page>
    <c-breadcrumb-link href="#">About</c-breadcrumb-link>
  </c-breadcrumb-item>
</c-breadcrumb>
```

## Composition

You can easily style and customize the breadcrumb by passing styles props to the `CBreadcrumb` component. The example below is giving color and fontsize to the breadcrumb.

::showcase
::breadcrumb-composition
::
::

```html
<c-breadcrumb font-size="sm" font-weight="semibold" color="red.500">
  <c-breadcrumb-item>
    <c-breadcrumb-link href="#">Home</c-breadcrumb-link>
  </c-breadcrumb-item>
  <c-breadcrumb-item>
    <c-breadcrumb-link href="#">Docs</c-breadcrumb-link>
  </c-breadcrumb-item>
  <c-breadcrumb-item is-current-page>
    <c-breadcrumb-link href="#">About</c-breadcrumb-link>
  </c-breadcrumb-item>
</c-breadcrumb>
```

## With Vue Routing

You can use the `CBreadcrumbLink` with the vue-router by passing the `as` prop to the `CBreadcrumbLink`

```js
<template>
<c-breadcrumb>
  <template v-slot:separator>
    <c-icon name="chevron-right" />
  </template>
  <c-breadcrumb-item>
    <c-breadcrumb-link as="router-link" to="/components/breadcrumb">
      Home
    </c-breadcrumb-link>
  </c-breadcrumb-item>
  <c-breadcrumb-item>
    <c-breadcrumb-link as="router-link" to="/components/breadcrumb">
      Docs
    </c-breadcrumb-link>
  </c-breadcrumb-item>
  <c-breadcrumb-item is-current-page>
    <c-breadcrumb-link as="router-link" to="/">
      About
    </c-breadcrumb-link>
  </c-breadcrumb-item>
</c-breadcrumb>
<template>
```

## Accessibility

- The CBreadcrumbItem with `is-current-page` prop adds the aria-current=page to the `CBreadcrumbLink`.
- The CBreadcrumb separators define the direction of the breadcrumb trail.
- The CBreadcrumb `nav` has aria-label set to `breadcrumb`.
