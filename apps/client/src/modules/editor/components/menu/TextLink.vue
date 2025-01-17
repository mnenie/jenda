<script setup lang="ts">
import { UiButton, UiDropdownMenu, UiDropdownMenuTrigger } from '@/shared/ui'
</script>

<template>
  <UiDropdownMenu>
    <UiDropdownMenuTrigger as-child>
      <UiButton variant="ghost" size="sm" class="!h-7 py-0 px-1.5 fw400 gap-1">
        <span i-hugeicons-link-04 class="w-4 h-4" />
        <span i-lucide-chevron-down class="w-3.5 h-3.5 text-neutral-600" />
      </UiButton>
    </UiDropdownMenuTrigger>
  </UiDropdownMenu>
</template>
