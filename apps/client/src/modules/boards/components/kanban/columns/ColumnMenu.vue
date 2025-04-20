<script setup lang="ts">
import { shallowRef, type ShallowRef } from 'vue'
import { Icon } from '@iconify/vue'
import RemoveColumn from '../../dialogs/RemoveColumn.vue'
import SetColumnLimit from '../../dialogs/SetColumnLimit.vue'
import EditColumn from '../../dialogs/EditColumn.vue'
import {
  UiDropdownMenu,
  UiDropdownMenuContent,
  UiDropdownMenuTrigger,
} from '@/shared/ui'
import { columnMenuItems } from '@/modules/boards/constants/column-menu'
import BasicDdMenuItem from '@/modules/common/components/BasicDdMenuItem.vue'

const isEdit = shallowRef(false)
const isLimit = shallowRef(false)
const isDelete = shallowRef(false)

const _dialogsStates: Record<string, ShallowRef<boolean>> = {
  edit: isEdit,
  limit: isLimit,
  delete: isDelete,
} as const

function selectMenuItem(prefix: keyof typeof _dialogsStates) {
  _dialogsStates[prefix].value = true
}
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
      <BasicDdMenuItem
        v-for="item in columnMenuItems"
        :key="item.prefix"
        :prefix="`kanban.column.menu.${item.prefix}`"
        :icon="item.icon"
        @select="selectMenuItem"
      />
    </UiDropdownMenuContent>
  </UiDropdownMenu>
  <EditColumn v-model:open="isEdit" />
  <SetColumnLimit v-model:open="isLimit" />
  <RemoveColumn v-model:open="isDelete" />
</template>
