<script setup lang="ts">
import { Icon } from '@iconify/vue'
import AddColumnForm from '../../forms/AddColumnForm.vue'
import { UiButton, UiDialog, UiDialogContent, UiDialogDescription, UiDialogHeader, UiDialogTitle, UiDialogTrigger } from '@/shared/ui'
import { cn } from '@/shared/libs/shadcn/utils'

defineProps<{
  isReadonly?: boolean
}>()

const model = defineModel<boolean>('open')
</script>

<template>
  <div
    :class="cn(
      'rounded-lg h-fit flex flex-col justify-between gap-0.5 max-w-280px !shadow-none w-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-md',
      { 'pointer-events-none': isReadonly },
    )"
  >
    <UiDialog v-model:open="model">
      <UiDialogTrigger as-child>
        <UiButton variant="ghost" size="sm" class="w-full justify-start h-10 px-2 !shadow-none">
          <Icon icon="lucide:plus" class="min-w-4.4 min-h-4.4 text-neutral-500 dark:text-neutral-400" />
          <span class="text-default fw500 text-neutral-600 dark:text-neutral-400">
            {{ $t('kanban.column.new') }}
          </span>
        </UiButton>
      </UiDialogTrigger>
      <UiDialogContent>
        <UiDialogHeader>
          <UiDialogTitle>{{ $t('kanban.column.forms.add.dialogTitle') }}</UiDialogTitle>
          <UiDialogDescription>
            {{ $t('kanban.column.forms.add.dialogDescription') }}
          </UiDialogDescription>
        </UiDialogHeader>

        <AddColumnForm @close="model = false" />
      </UiDialogContent>
    </UiDialog>
  </div>
</template>
