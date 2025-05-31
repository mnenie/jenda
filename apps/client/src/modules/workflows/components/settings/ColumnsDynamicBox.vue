<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { storeToRefs } from 'pinia'
import UtilitySelectChooser from './UtilitySelectChooser.vue'
import type { Chooser } from '../../types'
import type { Board } from '@/modules/boards/types'
import { UiButton, UiFormField, UiFormLabel } from '@/shared/ui'
import { useBoardsStore } from '@/modules/boards/stores/boards'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<{
  choosedBoard?: string
}>()

const columnComboboxValue = ref<Chooser['value']>()

const boardsStore = useBoardsStore()
const { boards } = storeToRefs(boardsStore)

const board = computed<Board | undefined>(() => boards.value.find(board => board.name === props.choosedBoard!))

const columnsForSelect = computed(() => board.value?.columns!.map(column => ({
  value: column.title,
  sign: column.title,
  color: column.color!,
})))

const { t } = useI18n()

const templateValue = computed(() =>
  columnComboboxValue.value ? columnComboboxValue.value : t('workflow.node.settings.inputs.column'),
)
</script>

<template>
  <UiFormField class="w-full">
    <UiFormLabel for="column" class="text-neutral-500 dark:text-neutral-400">
      {{ t('workflow.node.settings.sections.columns') }}
    </UiFormLabel>
    <UtilitySelectChooser v-model="columnComboboxValue" :items="columnsForSelect ?? []" for-type="settings" class="w-300px !max-h-260px !block">
      <UiButton variant="outline" v-bind="$attrs" class="w-full shadow-none justify-between">
        <span class="text-default" :class="[columnComboboxValue ? 'text-neutral-800 dark:text-neutral-200' : '!text-neutral-500']">
          {{ templateValue }}
        </span>
        <span i-lucide-chevron-down class="w-4 h-4" />
      </UiButton>
      <template #item="{ item }">
        <div v-if="item" class="flex items-center gap-2">
          <div
            class="w-4 h-4 rounded-full border-1.5"
            :style="{ borderColor: item.color, backgroundColor: `${item.color}20` }"
          />
          <span class="text-default ml-0.5 fw500 truncate max-w-110px text-neutral-800 dark:text-neutral-200">
            {{ item.value }}
          </span>
        </div>
      </template>
    </UtilitySelectChooser>
  </UiFormField>
</template>
