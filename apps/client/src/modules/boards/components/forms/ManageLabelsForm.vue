<script setup lang="ts">
import { shallowRef } from 'vue'
import { storeToRefs } from 'pinia'
import { useFilteredLabels } from '../../composables/kanban'
import { useBoardsStore } from '../../stores/boards'
import TopActionPanel from './labels-sub/TopActionPanel.vue'
import LabelsList from './labels-sub/LabelsList.vue'

const boardStore = useBoardsStore()
const { board } = storeToRefs(boardStore)

const search = shallowRef('')

const filteredLabels = useFilteredLabels(() => board.value.labels, search)
</script>

<template>
  <div class="flex flex-col gap-4">
    <TopActionPanel v-model="search" />
    <LabelsList :labels="filteredLabels" />
  </div>
</template>
