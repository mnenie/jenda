<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import { PaginationNext, type PaginationNextProps } from 'radix-vue'
import { UiButton } from '../button'
import { cn } from '@/shared/libs/shadcn/utils'

const props = withDefaults(defineProps<PaginationNextProps & { class?: HTMLAttributes['class'] }>(), {
  asChild: true,
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <PaginationNext v-bind="delegatedProps">
    <UiButton
      :class="cn(
        'pagination-item',
        props.class,
      )"
      size="sm"
      variant="outline"
    >
      <slot>
        <span i-lucide-chevron-right class="min-w-3.5" />
      </slot>
    </UiButton>
  </PaginationNext>
</template>
