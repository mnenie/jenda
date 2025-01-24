<script setup lang="ts">
import { Icon } from '@iconify/vue'
import type { PanelItem } from '../types'

const panelItems = [
  { icon: 'hugeicons:arrow-up-down', tPrefix: 'select' },
  { icon: 'mi-enter', tPrefix: 'open' },
  { icon: 'mdi:keyboard-esc', tPrefix: 'close' },

] satisfies readonly PanelItem[]
</script>

<template>
  <div class="py-2 flex items-center gap-3 px-3.5">
    <div
      v-for="item in panelItems"
      :key="item.tPrefix"
      class="flex items-center gap-2 text-neutral-600 dark:text-neutral-400"
    >
      <Icon :icon="item.icon" class="w-3.5 h-3.5" />
      <span class="text-small">{{ $t(`search.${item.tPrefix}`) }}</span>
    </div>
  </div>
</template>
