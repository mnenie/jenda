<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import { TagsInputItemDelete, type TagsInputItemDeleteProps, useForwardProps } from 'radix-vue'
import { cn } from '@/shared/libs/shadcn/utils'

const props = defineProps<TagsInputItemDeleteProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <TagsInputItemDelete v-bind="forwardedProps" :class="cn('flex rounded bg-transparent mr-1', props.class)">
    <slot>
      <div i-lucide-x class="w-3.5 h-3.5" />
    </slot>
  </TagsInputItemDelete>
</template>
