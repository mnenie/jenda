<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useLocalStorage } from '@vueuse/core'
import { storeToRefs } from 'pinia'
import BoardRow from './BoardRow.vue'
import { useExpandedContext } from '@/shared/composables/expanded'
import { useBoardsStore } from '@/modules/boards/stores/board'
import { UiCollapsible, UiCollapsibleContent, UiCollapsibleTrigger } from '@/shared/ui'

const { isExpanded } = useExpandedContext()

const boardsStore = useBoardsStore()
const { boards } = storeToRefs(boardsStore)

const isBoardsOpen = useLocalStorage('isBoardsOpen', true)
</script>

<template>
  <UiCollapsible
    v-model:open="isBoardsOpen"
    class="w-full"
  >
    <div class="w-full flex flex-col gap-1.5 mb-20px">
      <div
        class="flex items-center gap-1 w-full px-1"
        :class="[!isExpanded ? 'pt-1.5' : 'pt-0']"
      >
        <UiCollapsibleTrigger as-child>
          <div v-show="isExpanded" class="flex items-center justify-center p-1 transition-colors hover:bg-neutral-200/60 dark:hover:bg-neutral-800 rounded-md cursor-pointer">
            <Icon
              icon="lucide:chevron-down"
              class="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400 transition-transform duration-120 ease"
              :class="{
                'rotate--90': !isBoardsOpen,
              }"
            />
          </div>
        </UiCollapsibleTrigger>
        <p
          class="text-neutral-500 dark:text-neutral-400 text-small fw500 capitalize text-ellipsis
        whitespace-nowrap overflow-hidden"
        >
          {{ $t('sidebar.boards_section.title') }}
        </p>
      </div>
      <div class="overflow-y-auto overflow-x-hidden max-h-52 h-full">
        <UiCollapsibleContent
          class="flex flex-col gap-1.5 justify-start w-full"
        >
          <template v-if="boards.length">
            <BoardRow v-for="board in boards" :key="board._id" :board="board" />
          </template>
          <span v-else class="text-default text-neutral-500 dark:text-neutral-100 mx-4 mt-1">
            {{ $t('sidebar.boards_section.empty') }}
          </span>
        </UiCollapsibleContent>
      </div>
    </div>
  </UiCollapsible>
</template>
