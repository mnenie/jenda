<script setup lang="ts">
import { ref } from 'vue'
import AddTaskForm from './AddTaskForm.vue'
import {
  UiDialog,
  UiDialogContent,
  UiDialogDescription,
  UiDialogHeader,
  UiDialogTitle,
  UiDialogTrigger,
} from '@/shared/ui'

const model = ref(false)
</script>

<template>
  <UiDialog v-model:open="model">
    <UiDialogTrigger as-child>
      <slot />
    </UiDialogTrigger>
    <UiDialogContent class="min-w-xl">
      <UiDialogHeader>
        <UiDialogTitle>{{ $t('kanban.column.tasks.forms.creating.dialogTitle') }}</UiDialogTitle>
        <UiDialogDescription>
          {{ $t('kanban.column.tasks.forms.creating.dialogDescription') }}
        </UiDialogDescription>
      </UiDialogHeader>
      <AddTaskForm @close="model = false" />
    </UiDialogContent>
  </UiDialog>
</template>
