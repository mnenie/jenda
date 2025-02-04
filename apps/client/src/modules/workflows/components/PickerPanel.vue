<script setup lang="ts">
import { usePickerContext } from '../composables/picker'
import { UiSheet, UiSheetContent } from '@/shared/ui'

const { isPickerOpen } = usePickerContext()
// const { onDragStart } = useDragAndDrop()
</script>

<template>
  <UiSheet :open="isPickerOpen" :modal="false">
    <UiSheetContent class="max-w-26% relative" :portal="false">
      content
    </UiSheetContent>
  </UiSheet>
</template>
