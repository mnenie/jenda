<script setup lang="ts" generic="T, I extends keyof T">
import { computed } from 'vue'
import {
  ComboboxAnchor,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxRoot,
  ComboboxViewport,
  TagsInputRoot,
} from 'radix-vue'
import { Icon } from '@iconify/vue'
import { UiTagsInputInput } from '@/shared/ui'

const { idProperty = 'id', ...props } = defineProps<{
  items: T[]
  valueProperty: keyof T
  // deprecated когда пофиксим типы на id у сущностей
  idProperty: 'id' | '_id'
  tPrefix?: string
}>()

const emits = defineEmits <{
  (e: 'remove', item: T): void
  (e: 'add', item: T): void
}>()

const model = defineModel<T[]>({
  required: true,
})
const searchTerm = defineModel<string>('search-term')

const modelValues = computed(() => model.value.map(i => i[props.valueProperty]) as I[])
</script>

<template>
  <ComboboxRoot
    v-model:search-term="searchTerm"
    :model-value="modelValues"
    multiple
    class="relative w-full"
  >
    <ComboboxAnchor class="input input-filled h-unset">
      <TagsInputRoot
        delimiter=""
        class="flex gap-2 items-center rounded-lg flex-wrap w-full"
      >
        <slot name="input-content" :values="model" />
        <ComboboxInput as-child>
          <UiTagsInputInput
            :placeholder="$t(`kanban.column.tasks.forms.creating.${tPrefix}.commandSearch`)"
            @keydown.enter.prevent
          />
        </ComboboxInput>
      </TagsInputRoot>
    </ComboboxAnchor>
    <ComboboxContent class="absolute z-10 w-full mt-2 bg-white dark:bg-#2e2e2e overflow-hidden rounded shadow-sm">
      <ComboboxViewport class="p-1.5 max-h-180px overflow-y-auto">
        <ComboboxEmpty class="text-neutral-400 text-small 2xl:text-default fw400 text-center py-2">
          {{ $t('kanban.column.tasks.forms.creating.labels.commandEmpty') }}
        </ComboboxEmpty>
        <ComboboxGroup class="flex flex-col gap-1">
          <ComboboxItem
            v-for="option in items"
            :key="option[idProperty as I] as string"
            :value="option[valueProperty] as string"
            class="flex items-center justify-between text-sm h-26px px-3 rounded-md select-none cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-700/40"
            @click="emits('add', option)"
          >
            <slot name="box-content" :item="option" />
            <ComboboxItemIndicator class="mr-2">
              <Icon icon="lucide:check" />
            </ComboboxItemIndicator>
          </ComboboxItem>
        </ComboboxGroup>
      </ComboboxViewport>
    </ComboboxContent>
  </ComboboxRoot>
</template>
