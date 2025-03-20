<script setup lang="ts">
import { inject } from 'vue'
import EditBoardForm from '../forms/EditBoardForm.vue'
import { BOARD_MENU_KEY } from '../../constants/keys'
import {
  UiDialog,
  UiDialogContent,
  UiDialogDescription,
  UiDialogHeader,
  UiDialogTitle,
  UiDialogTrigger,
} from '@/shared/ui'

const { closeMenu } = inject(BOARD_MENU_KEY)!

const modelEditDialog = defineModel<boolean>('open')

function toggleDialog() {
  modelEditDialog.value = false
  closeMenu()
}
</script>

<template>
  <UiDialog v-model:open="modelEditDialog">
    <UiDialogTrigger as-child>
      <slot name="trigger" />
    </UiDialogTrigger>
    <UiDialogContent class="sm:max-w-xl">
      <div class="flex flex-col gap-8">
        <UiDialogHeader>
          <UiDialogTitle>
            {{ $t('board.forms.edit.title') }}
          </UiDialogTitle>
          <UiDialogDescription>
            {{ $t('board.forms.edit.description') }}
          </UiDialogDescription>
        </UiDialogHeader>
      </div>
      <EditBoardForm @close-dialog="toggleDialog" />
    </UiDialogContent>
  </UiDialog>
</template>
