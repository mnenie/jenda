<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { UiButton, UiDropdownMenu, UiDropdownMenuTrigger } from '@/shared/ui'
</script>

<template>
  <UiDropdownMenu>
    <UiDropdownMenuTrigger as-child>
      <UiButton variant="secondary" class="shadow-none">
        Канбан
        <Icon icon="lucide:chevron-down" class="w-4 h-4 text-neutral-400" />
      </UiButton>
    </UiDropdownMenuTrigger>
  </UiDropdownMenu>
</template>
