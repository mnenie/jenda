<script setup lang="ts">
import EditColumnForm from '../forms/EditColumnForm.vue'
import { UiDialog, UiDialogContent, UiDialogDescription, UiDialogHeader, UiDialogTitle } from '@/shared/ui'

const model = defineModel<boolean>('open')
</script>

<template>
  <UiDialog v-model:open="model">
    <UiDialogContent class="w-full max-w-lg">
      <UiDialogHeader>
        <UiDialogTitle>{{ $t('kanban.column.forms.edit.dialogTitle') }}</UiDialogTitle>
        <UiDialogDescription>
          {{ $t('kanban.column.forms.edit.dialogDescription') }}
        </UiDialogDescription>
      </UiDialogHeader>
      <EditColumnForm @close="model = false" />
    </UiDialogContent>
  </UiDialog>
</template>
