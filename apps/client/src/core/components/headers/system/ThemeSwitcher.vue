<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { UiButton } from '@/shared/ui'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <UiButton
    variant="ghost"
    size="sm"
    class="p-2 gap-1 text-neutral-400 hover:text-neutral-700 dark:!text-neutral-400 dark:hover:!text-neutral-200"
    @click="toggleDark()"
  >
    <div v-if="!isDark" i-hugeicons-moon-02 class="w-4.4 h-4.4 2xl:(w-4 h-4)" />
    <div v-else i-lucide-sun class="w-4.4 h-4.4 2xl:(w-4 h-4)" />
  </UiButton>
</template>
