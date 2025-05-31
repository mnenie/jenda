<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { storeToRefs } from 'pinia'
import UtilitySelectChooser from './UtilitySelectChooser.vue'
import type { Chooser } from '../../types'
import { UiButton, UiFormField, UiFormLabel } from '@/shared/ui'
import { useBoardsStore } from '@/modules/boards/stores/boards'

defineOptions({
  inheritAttrs: false,
})

const boardComboboxValue = defineModel<Chooser['value'] | undefined>({
  required: true,
})

const boardsStore = useBoardsStore()
const { boards } = storeToRefs(boardsStore)

const boardsForSelect = computed(() => boards.value.map(board => ({
  value: board.name,
  sign: board._id,
  color: board.color,
})))

const { t } = useI18n()

const templateValue = computed(() =>
  boardComboboxValue.value ? boardComboboxValue.value : t('workflow.node.settings.inputs.board'),
)
</script>

<template>
  <UiFormField class="w-full">
    <UiFormLabel for="board" class="text-neutral-500 dark:text-neutral-400">
      {{ t('workflow.node.settings.sections.boards') }}
    </UiFormLabel>
    <UtilitySelectChooser v-model="boardComboboxValue" :items="boardsForSelect" for-type="settings" class="w-300px !max-h-260px !block">
      <UiButton variant="outline" v-bind="$attrs" class="w-full shadow-none justify-between">
        <span class="text-default" :class="[boardComboboxValue ? 'text-neutral-800 dark:text-neutral-200' : '!text-neutral-500']">
          {{ templateValue }}
        </span>
        <span i-lucide-chevron-down class="w-4 h-4" />
      </UiButton>
      <template #item="{ item }">
        <div v-if="item" class="flex items-center gap-2">
          <div
            class="flex items-center justify-center w-5 h-5 rounded-sm"
            :style="{
              backgroundColor: `${item.color}33`,
              color: item.color,
            }"
          >
            {{ item.value.charAt(0).toUpperCase() }}
          </div>
          <span class="text-default !fw500 text-neutral-900 dark:text-neutral-100">
            {{ item.value }}
          </span>
        </div>
      </template>
    </UtilitySelectChooser>
  </UiFormField>
</template>
