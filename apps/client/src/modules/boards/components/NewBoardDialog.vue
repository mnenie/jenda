<script setup lang="ts">
import {
  UiDialog,
  UiDialogContent,
  UiDialogDescription,
  UiDialogHeader,
  UiDialogTitle,
} from '@/shared/ui'
</script>

<template>
  <UiDialog>
    <UiDialogContent>
      <div class="flex flex-col gap-8">
        <UiDialogHeader>
          <UiDialogTitle>
            {{ $t('boards.forms.creating.title') }}
          </UiDialogTitle>
          <UiDialogDescription>
            {{ $t('boards.forms.creating.description') }}
          </UiDialogDescription>
        </UiDialogHeader>
      </div>
      <RouterView />
    </UiDialogContent>
  </UiDialog>
</template>
