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
  <TagsInputItem
    v-bind="forwardedProps"
    :class="cn(
      'tags-input-item',
      props.class,
    )"
  >
    <slot />
  </TagsInputItem>
</template>
