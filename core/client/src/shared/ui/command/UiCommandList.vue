<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import { ComboboxContent, useForwardPropsEmits } from 'radix-vue'
import type { ComboboxContentEmits, ComboboxContentProps } from 'radix-vue'
import { cn } from '@/shared/libs/shadcn/utils'

const props = withDefaults(defineProps<ComboboxContentProps & { class?: HTMLAttributes['class'] }>(), {
  dismissable: false,
})
const emits = defineEmits<ComboboxContentEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <ComboboxContent
    v-bind="forwarded"
    :class="cn(
      'command-list',
      props.class,
    )"
  >
    <div role="presentation">
      <slot />
    </div>
  </ComboboxContent>
</template>
