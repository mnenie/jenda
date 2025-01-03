<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import { PaginationEllipsis, type PaginationEllipsisProps } from 'radix-vue'
import { cn } from '@/shared/libs/shadcn/utils'

const props = defineProps<PaginationEllipsisProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <PaginationEllipsis v-bind="delegatedProps" :class="cn('w-9 h-9 flex items-center justify-center', props.class)">
    <slot>
      <div i-lucide-ellipsis />
    </slot>
  </PaginationEllipsis>
</template>
