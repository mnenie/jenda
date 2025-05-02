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
  <TagsInputItemDelete
    v-bind="forwardedProps"
    :class="cn(
      'tags-input-item-delete',
      props.class,
    )"
  >
    <slot>
      <div
        i-lucide-x
        class="tags-input-item-delete-icon"
      />
    </slot>
  </TagsInputItemDelete>
</template>
