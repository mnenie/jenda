<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useBoardsStore } from '../../stores/boards'
import BoardName from './BoardName.vue'
import ViewDisplay from './ViewDisplay.vue'
import ImportExportKanban from './ImportExportKanban.vue'
import UserAvatars from '@/modules/common/components/UserAvatars.vue'

const boardStore = useBoardsStore()
const { board } = storeToRefs(boardStore)
</script>

<template>
  <div class="flex items-center justify-between gap-5">
    <div class="flex items-center gap-2.5">
      <BoardName />
      <UserAvatars :max="2" :users="board.users" avatar="!w-26px !h-26px" />
    </div>
    <div class="flex items-center gap-2.5">
      <ViewDisplay />
      <ImportExportKanban />
    </div>
  </div>
</template>
