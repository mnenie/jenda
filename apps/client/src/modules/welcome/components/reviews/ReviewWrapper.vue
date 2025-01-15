<script setup lang="ts">
import type { ReviewWrapper } from '../../types'
import UserAvatar from '@/modules/auth/components/UserAvatar.vue'

defineProps<{
  review?: Partial<ReviewWrapper>
}>()
</script>

<template>
  <div class="flex gap-5 justify-center items-stretch mb-100px max-[520px]:mb-80px">
    <div class="relative flex flex-col gap-5 p-1.5 max-[768px]:items-center">
      <div class="relative flex items-center gap-2">
        <UserAvatar style="width: 34px; height: 34px">
          <img style="width: 100%" :src="review?.img" />
        </UserAvatar>
        <div>
          <p class="text-base mb-0.5 text-neutral-800 dark:text-neutral-200">
            {{ review?.name }}
          </p>
          <span class="text-sm mb-0.5 text-neutral-600 dark:text-neutral-400">{{ review?.status }}</span>
        </div>
      </div>
      <blockquote class="text-base text-neutral-600 font-medium dark:text-neutral-200 max-[768px]:text-center">
        {{ `“${review?.comment}”` }}
      </blockquote>
    </div>
  </div>
</template>
