<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { Icon, type IconifyIcon } from '@iconify/vue'
import { twMerge } from 'tailwind-merge'

interface MessageProps {
  icon?: IconifyIcon | string
  type?: 'error' | 'warning'
  content: string
}

const { type = 'error', icon, content } = defineProps<MessageProps>()

const colors: Record<string, string> = {
  error: 'text-red-500',
  warning: 'text-yellow-500',
}

const attrs = useAttrs()

const classes = computed(() => {
  return [
    twMerge(
      'form-message',
      colors[type as keyof typeof colors],
      attrs.iconClass as string,
    ),
  ]
})

const message = computed(() => {
  return content.charAt(0).toUpperCase() + content.slice(1).toLowerCase()
})
</script>

<template>
  <div :class="classes">
    <Icon v-if="icon" :icon="icon" />
    <span>{{ message }}</span>
  </div>
</template>
