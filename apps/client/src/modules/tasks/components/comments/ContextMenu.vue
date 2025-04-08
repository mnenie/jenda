<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { UiContextMenuContent, UiContextMenuItem } from '@/shared/ui'

defineProps<{
  isCurrentUser: boolean
}>()

// _todo[skip_ci]: добавить действия

const actions = [
  {
    prefix: 'copy',
    icon: 'hugeicons:link-04',
  },
  {
    prefix: 'edit',
    icon: 'hugeicons:message-edit-02',
  },
  {
    prefix: 'delete',
    icon: 'hugeicons:delete-01',
  },
] as const
</script>

<template>
  <UiContextMenuContent class="relative">
    <UiContextMenuItem
      v-for="action, idx in actions"
      :key="action.prefix"
      :class="{
        'dropdown-menu-destructive-item': action.prefix === 'delete',
      }"
    >
      <Icon :icon="action.icon" class="w-4 h-4" />
      {{ $t(`task.actions[${idx}]`) }}
    </UiContextMenuItem>
  </UiContextMenuContent>
</template>
