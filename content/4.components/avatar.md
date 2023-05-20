---
title: Avatar
description: Avatar component
version: 2.0+
---

# Avatar

The avatar component is used to represent user and displays the profile picture initials or fallback icon

## Imports

This packages exports the following components:

- **CAvatar** : The image that represents the user.
- **CAvatarBadge** : A wrapper that displays its content on the right corner of the avatar.
- **CAvatarGroup** : A wrapper to stack multiple Avatars together.

```js
import { CAvatar, CAvatarBadge, CAvatarGroup } from '@chakra-ui/vue-next';
```

## Usage

### Default :

```html
<c-avatar
  name="Evan You"
  alt="Evan You"
  src="https://www.github.com/yyx990803.png"
/>
```

### Avatar Sizes :

The avatar component comes in 7 different sizes (`2xs`|`xs` | `sm` | `md` | `lg` | `xl` | `2xl`) :

::showcase

::stack{spacing="2" align="center" direction="row"}

:avatar{name="Daniel Roe" alt="Daniel Roe" src="https://avatars.githubusercontent.com/u/28706372?v=4" size="2xs"}
:avatar{name="Evan You" alt="Evan You" src="https://avatars.githubusercontent.com/u/499550?v=4" size="xs"}
:avatar{name="Segun Adebayo" alt="Segun Adebayo" src="https://avatars.githubusercontent.com/u/6916170?v=4" size="sm"}
:avatar{name="Tyler Pfledderer" alt="Tyler Pfledderer" src="https://avatars.githubusercontent.com/u/65234762?v=4" size="md"}
:avatar{name="Zakaria Sahmane" alt="Zakaria Sahmane" src="https://avatars.githubusercontent.com/u/10008963?v=4" size="lg"}
:avatar{name="Sybren Willemot" alt="Sybren Willemot" src="https://avatars.githubusercontent.com/u/16015740?v=4" size="xl"}
:avatar{name="Jonathan Bakebwa" alt="Jonathan Bakebwa" src="https://avatars.githubusercontent.com/u/21237954?v=4" size="2xl"}

::

::

```html
<c-avatar
  name="Evan You"
  alt="Evan You"
  src="https://avatars.githubusercontent.com/u/499550?v=4"
  size="xs"
/>
```

### Avatar Fallbacks :

If there is an error loading the `src` of the avatar, there are 2 fallbacks :

- If there's a `name` prop, we use it to generate the initials and a random, accessible background color.
- If there's no `name` prop, we use a default Avatar.

### Customize the Fallback Avatar :

You can customize the fallback Avatar either by using style props or by passing a custom icon.

::showcase
:avatar{size="md" bg="red.500"}
::

```html
<!-- Styles props -->
<c-avatar size="md" bg="red.500" />

<!-- Custom default icon -->
<c-avatar>
  <c-icon color="white" name="star" />
</c-avatar>
```

### Avatar with badges

In some products, you might need to show a badge on the avatar. We call this a `badge`.

The badge is by default on the bottom right corner, but you can change its position by using the prop `position` (`top-start` | `top-end` | `bottom-start` | `bottom-end`)

::showcase
::stack{spacing="2" align="center" direction="row"}

::avatar{name="Sybren Willemot"}
:avatar-badge{bg="green.500" box-size="1em"}
::

::avatar{name="Jonathan Bakebwa"}
:avatar-badge{bg="red.500" box-size="1em" placement="top-start"}
::

::avatar{name="Zakaria Sahmane"}
:avatar-badge{bg="yellow.500" box-size="1em" placement="top-end"}
::

::avatar{name="Tyler Pfledderer"}
:avatar-badge{bg="purple.500" box-size="1em" placement="bottom-start"}
::

::
::

```html
<c-avatar name="Jonathan Bakebwa">
  <c-avatar-badge bg="red.500" placement="top-start" />
</c-avatar>
```

You can also add icons inside the badge if needed :

::showcase
::avatar{name="Jonathan Bakebwa" alt="Jonathan Bakebwa picture" src="https://avatars.githubusercontent.com/u/21237954?v=4"}

::avatar-badge{bg="red.500" box-size="1em"}
:icon{color="white" name="minus" w="0.3em"}
::

```html
<c-avatar
  name="Jonathan Bakebwa"
  alt="Jonathan Bakebwa"
  src="https://avatars.githubusercontent.com/u/21237954?v=4"
>
  <c-avatar-badge bg="red.500">
    <c-icon color="white" name="minus" w="0.3em" />
  </c-avatar-badge>
</c-avatar>
```

### Avatar Group

In some cases, you might need to stack avatars as a group. Use the `CAvatarGroup` component.

- To limit the amount of avatars to show, use the `max` prop. It'll truncate the avatars and show a "+X" label (where X is the remaining avatars).
- To size all the avatars equally, pass the `size` prop.
- To adjust the spacing between the avatars, pass the `spacing` prop.

::showcase
::avatar-group
::

```html
<c-avatar-group max="3" size="lg">
  <c-avatar
    name="Segun Adebayo"
    src="https://avatars.githubusercontent.com/u/6916170?v=4"
    alt="Segun Adebayo"
  />
  <c-avatar
    name="Evan You"
    alt="Evan You"
    src="https://avatars.githubusercontent.com/u/499550?v=4"
  />
  <c-avatar
    name="Anthony Fu"
    src="https://avatars.githubusercontent.com/u/11247099?v=4"
    alt="Anthony Fu"
  />
  <c-avatar
    name="Maya Shavin"
    src="https://avatars.githubusercontent.com/u/6650139?v=4"
    alt="Maya Shavin"
  />
</c-avatar-group>
```

### Initials

We use a method that generate initials by splitting and merging the first character in each word from the `name` prop. But you can also pass the initials you want through the prop `initials`.
