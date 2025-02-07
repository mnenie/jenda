<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { UiButton } from '@/shared/ui'
</script>

<template>
  <UiButton
    variant="solid"
    size="default"
    @click="$router.push({ name: 'workflows-new' })"
  >
    <Icon icon="icon-park-solid:add-music" class="min-w-4 min-h-4" />
    <span class="text-default">{{ $t('workflows.create') }}</span>
  </UiButton>
</template>
