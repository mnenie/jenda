<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import { ComboboxRoot, useForwardPropsEmits } from 'radix-vue'
import type { ComboboxRootEmits, ComboboxRootProps } from 'radix-vue'
import { cn } from '@/shared/libs/shadcn/utils'

const props = withDefaults(defineProps<ComboboxRootProps & { class?: HTMLAttributes['class'] }>(), {
  open: true,
  modelValue: '',
})

const emits = defineEmits<ComboboxRootEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <ComboboxRoot
    v-bind="forwarded"
    :class="cn(
      'command',
      props.class,
    )"
  >
    <slot />
  </ComboboxRoot>
</template>
