<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { usePickerStore } from '../../stores/picker'
import { nodes } from '../../utils/constants/picker'
import NodeElement from './NodeElement.vue'
import DocLink from './DocLink.vue'
import NodesAlert from './NodesAlert.vue'
import { UiSheet, UiSheetContent } from '@/shared/ui'

const pickerStore = usePickerStore()
const { isPickerOpen } = storeToRefs(pickerStore)
</script>

<template>
  <UiSheet :open="isPickerOpen" :modal="false">
    <UiSheetContent
      side="left"
      class="!max-w-320px absolute p-2.5 pb-1.5"
      :portal="false"
    >
      <div class="flex flex-col h-full w-full transition-all duration-700">
        <div class="flex items-center gap-1 justify-between mb-3">
          <div class="flex flex-col gap-0.5">
            <div class="flex items-center justify-between">
              <h3 class="text-default fw500">
                Все ноды
              </h3>
            </div>
            <span class="text-default text-neutral-500 dark:text-neutral-400">
              тут можно выбрать основные ноды
            </span>
          </div>
        </div>
        <NodesAlert />
        <div class="h-full flex flex-col justify-between w-full">
          <div class="flex flex-col gap-2.5">
            <NodeElement
              v-for="node, idx in nodes"
              :key="idx"
              :node="node"
            />
          </div>
        </div>
        <DocLink />
      </div>
    </UiSheetContent>
  </UiSheet>
</template>
