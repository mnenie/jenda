<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { UiTextarea } from '@/shared/ui'
</script>

<template>
  <div class="left-4 bottom-0 w-[calc(100%-2rem)] z-10 absolute rounded-lg">
    <div class="relative">
      <div class="absolute h-full bg-white w-full left-0 rounded-t-lg" />
      <div class="w-full relative inline-flex items-center">
        <UiTextarea
          class="relative mb-2 w-full rounded-md input-filled min-h-10.5 h-10.5 max-h-32 px-9 resize-none"
          :placeholder="$t('task.comments.write')"
        />
        <Icon icon="teenyicons:attach-solid" class="min-w-4.6 min-h-4.6 absolute left-2 flex items-center bottom-4.7" />
        <Icon icon="ion:send" class="min-w-5 min-h-5 absolute right-2 flex items-center text-blue-600 bottom-4.6" />
      </div>
    </div>
  </div>
</template>
