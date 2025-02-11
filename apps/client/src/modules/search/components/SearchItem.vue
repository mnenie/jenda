<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import { useI18n } from 'vue-i18n'
import type { SearchRoute } from '../types'
import { UiCommandItem } from '@/shared/ui'

const props = defineProps<{
  route: SearchRoute
  mousePosition: number | undefined
  section: string
}>()

const emits = defineEmits<{
  (e: 'handleRoute', route: SearchRoute, section: string): void
  (e: 'onMouseOver'): void
  (e: 'onMouseLeave'): void
}>()

const { t } = useI18n()

const name = computed(() => props.route.isBoard ? props.route.name : t(`sidebar.${props.route.name}`))
</script>

<template>
  <UiCommandItem
    :value="name"
    class="text-neutral-500 dark:text-neutral-100 hover:text-neutral-800 dark:hover:text-neutral-200 cursor-pointer flex items-center justify-between"
    @click="emits('handleRoute', route, section)"
    @mouseover="emits('onMouseOver')"
    @mouseleave="emits('onMouseLeave')"
  >
    <div class="flex items-center gap-2">
      <Icon v-if="route.icon" :icon="route.icon" class="w-4 h-4" :style="{ color: route.color }" />
      <div
        v-if="route.isBoard"
        class="flex items-center justify-center w-5 h-5 rounded-sm"
        :style="{ backgroundColor: `${route.color}33`, color: route.color }"
      >
        {{ route.name.charAt(0).toUpperCase() }}
      </div>
      <span class="text-default text-neutral-800 dark:text-neutral-100">{{ name }}</span>
    </div>
    <slot name="ext-icon" />
  </UiCommandItem>
</template>
