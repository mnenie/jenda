<script setup lang="ts">
import { UiInput } from '@/shared/ui'
</script>

<template>
  <div class="w-full flex items-center justify-start gap-3">
    <div class="w-20 h-20 rounded-md flex items-center justify-center bg-#266df0">
      <span i-hugeicons-clipboard class="text-17px text-neutral-200" />
    </div>
    <UiInput type="file" />
  </div>
</template>
