<script setup lang="ts">
import { computed, inject, ref, useTemplateRef } from 'vue'
import { useRouter } from 'vue-router/auto'
import ManageNoteOptions from './options/ManageNoteOptions.vue'
import {
  UiDialog,
  UiDialogContent,
  UiDialogHeader,
} from '@/shared/ui'
import { DayjsInjectionKey } from '@/plugins/dayjs'

const router = useRouter()

const dialog = useTemplateRef<InstanceType<typeof UiDialog> | null>('dialog')

function toggleModalRoute() {
  if (dialog.value && !dialog.value.open) {
    router.back()
  }
}

const dayjs = inject(DayjsInjectionKey)!

// mocks -> after from store
const lastModified = ref('2025-01-21T00:00:00Z')

const daysAgo = computed(() => dayjs().to(dayjs(lastModified.value)))
</script>

<template>
  <UiDialog
    ref="dialog"
    v-bind="$attrs"
    :default-open="true"
    @update:open="toggleModalRoute"
  >
    <UiDialogContent
      :closed="false"
      class="flex flex-col max-w-5xl min-h-2xl max-h-xl overflow-y-auto"
    >
      <UiDialogHeader :custom="true">
        <div class="flex items-center gap-2.5">
          <ManageNoteOptions />
          <div class="w-px h-3 bg-neutral-200 dark:bg-neutral-700" />
          <span class="text-small text-neutral-600 dark:text-neutral-400">
            {{ $t('note.lastModified') }} {{ daysAgo }}
          </span>
        </div>
      </UiDialogHeader>
      <slot />
    </UiDialogContent>
  </UiDialog>
</template>
