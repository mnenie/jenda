<script setup lang="ts">
import { computed } from 'vue'
import { useTextareaAutosize, useVModel } from '@vueuse/core'
import type { HTMLAttributes } from 'vue'
import { cn } from '@/shared/libs/shadcn/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
  defaultValue?: string | number
  modelValue?: string | number
  resizable?: boolean
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})

const { textarea, triggerResize } = useTextareaAutosize()

const textareaRef = computed(() => props.resizable ? textarea : undefined)
const onInput = computed(() => props.resizable ? triggerResize : undefined)
</script>

<template>
  <textarea
    :ref="textareaRef"
    v-model="modelValue"
    :class="cn(
      'textarea',
      props.class,
      props.resizable ? 'shadow-none bg-transparent border-none p-0 focus:ring-0 resize-none overflow-hidden' : '',
    )"
    @input="onInput"
  />
</template>
