<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import { TagsInputItem, type TagsInputItemProps, useForwardProps } from 'radix-vue'
import { cn } from '@/shared/libs/shadcn/utils'

const props = defineProps<TagsInputItemProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <TagsInputItem v-bind="forwardedProps" :class="cn('flex h-5 items-center rounded-md bg-neutral-100 text-neutral-800 dark:(bg-neutral-700/60 text-neutral-100) data-[state=active]:ring-0 data-[state=active]:ring-offset-0 ring-offset-0', props.class)">
    <slot />
  </TagsInputItem>
</template>
