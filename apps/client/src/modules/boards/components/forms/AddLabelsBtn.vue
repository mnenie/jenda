<script setup lang="ts">
import { Icon } from '@iconify/vue'
import LabelItem from '../additions/LabelItem.vue'
import type { Label } from '../../types'
import {
  UiButton,
  UiCommand,
  UiCommandEmpty,
  UiCommandGroup,
  UiCommandInput,
  UiCommandItem,
  UiCommandList,
  UiPopover,
  UiPopoverContent,
  UiPopoverTrigger,
} from '@/shared/ui'

const props = defineProps<{
  modelValue: Label[]
  options: Label[]
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: Label[]): void
}>()

function onSelected(option: Label) {
  const index = props.modelValue.findIndex(user => user.id === option.id)
  const newModel = [...props.modelValue]

  if (index > -1) {
    newModel.splice(index, 1)
  }
  else {
    newModel.push(option)
  }

  emit('update:modelValue', newModel)
}
</script>

<template>
  <UiPopover>
    <UiPopoverTrigger as-child>
      <UiButton
        variant="outline"
        class="text-muted-foreground flex justify-left"
      >
        <Icon icon="hugeicons:label" class="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400" />
        <span>Добавить лейбл</span>
      </UiButton>
    </UiPopoverTrigger>
    <UiPopoverContent class="w-auto p-0">
      <UiCommand>
        <UiCommandInput placeholder="Поиск..." />
        <UiCommandList>
          <UiCommandEmpty class="p-2">
            Ничего не найдено :/
          </UiCommandEmpty>
          <UiCommandGroup heading="Доступные участники">
            <UiCommandItem
              v-for="i in options"
              :key="i.id"
              class="flex items-center justify-between"
              :value="i.name"
              @select="onSelected(i)"
            >
              <div class="flex items-center gap-2">
                <LabelItem :label="i" />
                <!-- <span>{{ i.name }}</span> -->
              </div>
              <div class="flex h-4 w-4 items-center justify-center">
                <div
                  v-if="modelValue.some((user) => user.id === i.id)"
                  i-lucide-check
                  class="h-4 w-4"
                />
              </div>
            </UiCommandItem>
          </UiCommandGroup>
        </UiCommandList>
      </UiCommand>
    </UiPopoverContent>
  </UiPopover>
</template>
