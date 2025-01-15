<script setup lang="ts">
import { useWorkspaceChooserContext } from '../../composables/auth-workspace'
import { UiButton } from '@/shared/ui'

const { openFileChooser, reset } = useWorkspaceChooserContext()
</script>

<template>
  <div class="flex items-center gap-2">
    <UiButton size="sm" variant="outline" @click="openFileChooser($event)">
      {{ $t('authentication.workspace.creating.logo.btn', 1) }}
    </UiButton>
    <UiButton size="sm" variant="outline" class="!text-red-500" @click="reset">
      {{ $t('authentication.workspace.creating.logo.btn', 2) }}
    </UiButton>
  </div>
</template>
