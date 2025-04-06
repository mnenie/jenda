<script setup lang="ts">
import { useTextareaAutosize, useVModel } from '@vueuse/core'
import type { HTMLAttributes } from 'vue'
import { cn } from '@/shared/libs/shadcn/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
  defaultValue?: string | number
  modelValue?: string | number
  resizeble?: boolean
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})

const { textarea, triggerResize } = useTextareaAutosize()
</script>

<template>
  <textarea
    ref="textarea"
    v-model="modelValue"
    :class="cn(
      'textarea',
      props.class,
      props.resizeble ? 'shadow-none bg-transparent border-none p-0 focus:ring-0 resize-none overflow-hidden' : '',
    )"
    @input="props.resizeble ? triggerResize() : undefined"
  />
</template>
