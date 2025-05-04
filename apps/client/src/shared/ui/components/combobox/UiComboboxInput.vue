<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import { ComboboxInput, type ComboboxInputProps, useForwardPropsEmits } from 'radix-vue'
import { cn } from '@/shared/libs/shadcn/utils'

const props = defineProps<ComboboxInputProps & {
  class?: HTMLAttributes['class']
}>()

// with migration to reka-ui
// const emits = defineEmits<ComboboxInputEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps)
</script>

<template>
  <ComboboxInput
    v-bind="forwarded"
    :class="cn('combobox-input', props.class)"
  >
    <slot />
  </ComboboxInput>
</template>
