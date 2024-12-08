<script setup lang="ts">
import { cn } from '@/shared/lib/shadcn/utils'
import { computed, type HTMLAttributes } from 'vue'
import { alertVariants, type AlertVariants } from '.'

interface AlertProps {
  variant?: AlertVariants['variant']
  closable?: boolean
  content?: string
  class?: HTMLAttributes['class']
}

const { variant = 'default', closable, content, class: alertClass } = defineProps<AlertProps>()

const emits = defineEmits(['close'])

const valueOfRightPadding = computed(() => (closable ? '32px' : '10px'))
</script>

<template>
  <div
    :class="cn(
      'alert',
      alertVariants({ variant }),
      alertClass,
    )"
    :style="{ 'padding-right': valueOfRightPadding }"
  >
    <slot v-if="$slots.default || content">
      <span class="text-sm">{{ content }}</span>
    </slot>
    <div
      v-if="closable"
      i-lucide-x
      class="alert-close"
      @click="emits('close')"
    />
  </div>
</template>
