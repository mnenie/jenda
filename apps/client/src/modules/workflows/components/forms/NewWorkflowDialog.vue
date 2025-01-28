<script setup lang="ts">
import { useTemplateRef } from 'vue'
import { useRouter } from 'vue-router/auto'
import {
  UiAlert,
  UiDialog,
  UiDialogContent,
  UiDialogDescription,
  UiDialogHeader,
  UiDialogTitle,
} from '@/shared/ui'

const router = useRouter()

const dialog = useTemplateRef<InstanceType<typeof UiDialog> | null>('dialog')

function toggleModalRoute() {
  if (dialog.value && !dialog.value.open) {
    router.push({ name: 'workflows' })
  }
}
</script>

<template>
  <UiDialog
    ref="dialog"
    v-bind="$attrs"
    :default-open="true"
    @update:open="toggleModalRoute"
  >
    <UiDialogContent class="sm:max-w-xl">
      <div class="flex flex-col gap-4">
        <UiDialogHeader>
          <UiDialogTitle>
            {{ $t('workflows.forms.creating.title') }}
          </UiDialogTitle>
          <UiDialogDescription>
            {{ $t('workflows.forms.creating.description_main') }}
          </UiDialogDescription>
        </UiDialogHeader>
        <UiAlert variant="info" class="mb-0 flex flex-col items-start gap-1 border-none text-neutral-900">
          <div class="flex gap-1">
            <span>{{ $t('workflows.forms.creating.alert', 1) }}</span>
            <span class="text-blue-600 fw500">{{ $t('workflows.status.draft') }}</span>
          </div>
          <div class="flex gap-1.5 items-center">
            <div class="w-2px h-7 bg-neutral-300 dark:bg-neutral-600 ml-1 rounded-full" />
            <div class="text-small ml-1 text-neutral-500">
              <span class="mr-1">{{ $t('workflows.forms.creating.alert', 2) }}</span>
              <span class="text-green-600 fw500">{{ $t('workflows.status.production') }}</span>
            </div>
          </div>
        </UiAlert>
      </div>
      <slot />
    </UiDialogContent>
  </UiDialog>
</template>
