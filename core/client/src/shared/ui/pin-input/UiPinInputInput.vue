<script setup lang="ts">
import { cn } from '@/shared/lib/shadcn/utils'
import { PinInputInput, type PinInputInputProps, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<PinInputInputProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <PinInputInput v-bind="forwardedProps" :class="cn('relative placeholder:(absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2) align-middle text-center focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:relative focus:z-10 flex h-10 w-10 items-center justify-center border-y border-r border-neutral-200 text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md dark:focus:ring-neutral-300 dark:border-neutral-800', props.class)" />
</template>
