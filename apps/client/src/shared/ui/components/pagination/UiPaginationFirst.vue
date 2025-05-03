<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import { PaginationFirst, type PaginationFirstProps } from 'radix-vue'
import { UiButton } from '../button'
import { cn } from '@/shared/libs/shadcn/utils'

const props = withDefaults(defineProps<PaginationFirstProps & { class?: HTMLAttributes['class'] }>(), {
  asChild: true,
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <PaginationFirst v-bind="delegatedProps">
    <UiButton
      :class="cn(
        'pagination-item',
        props.class,
      )"
      size="sm"
      variant="outline"
    >
      <slot>
        <span i-lucide-chevrons-left class="min-w-3.5" />
      </slot>
    </UiButton>
  </PaginationFirst>
</template>
