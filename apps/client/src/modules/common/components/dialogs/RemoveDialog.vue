<script setup lang="ts">
import {
  UiButton,
  UiDialog,
  UiDialogClose,
  UiDialogContent,
  UiDialogHeader,
  UiDialogTitle,
  UiDialogTrigger,
} from '@/shared/ui'

defineProps<{
  tPrefix: string
}>()

const emits = defineEmits<{
  (e: 'remove'): void
}>()
</script>

<template>
  <UiDialog>
    <UiDialogTrigger as-child>
      <slot name="trigger" />
    </UiDialogTrigger>
    <UiDialogContent class="gap-2">
      <UiDialogHeader>
        <UiDialogTitle>{{ $t(`${tPrefix}.remove.title`) }}</UiDialogTitle>
      </UiDialogHeader>
      <div class="flex flex-col gap-6">
        <p class="text-neutral-800 dark:text-neutral-300 text-default">
          {{ $t(`${tPrefix}.remove.description`) }}
          <span class="fw500 text-red-400">{{ $t(`common.remove.warning`) }}</span>
        </p>
        <div class="flex gap-2 justify-end">
          <UiDialogClose as-child>
            <UiButton variant="secondary">
              {{ $t('common.remove.btns', 1) }}
            </UiButton>
          </UiDialogClose>
          <UiDialogClose as-child>
            <UiButton variant="destructive" @click="emits('remove')">
              {{ $t('common.remove.btns', 2) }}
            </UiButton>
          </UiDialogClose>
        </div>
      </div>
    </UiDialogContent>
  </UiDialog>
</template>
