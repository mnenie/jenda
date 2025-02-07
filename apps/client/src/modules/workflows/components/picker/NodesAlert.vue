<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { UiAlert } from '@/shared/ui'
</script>

<template>
  <UiAlert variant="warning" class="border-yellow-100 justify-start mb-4 px-2">
    <div class="flex items-start gap-2.5 text-yellow-900">
      <Icon icon="jam:alert" class="min-w-4 min-h-4 mt-1" />
      <div class="flex flex-col gap-1">
        <span class="text-default">
          Не забудьте добавить действия к ноде в настройках 😉.
        </span>
      </div>
    </div>
  </UiAlert>
</template>
