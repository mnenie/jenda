<script setup lang="ts">
import {
  UiDialog,
  UiDialogContent,
  UiDialogDescription,
  UiDialogHeader,
  UiDialogTitle,
  UiDialogTrigger,
} from '@/shared/ui'
import AddTaskForm from '@/modules/boards/components/forms/AddTaskForm.vue'

const model = defineModel<boolean>('open')
</script>

<template>
  <UiDialog v-model:open="model">
    <UiDialogTrigger as-child>
      <slot />
    </UiDialogTrigger>
    <UiDialogContent>
      <UiDialogHeader>
        <UiDialogTitle>Добавить задачу</UiDialogTitle>
        <UiDialogDescription>
          Создайте новую задачу для этой колонки.
        </UiDialogDescription>
      </UiDialogHeader>
      <AddTaskForm @close="model = false" />
    </UiDialogContent>
  </UiDialog>
</template>
