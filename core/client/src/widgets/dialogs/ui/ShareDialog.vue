<script setup lang="ts">
import { ShareLink } from '@/features/share'
import {
  UiButton,
  UiDialog,
  UiDialogClose,
  UiDialogContent,
  UiDialogDescription,
  UiDialogFooter,
  UiDialogHeader,
  UiDialogTitle,
  UiDialogTrigger,
} from '@/shared/ui'

const model = defineModel<boolean>('open')
</script>

<template>
  <UiDialog v-model:open="model">
    <UiDialogTrigger as-child>
      <slot />
    </UiDialogTrigger>
    <UiDialogContent class="sm:max-w-md">
      <UiDialogHeader>
        <UiDialogTitle>{{ $t('dialogs.share.title') }}</UiDialogTitle>
        <UiDialogDescription>
          {{ $t('dialogs.share.description') }}
        </UiDialogDescription>
      </UiDialogHeader>
      <ShareLink />
      <UiDialogFooter class="sm:justify-start">
        <UiDialogClose as-child>
          <UiButton type="button" variant="secondary">
            {{ $t('dialogs.share.close') }}
          </UiButton>
        </UiDialogClose>
      </UiDialogFooter>
    </UiDialogContent>
  </UiDialog>
</template>
