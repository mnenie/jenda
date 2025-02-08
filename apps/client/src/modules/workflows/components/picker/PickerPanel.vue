<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'
import { usePickerStore } from '../../stores/picker'
import { nodes as record } from '../../utils/constants/picker'
import NodeElement from './NodeElement.vue'
import DocLink from './DocLink.vue'
import type { Node } from '@vue-flow/core'
import type { PickerNode } from '../../types'
import { UiSheet, UiSheetContent } from '@/shared/ui'

const pickerStore = usePickerStore()
const { isPickerOpen } = storeToRefs(pickerStore)

const { tm, t } = useI18n()

const nodesLocalized = computed((): PickerNode[] => {
  const arr = tm('workflow.nodes.items') as Record<string, Node['data']>
  return Object.values(record)
    .flat()
    .map((node, idx) => ({
      ...node,
      data: {
        ...node.data,
        ...arr[idx],
      },
    }))
})

const _node = computed(() => (n: PickerNode) => {
  return nodesLocalized.value.find(node => node.data.icon === n.data.icon)
})
</script>

<template>
  <UiSheet :open="isPickerOpen" :modal="false">
    <UiSheetContent
      side="left"
      class="!max-w-320px absolute px-3 pt-3 pb-1.5"
      :portal="false"
    >
      <div class="flex flex-col h-full w-full transition-all duration-700">
        <div class="flex items-center gap-1 justify-between mb-4">
          <div class="flex flex-col gap-0.5">
            <div class="flex items-center justify-between">
              <h3 class="text-default fw500">
                {{ t('workflow.nodes.title') }}
              </h3>
            </div>
            <span class="text-default text-neutral-500 dark:text-neutral-400">
              {{ t('workflow.nodes.description') }}
            </span>
          </div>
        </div>
        <div class="h-full flex flex-col justify-between w-full">
          <div class="flex flex-col gap-6">
            <div v-for="nodes, section in record" :key="section" class="flex flex-col gap-2">
              <span class="text-neutral-500 dark:text-neutral-400 text-small capitalize text-ellipsis whitespace-nowrap overflow-hidden">
                {{ t(`workflow.nodes.${section}`) }}
              </span>
              <div class="flex flex-col gap-2.5">
                <NodeElement
                  v-for="(node, idx) in nodes"
                  :key="idx"
                  :node="_node(node)!"
                />
              </div>
            </div>
          </div>
        </div>
        <DocLink />
      </div>
    </UiSheetContent>
  </UiSheet>
</template>
