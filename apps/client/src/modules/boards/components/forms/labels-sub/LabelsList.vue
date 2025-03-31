<script setup lang="ts">
import { computed, shallowRef } from 'vue'
import { Icon } from '@iconify/vue'
import { useBoardsStore } from '../../../stores/boards'
import LabelItem from '../../additions/LabelItem.vue'
import DdOptions from './DdOptions.vue'
import ColorAndNameLabel from './ColorAndNameLabel.vue'
import type { Label } from '../../../types'
import { UiButton, UiFormMessage, UiTableRoot as UiTable, UiTableBody, UiTableCell, UiTableRow } from '@/shared/ui'

const props = defineProps<{
  labels: Label[]
}>()

const boardStore = useBoardsStore()

const originalValues = shallowRef(new Map<string, Pick<Label, 'name' | 'color'>>())

const existingLabelNames = computed(() => {
  return new Set(
    props.labels
      .filter(label => label.status !== 'editing')
      .map(label => label.name.toLowerCase()),
  )
})

function isLabelNameDuplicate(label: Label): boolean {
  return (
    existingLabelNames.value.has(label.name.toLowerCase())
    && label.name.trim() !== ''
  )
}

function editLabel(label: Label) {
  originalValues.value.set(label.id!, {
    name: label.name,
    color: label.color,
  })
  label.status = 'editing'
}

function saveLabel(label: Label) {
  label.status = 'default'
  originalValues.value.delete(label.id!)
  boardStore.updateLabel(label)
}

function cancel(label: Label) {
  const original = originalValues.value.get(label.id!)
  if (original) {
    label.name = original.name
    label.color = original.color
    label.status = 'default'
    originalValues.value.delete(label.id!)
  }
}
</script>

<template>
  <UiTable class="p-0 border-none max-h-400px scrollbar">
    <UiTableBody class="p-0 gap-0">
      <UiTableRow
        v-for="label in labels"
        :key="label.id"
        class="border-none !bg-transparent cursor-default"
      >
        <div>
          <UiTableCell class="!pl-0 w-full border-none">
            <div v-if="label.status !== 'editing'" class="flex items-center gap-2">
              <LabelItem :label="label" class="!text-13px w-fit max-w-240px" />
              <div class="flex items-center gap-1">
                <Icon icon="codicon:issue-draft" class="w-4 h-4 text-green-500" />
                <span class="text-default dark:text-neutral-200">
                  {{ label.taskCount }}
                </span>
              </div>
            </div>
            <ColorAndNameLabel
              v-else
              v-model:color="label.color"
              v-model:name="label.name"
              class="!border-none"
              btn="rounded-md shadow-none mr--1"
            />
          </UiTableCell>
          <UiTableCell class="border-none pr-6">
            <div v-if="label.status === 'editing'" class="flex items-center gap-1.5 justify-center">
              <UiButton
                :disabled="isLabelNameDuplicate(label) || !label.name?.trim()"
                variant="secondary"
                class="w-fit h-8 shadow-none"
                @click="saveLabel(label)"
              >
                {{ $t('board.forms.labels.actions.save') }}
              </UiButton>
              <UiButton variant="secondary" class="w-fit h-8 shadow-none" @click="cancel(label)">
                {{ $t('board.forms.labels.actions.cancel') }}
              </UiButton>
            </div>
          </UiTableCell>
          <UiTableCell class="!pr-0 justify-end w-fit mr-0">
            <DdOptions
              class="w-full self-end"
              :status="label.status || 'default'"
              @edit="editLabel(label)"
              @delete=" boardStore.removeLabel(label)"
            />
          </UiTableCell>
        </div>
        <UiFormMessage
          v-if="label.status === 'editing' && isLabelNameDuplicate(label)"
          :content="$t('board.forms.labels.errors.exists')"
        />
        <UiFormMessage
          v-if="label.status === 'editing' && !label.name?.trim()"
          :content="$t('errors.invalidTypeReceivedUndefined', { validation: 'label' })"
        />
      </UiTableRow>
    </UiTableBody>
  </UiTable>
</template>

<style scoped>
@import '@/styles/_scrollbar';
</style>
