<script setup lang="ts">
import { ShareLink } from '@/features/share'
import {
  ShimmerButton,
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
</script>

<template>
  <UiDialog>
    <UiDialogTrigger as-child>
      <ShimmerButton shimmer-size="2px">
        <div i-hugeicons-link-04 class="text-neutral-900 dark:text-neutral-100 text-base" />
        <span
          class="whitespace-pre-wrap text-center text-neutral-800 dark:text-neutral-100 text-sm fw500"
        >
          {{ $t('header.share') }}
        </span>
      </ShimmerButton>
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
