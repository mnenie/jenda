<script setup lang="ts">
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { Icon } from '@iconify/vue'
import { useMagicKeys } from '@vueuse/core'
import { useBoardsStore } from '../../stores/boards'
import RemoveBoard from './RemoveBoard.vue'
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

const isMenuOpen = ref(false)

const { alt_meta_p, ctrl_meta_0, alt_meta_x, alt_meta_e } = useMagicKeys()

// _todo[skip_ci]
</script>

<template>
  <UiDropdownMenu v-model:open="isMenuOpen">
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
          class="w-9 h-6 data-[state=checked]:bg-green-600 dark:data-[state=checked]:bg-green-800"
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
      <RemoveBoard @close-menu="isMenuOpen = false" />
    </UiDropdownMenuContent>
  </UiDropdownMenu>
</template>
