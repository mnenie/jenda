<script setup lang="ts">
import { computed, ref, useTemplateRef } from 'vue'
import { useRouter } from 'vue-router/auto'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import ManageNoteOptions from './features/ManageNoteOptions.vue'
import {
  UiDialog,
  UiDialogContent,
  UiDialogHeader,
} from '@/shared/ui'

const router = useRouter()

const dialog = useTemplateRef<InstanceType<typeof UiDialog> | null>('dialog')

function toggleModalRoute() {
  if (dialog.value && !dialog.value.open) {
    router.back()
  }
}
dayjs.extend(relativeTime)
// mocks -> after from store
const lastModified = ref('2025-01-13T12:00:00Z')

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
      class="flex flex-col max-w-4xl min-h-xl max-h-xl overflow-y-auto"
    >
      <UiDialogHeader :custom="true">
        <div class="flex items-center gap-2.5">
          <ManageNoteOptions />
          <div class="w-px h-3 bg-neutral-200" />
          <span class="text-xs text-neutral-600 dark:text-neutral-400">
            {{ $t('note.lastModified') }} {{ daysAgo }}
          </span>
        </div>
      </UiDialogHeader>
      <slot />
    </UiDialogContent>
  </UiDialog>
</template>
