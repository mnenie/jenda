<script setup lang="ts">
import { computed, type HTMLAttributes, ref } from 'vue'
import { alertVariants, type AlertVariants } from '.'
import { cn } from '@/shared/libs/shadcn/utils'

interface AlertProps {
  variant?: AlertVariants['variant']
  closable?: boolean
  content?: string
  class?: HTMLAttributes['class']
}

const { variant = 'default', closable, content, class: alertClass } = defineProps<AlertProps>()

const emits = defineEmits(['close'])

const isAlertVisible = ref(true)

const valueOfRightPadding = computed(() => (closable ? '32px' : '10px'))
</script>

<template>
  <div
    v-if="isAlertVisible"
    :class="cn(
      'alert',
      alertVariants({ variant }),
      alertClass,
    )"
    :style="{ 'padding-right': valueOfRightPadding }"
  >
    <slot v-if="$slots.default || content">
      <span class="text-default">{{ content }}</span>
    </slot>
    <div
      v-if="closable"
      i-lucide-x
      class="alert-close"
      @click="isAlertVisible = false, emits('close')"
    />
  </div>
</template>
