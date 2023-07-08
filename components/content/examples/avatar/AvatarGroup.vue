<template>
  <CAvatarGroup :max="3" size="lg">
    <CAvatar
      name="Segun Adebayo"
      src="https://avatars.githubusercontent.com/u/6916170?v=4"
      alt="Segun Adebayo"
    />
    <CAvatar
      name="Evan You"
      alt="Evan You"
      src="https://avatars.githubusercontent.com/u/499550?v=4"
    />
    <CAvatar
      name="Anthony Fu"
      src="https://avatars.githubusercontent.com/u/11247099?v=4"
      alt="Anthony Fu"
    />
    <CAvatar
      name="Maya Shavin"
      src="https://avatars.githubusercontent.com/u/6650139?v=4"
      alt="Maya Shavin"
    />
  </CAvatarGroup>
</template>

<script setup>
import { CAvatar, CAvatarGroup } from '@chakra-ui/vue-next';
</script>
