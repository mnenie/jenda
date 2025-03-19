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

const { labelsInWorkspace } = defineProps<{
  labelsInWorkspace: Label[]
}>()

const labels = defineModel<Label[]>('labels', { required: true })

function onSelected(option: Label) {
  const index = labels.value.findIndex(user => user.id === option.id)
  const newModel = [...labels.value]

  if (index > -1) {
    newModel.splice(index, 1)
  }
  else {
    newModel.push(option)
  }

  labels.value = newModel
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
        <span>{{ $t('kanban.column.tasks.forms.creating.labels.placeholder') }}</span>
      </UiButton>
    </UiPopoverTrigger>
    <UiPopoverContent class="w-auto p-0">
      <UiCommand>
        <UiCommandInput :placeholder="$t('kanban.column.tasks.forms.creating.labels.commandSearch')" />
        <UiCommandList>
          <UiCommandEmpty class="p-2">
            {{ $t('kanban.column.tasks.forms.creating.labels.commandEmpty') }}
          </UiCommandEmpty>
          <UiCommandGroup :heading="$t('kanban.column.tasks.forms.creating.labels.commandHeading')">
            <UiCommandItem
              v-for="i in labelsInWorkspace"
              :key="i.id"
              class="flex items-center justify-between"
              :value="i.name"
              @select="onSelected(i)"
            >
              <div class="flex items-center gap-2">
                <LabelItem :label="i" />
              </div>
              <div class="flex h-4 w-4 items-center justify-center">
                <div
                  v-if="labels.some((label) => label.id === i.id)"
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
