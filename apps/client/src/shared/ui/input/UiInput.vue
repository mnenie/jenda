<script setup lang="ts">
import { useTemplateRef } from 'vue'
import { useVModel } from '@vueuse/core'
import { type AsTag, Primitive } from 'radix-vue'
import { Icon, type IconifyIcon } from '@iconify/vue'
import { inputVariants } from '.'
import type { InputVariants } from '.'
import type { Component, HTMLAttributes, InputHTMLAttributes } from 'vue'
import { cn } from '@/shared/libs/shadcn/utils'

interface InputProps {
  defaultValue?: string | number
  modelValue?: string | number
  class?: HTMLAttributes['class']
  variant?: InputVariants['variant']
  as?: AsTag | Component | string
  disabled?: boolean
  placeholder?: string
  leading?: IconifyIcon | string
  trailing?: IconifyIcon | string
  iconClass?: HTMLAttributes['class']
  type?: InputHTMLAttributes['type']
}

defineOptions({
  inheritAttrs: false,
})

const { variant = 'default', as = 'div', ...props } = defineProps<InputProps>()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()

const inputRef = useTemplateRef<HTMLInputElement | null>('input')

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})

defineExpose({
  inputRef,
})
</script>

<template>
  <Primitive :as="as" class="input-root">
    <input
      ref="input"
      v-bind="$attrs"
      v-model="modelValue"
      :disabled="disabled"
      :placeholder="placeholder"
      :class="cn(
        'input',
        inputVariants({ variant }),
        props.class,
        (trailing || $slots.trailing) && 'pe-9',
        (leading || $slots.leading) && 'ps-9',
      )"
    />
    <slot />
    <span v-if="leading || $slots.leading" class="input-leading">
      <slot name="leading">
        <Icon v-if="leading" :icon="leading" :class="cn(iconClass, 'input-icon')" />
      </slot>
    </span>
    <span v-if="trailing || $slots.trailing" class="input-trailing">
      <slot name="trailing">
        <Icon v-if="trailing" :icon="trailing" :class="cn(iconClass, 'input-icon')" />
      </slot>
    </span>
  </Primitive>
</template>
