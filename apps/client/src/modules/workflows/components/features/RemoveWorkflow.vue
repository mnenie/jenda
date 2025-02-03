<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { UiButton } from '@/shared/ui'
import RemoveDialog from '@/modules/common/components/dialogs/RemoveDialog.vue'
</script>

<template>
  <RemoveDialog t-prefix="workflow">
    <template #trigger>
      <UiButton variant="destructive">
        <Icon icon="heroicons:trash" class="text-neutral-800 dark:text-neutral-300" />
      </UiButton>
    </template>
  </RemoveDialog>
</template>
