<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import { TagsInputItemText, type TagsInputItemTextProps, useForwardProps } from 'radix-vue'
import { cn } from '@/shared/libs/shadcn/utils'

const props = defineProps<TagsInputItemTextProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <TagsInputItemText
    v-bind="forwardedProps"
    :class="cn(
      'tags-input-item-text',
      props.class,
    )"
  />
</template>
