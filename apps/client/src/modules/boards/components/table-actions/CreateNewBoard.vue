<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { UiButton } from '@/shared/ui'
</script>

<template>
  <UiButton
    variant="solid"
    size="default"
    @click="$router.push({ name: 'boards-new' })"
  >
    <Icon icon="solar:widget-add-bold-duotone" class="min-w-4 min-h-4" />
    <span class="text-default">{{ $t('boards.create') }}</span>
  </UiButton>
</template>
