<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useBoardsStore } from '../../stores/boards'
import ExportKanban from '../kanban/ExportKanban.vue'
import BoardNameMenu from './BoardNameMenu.vue'
import ViewDisplay from './ViewDisplay.vue'
import UserAvatars from '@/modules/common/components/UserAvatars.vue'

const boardStore = useBoardsStore()
const { board } = storeToRefs(boardStore)
</script>

<template>
  <div class="flex items-center justify-between gap-5 pt-3.5 px-15px">
    <div class="flex items-center gap-2.5">
      <BoardNameMenu />
      <UserAvatars :max="2" :users="board.users" avatar="!w-26px !h-26px cursor-pointer" tooltip />
    </div>
    <div class="flex items-center gap-2.5">
      <ViewDisplay />
      <ExportKanban />
    </div>
  </div>
</template>
