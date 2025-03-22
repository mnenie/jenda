<script setup lang="ts">
import UserLabel from '../../additions/UserLabel.vue'
import type { User } from '@/modules/auth/types'
import { UiBadge } from '@/shared/ui'

defineProps<{
  user: User
}>()
</script>

<template>
  <div class="w-full flex items-center justify-between">
    <UserLabel :user :closable="false" class="!bg-transparent" />
    <UiBadge variant="secondary" class="!bg-transparent">
      {{ user.role }}
    </UiBadge>
  </div>
</template>
