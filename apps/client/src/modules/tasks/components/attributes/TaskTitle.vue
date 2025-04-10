<script setup lang="ts">
import { UiTextarea } from '@/shared/ui'

const title = defineModel<string>('title', {
  required: true,
})
</script>

<template>
  <UiTextarea
    v-model="title"
    resizable
    class="text-2xl font-bold mt-5 mb-5 min-h-auto"
    :placeholder="$t('tasks.title.title_empty')"
  />
</template>
