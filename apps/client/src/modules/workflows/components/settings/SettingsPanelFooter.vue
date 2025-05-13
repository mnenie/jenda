<script setup lang="ts">
import { UiButton, UiSheetFooter } from '@/shared/ui'
</script>

<template>
  <UiSheetFooter class="mt-auto w-full sticky bg-white flex flex-col items-end py-0 pb-1.5 px-2.5 bottom-0">
    <div class="w-full h-px mb-2 bg-neutral-100 dark:bg-neutral-700" />
    <div class="flex gap-2 w-full justify-end">
      <UiButton variant="outline" class="shadow-none !text-red-500">
        {{ $t('workflow.node.settings.remove') }}
      </UiButton>
      <UiButton variant="outline">
        {{ $t('workflow.node.settings.update') }}
      </UiButton>
    </div>
  </UiSheetFooter>
</template>
