<script setup lang="ts">
import { ref } from 'vue'
import {
  ComboboxAnchor,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxLabel,
  ComboboxRoot,
  ComboboxTrigger,
  ComboboxViewport,
  TagsInputInput,
  TagsInputRoot,
} from 'radix-vue'
import { Icon } from '@iconify/vue'
import LabelItem from '../additions/LabelItem.vue'
import type { Label } from '../../types'

defineProps<{
  options: Label[]
}>()

const labels = defineModel<Label[]>('labels', { required: true })

const searchTerm = ref('')

function removeLabel(label: Label) {
  labels.value = labels.value.filter(l => l.id !== label.id)
}

function addLabel(label: Label) {
  const index = labels.value.findIndex(l => l.id === label.id)
  if (index > -1)
    return labels.value.splice(index, 1)
  labels.value.push(label)
}
</script>

<template>
  <ComboboxRoot
    v-model:search-term="searchTerm"
    :model-value="labels.map(label => label.name)"
    multiple
    class="relative w-full"
  >
    <ComboboxAnchor class="border border-gray-200 dark:border-gray-700 w-full inline-flex items-center justify-between rounded-lg p-2 text-[13px] leading-none gap-[5px] bg-white dark:bg-gray-800 text-grass11 shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-grass9 outline-none">
      <TagsInputRoot
        :model-value="labels.map(label => label.name)"
        delimiter=""
        class="flex gap-2 items-center rounded-lg flex-wrap w-full"
      >
        <LabelItem
          v-for="label in labels"
          :key="label.id"
          :label="label"
          :removable="true"
          @remove="removeLabel(label)"
        />

        <ComboboxInput as-child>
          <TagsInputInput
            :placeholder="$t('kanban.column.tasks.forms.creating.labels.commandSearch')"
            class="focus:outline-none flex-1 rounded !bg-transparent placeholder:text-mauve10 px-1"
            @keydown.enter.prevent
          />
        </ComboboxInput>
      </TagsInputRoot>

      <ComboboxTrigger class="bg-transparent">
        <Icon icon="radix-icons:chevron-down" class="h-4 w-4" />
      </ComboboxTrigger>
    </ComboboxAnchor>

    <ComboboxContent class="absolute z-10 w-full mt-2 bg-white dark:bg-gray-800 overflow-hidden rounded shadow-lg">
      <ComboboxViewport class="p-[5px] max-h-180px overflow-y-auto">
        <ComboboxEmpty class="text-gray-400 text-xs font-medium text-center py-2">
          {{ $t('kanban.column.tasks.forms.creating.labels.commandEmpty') }}
        </ComboboxEmpty>

        <ComboboxGroup>
          <ComboboxLabel class="px-2 mb-2 text-xs font-semibold form-label">
            {{ $t('kanban.column.tasks.forms.creating.labels.commandHeading') }}
          </ComboboxLabel>

          <ComboboxItem
            v-for="option in options"
            :key="option.id"
            :value="option.name"
            class="flex items-center justify-between text-sm text-gray-800 dark:text-gray-200 h-[30px] px-3 rounded-md select-none cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
            @click="addLabel(option)"
          >
            <LabelItem :label="option" />
            <ComboboxItemIndicator class="mr-2">
              <Icon icon="radix-icons:check" />
            </ComboboxItemIndicator>
          </ComboboxItem>
        </ComboboxGroup>
      </ComboboxViewport>
    </ComboboxContent>
  </ComboboxRoot>
</template>
