<script setup lang="ts">
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
  UiInput,
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
        <UiDialogTitle>Share link</UiDialogTitle>
        <UiDialogDescription>
          Anyone who has this link will be able to view this.
        </UiDialogDescription>
      </UiDialogHeader>
      <div class="flex items-center space-x-2">
        <div class="grid flex-1 gap-2">
          <UiInput
            default-value="https://shadcn-vue.com/docs/installation"
            readonly
            class="select-none pointer-events-none focus:ring-0"
          />
        </div>
        <UiButton type="submit" size="sm" class="px-3">
          <div i-hugeicons-copy-02 class="w-4 h-4 dark:text-neutral-900" />
        </UiButton>
      </div>
      <UiDialogFooter class="sm:justify-start">
        <UiDialogClose as-child>
          <UiButton type="button" variant="secondary">
            Cancel
          </UiButton>
        </UiDialogClose>
      </UiDialogFooter>
    </UiDialogContent>
  </UiDialog>
</template>
