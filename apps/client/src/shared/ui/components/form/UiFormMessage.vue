<script setup lang="ts">
import { computed, type HTMLAttributes, useAttrs, useTemplateRef } from 'vue'
import { Icon, type IconifyIcon } from '@iconify/vue'
import { twMerge } from 'tailwind-merge'
import { cn } from '@/shared/libs/shadcn/utils'

interface MessageProps {
  icon?: IconifyIcon | string
  type?: 'error' | 'warning'
  content?: string
  class?: HTMLAttributes['class']
}

const { type = 'error', icon, content, ...props } = defineProps<MessageProps>()

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
  return content!.charAt(0).toUpperCase() + content!.slice(1).toLowerCase()
})

const messageRef = useTemplateRef<HTMLElement>('message')

defineExpose({
  scrollToMessage: () => messageRef.value?.scrollIntoView({
    behavior: 'smooth',
  }),
})
</script>

<template>
  <div ref="message" :class="cn(classes, props.class)">
    <slot>
      <Icon v-if="icon" :icon="icon" />
      <span>{{ message }}</span>
    </slot>
  </div>
</template>
