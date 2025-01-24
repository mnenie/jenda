<script setup lang="ts">
import { useTemplateRef } from 'vue'
import { useRouter } from 'vue-router/auto'
import {
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
    router.push({ name: 'boards' })
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
      <slot />
    </UiDialogContent>
  </UiDialog>
</template>
