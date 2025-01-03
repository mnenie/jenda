<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import { CheckboxIndicator, CheckboxRoot, useForwardPropsEmits } from 'radix-vue'
import type { CheckboxRootEmits, CheckboxRootProps } from 'radix-vue'
import { cn } from '@/shared/libs/shadcn/utils'

const props = defineProps<CheckboxRootProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<CheckboxRootEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <CheckboxRoot
    v-bind="forwarded"
    :class="
      cn('text-md w-4 h-4 shrink-0 rounded-md bg-transparent border border-neutral-200 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-blue-500 data-[state=checked]:text-neutral-50 dark:border-neutral-800 dark:border-neutral-50 dark:focus-visible:ring-neutral-300 dark:data-[state=checked]:bg-neutral-50 dark:data-[state=checked]:text-neutral-900',
         props.class)"
  >
    <CheckboxIndicator class="flex h-full w-full items-center justify-center">
      <slot>
        <div
          class="w-4 h-4"
          :class="props.checked === 'indeterminate' ? 'i-lucide-minus' : 'i-lucide-check'"
        />
      </slot>
    </CheckboxIndicator>
  </CheckboxRoot>
</template>
