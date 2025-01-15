<script setup lang="ts">
import { Icon } from '@iconify/vue'
import type { SearchRoute } from '../types'
import { UiCommandItem } from '@/shared/ui'

defineProps<{
  route: SearchRoute
  mousePosition: number | undefined
  section: string
}>()

const emits = defineEmits<{
  (e: 'handleRoute', route: SearchRoute, section: string): void
  (e: 'onMouseOver'): void
  (e: 'onMouseLeave'): void
}>()
</script>

<template>
  <UiCommandItem
    :value="route.name"
    class="text-neutral-500 dark:text-neutral-100 hover:text-neutral-800 dark:hover:text-neutral-200 cursor-pointer flex items-center justify-between"
    @click="emits('handleRoute', route, section)"
    @mouseover="emits('onMouseOver')"
    @mouseleave="emits('onMouseLeave')"
  >
    <div class="flex items-center gap-2">
      <Icon v-if="route.icon" :icon="route.icon" class="w-4 h-4" :style="{ color: route.color }" />
      <span class="text-sm text-neutral-800 dark:text-neutral-100">{{ route.name }}</span>
    </div>
    <slot name="ext-icon" />
  </UiCommandItem>
</template>
