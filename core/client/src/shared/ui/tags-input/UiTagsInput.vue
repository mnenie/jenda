<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import { TagsInputRoot, type TagsInputRootEmits, type TagsInputRootProps, useForwardPropsEmits } from 'radix-vue'
import { cn } from '@/shared/libs/shadcn/utils'

const props = defineProps<TagsInputRootProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<TagsInputRootEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <TagsInputRoot v-bind="forwarded" :class="cn('flex flex-wrap gap-2 items-center rounded-md border border-neutral-200 px-3 py-1.5 text-sm dark:(border-neutral-700 focus-visible:ring-neutral-300)', props.class)">
    <slot />
  </TagsInputRoot>
</template>
