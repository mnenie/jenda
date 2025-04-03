<script setup lang="ts">
import { shallowRef } from 'vue'
import LabelItem from '../../additions/LabelItem.vue'
import { useTaskCombobox } from '../../../composables/kanban'
import type { Label } from '../../../types'
import TaskComboboxFilter from '@/modules/common/components/TaskComboboxFilter.vue'

defineProps<{
  options: Label[]
}>()

const labels = defineModel<Label[]>('labels', {
  required: true,
})
const searchTerm = shallowRef()

const [removeLabel, addLabel] = useTaskCombobox(labels, 'id')
</script>

<template>
  <TaskComboboxFilter
    v-model="labels"
    v-model:search-term="searchTerm"
    :items="options"
    value-property="name"
    t-prefix="labels"
    id-property="id"
    @add="addLabel($event)"
  >
    <template #input-content="{ values }">
      <LabelItem
        v-for="label in values"
        :key="label.id"
        :label
        :removable="true"
        class="text-13px px-1.5px py-0 !h-fit"
        @remove="removeLabel(label)"
      />
    </template>
    <template #box-content="{ item }">
      <LabelItem :label="item" class="text-13px" />
    </template>
  </TaskComboboxFilter>
</template>
