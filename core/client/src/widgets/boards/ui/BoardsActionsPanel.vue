<script setup lang="ts">
import { AddBoard } from '@/features/boards/handlers'
import { BoardsAdvancedFilter, BoardsSort, SearchBoards } from '@/features/filters/boards'
import { UiTabsList, UiTabsTrigger } from '@/shared/ui'
</script>

<template>
  <div class="flex items-center justify-between">
    <div class="flex items-center gap-2">
      <UiTabsList>
        <UiTabsTrigger value="table">
          <span i-hugeicons-layout-table-02 />
        </UiTabsTrigger>
        <UiTabsTrigger disabled value="cards">
          <span i-hugeicons-dashboard-square-01 />
        </UiTabsTrigger>
      </UiTabsList>
      <BoardsSort />
      <BoardsAdvancedFilter />
    </div>
    <div class="flex items-center gap-2">
      <SearchBoards />
      <AddBoard />
    </div>
  </div>
</template>
