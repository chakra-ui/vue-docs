---
title: Alert
description: Alert Component
version: 2.0+
---

# Alert

Alert component displays a short important message such as error message, warning message, success message or other prompt notifications.

## Import

This package exports the following alert components

- **CAlert**: The alert container which wraps the entire alert components.
- **CAlertTitle**: This component describes the title of an alert.
- **CAlertDescription**: The description component is used to pass the alert message.
- **CAlertIcon**: The alert Icon component can be used to define the seevrity of an alert.

```js
import {
  CAlert,
  CAlertTitle,
  CAlertDescription,
  CAlertIcon
} from '@chakra-ui/vue-next';
```

## Usage

## With Title and Description

You can use the `CAlertTitle` and `CAlertDescription` component to display an alert content

::showcase
::base-alert
::
::

```html
<c-alert status="success">
  <c-alert-title>Updated Successfully</c-alert-title>
  <c-alert-description>Click to view your profile</c-alert-description>
</c-alert>
```

### With Icon

Icons are defined based on the `status` props passed in the `CAlert` component. The `status` props are often defined based on the event.

::showcase
::wrap{align="center" width="full" spacing="2"}
::icon-alert
::

```html
<c-alert variant="left-accent" status="info" mb="3">
  <c-alert-icon mr="2" />
  <c-alert-description> Please,updat your KYC. </c-alert-description>
</c-alert>

<c-alert variant="left-accent" status="warning" mb="3">
  <c-alert-icon mr="2" />
  <c-alert-description> Incorrect Password </c-alert-description>
</c-alert>

<c-alert variant="left-accent" status="success" mb="3">
  <c-alert-icon mr="2" />
  <c-alert-description>
    Congratulations!. You scored above 75%
  </c-alert-description>
</c-alert>

<c-alert variant="left-accent" status="error" mb="3">
  <c-alert-icon mr="2" />
  <c-alert-description> Access revoked!</c-alert-description>
</c-alert>
```

### With Status

This alert offers the `status` prop to define severity or success based by color, icon and scheme of the component. The supported props are `error, warning, success` and `info` statuses.

::showcase
::wrap{align="center" width="full" spacing="2"}
::status-alert
::

```html
<c-alert status="info" mb="3"
  ><c-alert-icon mr="2" /> Please update your KYC.</c-alert
>
<c-alert status="success" mb="3"
  ><c-alert-icon mr="2" />
  Your Info has been saved successfully.
</c-alert>
<c-alert status="warning" mb="3"
  ><c-alert-icon mr="2" /> Unable to process request
</c-alert>
<c-alert status="error" mb="3"
  ><c-alert-icon mr="2" /> Password is Incorrect!.
</c-alert>
```

### With Accent

You can use the`variant` props on the `CAlert` to create variant styles. The `variant` props supported are `subtle, solid, left-accent,and top-accent`.

::showcase
::wrap{align="center" width="full" spacing="2"}
::accent-alert
::

```html
<c-alert variant="solid" status="success">
  <c-alert-icon mr="2" />
  <c-alert-description> Submitted Successfully! </c-alert-description>
</c-alert>

<c-alert variant="subtle" status="success" mb="3">
  <c-alert-icon mr="2" />
  <c-alert-description> Submitted Successfully! </c-alert-description>
</c-alert>

<c-alert variant="left-accent" status="success" mb="3">
  <c-alert-icon mr="2" />
  <c-alert-description> Submitted Successfully! </c-alert-description>
</c-alert>

<c-alert variant="top-accent" status="success" mb="3">
  <c-alert-icon mr="2" />
  <c-alert-description> Submitted Successfully! </c-alert-description>
</c-alert>
```

## Composition

`CAlert` can be integrated with other components, to create sleek and seamless alert layouts on your Vue user interface.

::showcase
::composition
::
::

```html
<c-alert
  variant="subtle"
  status="success"
  flex-direction="column"
  height="auto"
  text-align="center"
  align-items="center"
  justify-content="center"
  w="full"
>
  <c-alert-icon box-size="40px" />
  <c-alert-title mt="4" mb="1" font-size="lg"
    >Application Submitted!</c-alert-title
  >
  <c-alert-description max-width="sm" mt="auto" font-weight="normal"
    >Our team will review your application. If you are found a fit for this
    role, someone will be in touch with you. Please do well to stay in touch
    with our Jobs page</c-alert-description
  >
</c-alert>
```

`CAlert` can as well be used with other Chakra-Vue components, let's for example use the `CButton` alongside the `CAlert`.

::showcase
::composition-example2
::
::

```javascript
<template>
  <c-button
    v-if="!showAlert"
    @click="showAlert = true"
    border="1px solid rgba(47, 43, 67, 0.1)"
    border-radius="sm"
    mr="3"
    variant="outline"
    box-shadow="0px 1px 3px rgba(47, 43, 67, 0.1), inset 0px -1px 0px rgba(47, 43, 67, 0.1)"
    bg="transparent"
  >
    Show alert
  </c-button>
  <c-alert
    v-if="showAlert"
    status="warning"
    variant="subtle"
    flex-direction="column"
    align-items="center"
    justify-content="center"
    text-align="center"
  >
    <c-alert-icon />
    <c-alert-title mt="4" mb="1" font-size="lg"
      >Before Submitting</c-alert-title
    >
    <c-alert-description max-width="sm" mt="auto" font-weight="normal">
      Kindly note that this decision cannot be reversed, once you submit, your
      results are uploaded to the database.
    </c-alert-description>
    <c-button-group variant="outline" mt="4">
      <c-button color-scheme="blue" @click="showAlert = false"
        >Proceed</c-button
      >
      <c-button @click="showAlert = false">Cancel</c-button>
    </c-button-group>
  </c-alert>
</template>

<script setup>
  import {
    CButtonGroup,
    CButton,
    CAlert,
    CAlertIcon,
    CAlertTitle,
    CAlertDescription
  } from '@chakra-ui/vue-next';
  import { ref } from 'vue';

  const showAlert = ref(true);
</script>
```
