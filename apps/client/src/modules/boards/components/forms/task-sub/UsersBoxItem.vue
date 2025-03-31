<script setup lang="ts">
import UserLabel from '../../additions/UserLabel.vue'
import type { User } from '@/modules/auth/types'

defineProps<{
  user: User
}>()
</script>

<template>
  <div class="w-full flex items-center justify-between">
    <UserLabel :user :closable="false" class="!bg-transparent !border-none" name-class="" />
  </div>
</template>
