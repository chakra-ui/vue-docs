---
title: Alert
description: Alert Component
version: 2.0+
---

# Alert

Alert component displays a short important message such as error message, warning message, success message or other prompt notifications.

## Import

This package exports the following components

- **CAlert**: The alert container which wraps the entire alert components.
- **CAlertTitle**: This component describes the title of an alert.
- **CAlertDescription**: The description component is used to pass the alert message.
- **CAlertIcon**: The alert Icon, can be attached to the alert component to signify a particular event.

```js
import {
  CAlert,
  CAlertTitle,
  CAlertDescription,
  CAlertIcon
} from '@chakra-ui/vue-next';
```

## Usage

This alert displays a basic message.

### With Title :

You can use only the `CAlert` element to display a simple basic alert message with title.

::showcase
::alert
Base Alert
::
::

```html
<c-alert> <slot /></c-alert>
```

### With Accent

You can create an alert with an accent tag on `CAlert`, using the `variant` tag set to either `subtle, left-accent,and top-accent` and also setting `status` as either `true or false`

::showcase
::wrap{align="center" width="full" spacing="2"}
::accent-alert
::

```html
<c-alert status="success" mb="3">
  <c-alert-title> Solid alert </c-alert-title>
  <c-alert-description> Updated Successfully </c-alert-description>
</c-alert>
<c-alert variant="subtle" status="success" mb="3">
  <c-alert-title> Subtle Alert </c-alert-title>
  <c-alert-description>
    You have passed the test successfully
  </c-alert-description>
</c-alert>
<c-alert variant="left-accent" status="success" mb="3">
  <c-alert-title> Left accent alert </c-alert-title>
  <c-alert-description>
    You failed the security check, try again!
  </c-alert-description>
</c-alert>
<c-alert variant="top-accent" status="success" mb="3">
  <c-alert-title> Top accent alert </c-alert-title>
  <c-alert-description> Something just happened </c-alert-description>
</c-alert>
```

### With Status

Status defines the event that prompts an alert, may be an error, warning or success. You can create this by defining the `status` tag on the `CAlert` element

::showcase
::wrap{align="center" width="full" spacing="2"}
::status-alert
::

```html
<c-alert status="info" mb="3"> Info alert </c-alert>
<c-alert status="success" mb="3"> Success alert </c-alert>
<c-alert status="warning" mb="3"> Warning alert </c-alert>
<c-alert status="error" mb="3"> Error alert </c-alert>
```

### With Icon

You can define an Icon in your alert component to present a specific event.

::showcase
::wrap{align="center" spacing="2"}
::icon-alert
::

```html
<c-alert variant="left-accent" status="info" mb="3">
  <c-alert-icon mr="2" />
  <c-alert-title> Info alert </c-alert-title>
  <c-alert-description> Something just happened </c-alert-description>
</c-alert>
<c-alert variant="left-accent" status="warning" mb="3">
  <c-alert-icon mr="2" />
  <c-alert-title> Warning alert </c-alert-title>
  <c-alert-description> Something just happened </c-alert-description>
</c-alert>
<c-alert variant="left-accent" status="success" mb="3">
  <c-alert-icon mr="2" />
  <c-alert-title> Success alert </c-alert-title>
  <c-alert-description> Something just happened </c-alert-description>
</c-alert>
<c-alert variant="left-accent" status="error" mb="3">
  <c-alert-icon mr="2" />
  <c-alert-title> Error alert </c-alert-title>
  <c-alert-description> Something just happened </c-alert-description>
</c-alert>
```
