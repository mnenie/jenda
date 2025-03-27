<script setup lang="ts">
import SetColumnLimitForm from '../forms/SetColumnLimitForm.vue'
import { UiDialog, UiDialogContent, UiDialogDescription, UiDialogHeader, UiDialogTitle } from '@/shared/ui'

const model = defineModel<boolean>('open')
</script>

<template>
  <UiDialog v-model:open="model">
    <UiDialogContent class="w-full max-w-md">
      <UiDialogHeader>
        <UiDialogTitle>{{ $t('kanban.column.forms.settingLimit.dialogTitle') }}</UiDialogTitle>
        <UiDialogDescription>
          {{ $t('kanban.column.forms.settingLimit.dialogDescription') }}
        </UiDialogDescription>
      </UiDialogHeader>
      <SetColumnLimitForm @close="model = false" />
    </UiDialogContent>
  </UiDialog>
</template>
