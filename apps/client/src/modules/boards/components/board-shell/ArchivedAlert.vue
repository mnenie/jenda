<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useBoardsStore } from '../../stores/boards'
import { UiAlert } from '@/shared/ui'

const boardStore = useBoardsStore()
const { board } = storeToRefs(boardStore)
</script>

<template>
  <UiAlert
    v-if="board.status === 'archived'"
    variant="warning"
    class="sticky w-fit bottom-3 left-1/2 translate-x--1/2 px-3 py-2 2xl:text-default"
  >
    <span class="text-yellow-800 dark:text-yellow-100">{{ $t('kanban.alert') }}</span>
  </UiAlert>
</template>
