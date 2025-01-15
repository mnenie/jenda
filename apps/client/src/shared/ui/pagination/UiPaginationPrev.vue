<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import { PaginationPrev, type PaginationPrevProps } from 'radix-vue'
import {
  UiButton,
} from '@/shared/ui/button'
import { cn } from '@/shared/libs/shadcn/utils'

const props = withDefaults(defineProps<PaginationPrevProps & { class?: HTMLAttributes['class'] }>(), {
  asChild: true,
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <PaginationPrev v-bind="delegatedProps">
    <UiButton
      :class="cn(
        'pagination-item',
        props.class,
      )"
      size="sm"
      variant="outline"
    >
      <slot>
        <span i-lucide-chevron-left class="min-w-3.5" />
      </slot>
    </UiButton>
  </PaginationPrev>
</template>
