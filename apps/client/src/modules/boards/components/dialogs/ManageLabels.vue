<script setup lang="ts">
import ManageLabelsForm from '../forms/ManageLabelsForm.vue'
import {
  UiDialog,
  UiDialogContent,
  UiDialogDescription,
  UiDialogHeader,
  UiDialogTitle,
  UiDialogTrigger,
} from '@/shared/ui'

const modelManageLabelsDialog = defineModel<boolean>('open')
</script>

<template>
  <UiDialog v-model:open="modelManageLabelsDialog">
    <UiDialogTrigger as-child>
      <slot name="trigger" />
    </UiDialogTrigger>
    <UiDialogContent class="sm:max-w-2xl">
      <div class="flex flex-col gap-8">
        <UiDialogHeader>
          <UiDialogTitle>
            {{ $t('board.forms.labels.title') }}
          </UiDialogTitle>
          <UiDialogDescription>
            {{ $t('board.forms.labels.description') }}
          </UiDialogDescription>
        </UiDialogHeader>
      </div>
      <ManageLabelsForm />
    </UiDialogContent>
  </UiDialog>
</template>
