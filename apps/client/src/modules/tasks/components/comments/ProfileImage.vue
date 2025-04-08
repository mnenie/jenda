<script setup lang="ts" generic="U extends Pick<User, 'email' | 'photoUrl' | '_id'>">
import type { User } from '@/modules/auth/types'
import UserAvatar from '@/modules/auth/components/UserAvatar.vue'

defineProps<{
  user: U
}>()
</script>

<template>
  <UserAvatar :img="user.photoUrl" class="!w-25px !h-25px" />
</template>
