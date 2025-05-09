<script setup lang="ts">
import { computed } from 'vue'
import TaskIdInput from './TaskIdInput.vue'
import BoardsDynamicBox from './BoardsDynamicBox.vue'
import ColumnsDynamicBox from './ColumnsDynamicBox.vue'
import BodyRequest from './BodyRequest.vue'
import type { Chooser, PickerNode, TAChooser } from '../../types'

const props = defineProps<{
  node: PickerNode
  action: TAChooser['value']
}>()

const board = defineModel<Chooser['value'] | undefined>({
  required: true,
})

const shouldShowBoardCombobox = computed(() => /task|column/.test(props.action))
const shouldShowColumnCombobox = computed(() =>
  /task|column/.test(props.action) && props.action !== 'column_create',
)
const shouldShowTaskIdInput = computed(() => props.action === 'task_updated')
const sholudShowHTTPRequestField = computed(() =>
  /task|column/.test(props.action) && props.action !== 'column_delete',
)
</script>

<template>
  <div>
    <p class="text-default fw500 mb-1.5">
      {{ $t('workflow.node.settings.inputs.title') }}
    </p>
    <div class="flex flex-col gap-2">
      <BoardsDynamicBox v-if="shouldShowBoardCombobox" v-model="board" />
      <ColumnsDynamicBox v-if="shouldShowColumnCombobox" :choosed-board="board" />
      <TaskIdInput v-if="shouldShowTaskIdInput" />
      <BodyRequest v-if="sholudShowHTTPRequestField && props.node.data.tag === 'action'" />
    </div>
  </div>
</template>
