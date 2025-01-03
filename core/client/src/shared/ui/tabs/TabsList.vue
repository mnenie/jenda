<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import { TabsList, type TabsListProps } from 'radix-vue'
import { cn } from '@/shared/libs/shadcn/utils'

const props = defineProps<TabsListProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <TabsList
    v-bind="delegatedProps"
    :class="cn(
      'inline-flex items-center justify-center rounded-lg bg-neutral-100 h-9 border border-neutral-100 p-1 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400',
      props.class,
    )"
  >
    <slot />
  </TabsList>
</template>
