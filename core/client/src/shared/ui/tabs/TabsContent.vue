<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import { TabsContent, type TabsContentProps } from 'radix-vue'
import { cn } from '@/shared/libs/shadcn/utils'

const props = defineProps<TabsContentProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <TabsContent
    :class="cn(props.class)"
    v-bind="delegatedProps"
  >
    <slot />
  </TabsContent>
</template>
