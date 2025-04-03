<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { Icon } from '@iconify/vue'
import { useMagicKeys, whenever } from '@vueuse/core'
import { useBoardsStore } from '../../stores/boards'
import { useBoardMenuContext, useDialogsShortcuts } from '../../composables/menu'
import EditBoard from '../dialogs/EditBoard.vue'
import RemoveBoard from '../dialogs/RemoveBoard.vue'
import ManageLabels from '../dialogs/ManageLabels.vue'
import DdMenuItems from './DdMenuItems.vue'
import {
  UiBadge,
  UiButton,
  UiDropdownMenu,
  UiDropdownMenuContent,
  UiDropdownMenuItem,
  UiDropdownMenuSeparator,
  UiDropdownMenuTrigger,
  UiSwitch,
} from '@/shared/ui'

const boardsStore = useBoardsStore()
const { board } = storeToRefs(boardsStore)

const boardStyle = computed(() => ({
  backgroundColor: board.value?.color ? `${board.value.color}33` : '#266df033',
  color: board.value?.color ? board.value.color : '#266df0',
}))

const status = computed({
  get() {
    return board.value?.status === 'active'
  },
  set(value) {
    board.value.status = value ? 'active' : 'archived'
  },
})

const { isBoardMenuOpen, imagesPopover, closeMenu } = useBoardMenuContext()

const { isEdit, isRemove, isLabels } = useDialogsShortcuts()

const { meta_i } = useMagicKeys()

whenever(meta_i, () => {
  imagesPopover.value = true
  closeMenu()
})

// _todo[skip_ci]
</script>

<template>
  <UiDropdownMenu v-model:open="isBoardMenuOpen">
    <UiDropdownMenuTrigger as-child>
      <UiButton variant="secondary" class="shadow-none">
        <div
          v-if="board"
          class="flex items-center justify-center w-6 h-6 rounded-md text-default"
          :style="boardStyle"
        >
          {{ board.name.charAt(0).toUpperCase() }}
        </div>
        <div class="text-default font-semibold">
          {{ board.name }}
        </div>
        <Icon icon="lucide:chevron-down" class="w-4 h-4 text-neutral-400" />
      </UiButton>
    </UiDropdownMenuTrigger>
    <UiDropdownMenuContent align="start" class="w-56">
      <UiDropdownMenuItem @select.prevent>
        <UiSwitch
          v-model:checked="status"
          variant="solid"
          thumb="solid"
          class="w-9 h-6 2xl:(w-8.8 h-5) data-[state=checked]:bg-green-600 dark:data-[state=checked]:bg-green-800"
          thumb-class="w-4 h-4"
        />
        <UiBadge
          variant="soft"
          class="px-0 py-0 h-6 !bg-transparent"
          :class="board.status === 'active' ? 'badge-soft-green' : 'badge-soft-red'"
        >
          <span class="text-default fw400 whitespace-nowrap">
            {{ $t(`kanban.${board.status}`) }}
          </span>
        </UiBadge>
      </UiDropdownMenuItem>
      <UiDropdownMenuSeparator />
      <DdMenuItems
        @edit="isEdit = true"
        @delete="isRemove = true"
        @labels="isLabels = true"
        @background="imagesPopover = true"
      />
    </UiDropdownMenuContent>
  </UiDropdownMenu>
  <RemoveBoard v-model:open="isRemove" />
  <EditBoard v-model:open="isEdit" />
  <ManageLabels v-model:open="isLabels" />
</template>
