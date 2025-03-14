<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import {
  UiDropdownMenu,
  UiDropdownMenuContent,
  UiDropdownMenuItem,
  UiDropdownMenuTrigger,
} from '@/shared/ui'
import { cn } from '@/shared/libs/shadcn/utils'

interface MenuItem {
  prefix: string
  icon: string
  class?: string
}

// _todo(events)[skip ci]
const menuItems = ref<MenuItem[]>([
  {
    prefix: 'edit',
    icon: 'bytesize:edit',
  },
  {
    prefix: 'limit',
    icon: 'tabler:numbers',
  },
  {
    prefix: 'delete',
    icon: 'hugeicons:delete-03',
    class: 'hover:!bg-#dc262611 !text-red-500',
  },
])
</script>

<template>
  <UiDropdownMenu>
    <UiDropdownMenuTrigger as-child>
      <Icon
        v-tooltip.bottom="{
          content: $t('kanban.column.tooltips.actions'),
          delay: 100,
          triggers: ['hover'],
        }"
        icon="lucide:ellipsis"
        class="min-w-4.4 min-h-4.4 text-neutral-500 dark:text-neutral-400 cursor-pointer outline-none"
      />
    </UiDropdownMenuTrigger>
    <UiDropdownMenuContent align="end" class="w-fit min-w-40">
      <UiDropdownMenuItem v-for="item in menuItems" :key="item.prefix" :class="cn(item.class, 'cursor-pointer rounded-md')">
        <Icon :icon="item.icon" :class="cn('min-w-4.4 min-h-4.4 text-neutral-500', item.class)" />
        <span>{{ $t(`kanban.column.menu.${item.prefix}`) }}</span>
      </UiDropdownMenuItem>
    </UiDropdownMenuContent>
  </UiDropdownMenu>
</template>
