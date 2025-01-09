<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import { TagsInputInput, type TagsInputInputProps, useForwardProps } from 'radix-vue'
import { cn } from '@/shared/libs/shadcn/utils'

const props = defineProps<TagsInputInputProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <TagsInputInput v-bind="forwardedProps" :class="cn('text-sm min-h-5 focus:outline-none flex-1 bg-transparent placeholder:text-neutral-500 dark:placeholder:text-neutral-400 ', props.class)" />
</template>
