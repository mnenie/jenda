<script setup lang="ts">
import { ref } from 'vue'
import {
  UiDialog,
  UiDialogContent,
  UiDialogDescription,
  UiDialogHeader,
  UiDialogTitle,
  UiDialogTrigger,
} from '@/shared/ui'
import AddTaskForm from '@/modules/boards/components/forms/AddTaskForm.vue'

defineProps<{
  columnId: string
}>()

const model = ref(false)
</script>

<template>
  <UiDialog v-model:open="model">
    <UiDialogTrigger as-child>
      <slot />
    </UiDialogTrigger>
    <UiDialogContent>
      <UiDialogHeader>
        <UiDialogTitle>{{ $t('kanban.column.tasks.forms.creating.dialogTitle') }}</UiDialogTitle>
        <UiDialogDescription>
          {{ $t('kanban.column.tasks.forms.creating.dialogDescription') }}
        </UiDialogDescription>
      </UiDialogHeader>
      <AddTaskForm :column-id="columnId" @close="model = false" />
    </UiDialogContent>
  </UiDialog>
</template>
