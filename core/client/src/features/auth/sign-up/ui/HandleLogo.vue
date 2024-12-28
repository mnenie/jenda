<script setup lang="ts">
import { inject } from 'vue'
import { authWorkspaceKey } from '@/shared/constants'
import { UiButton } from '@/shared/ui'

const { openFileChooser, reset } = inject(authWorkspaceKey)!
</script>

<template>
  <div class="flex items-center gap-2">
    <UiButton size="sm" variant="outline" @click="openFileChooser($event)">
      {{ $t('authentication.workspace.logo.btn', 1) }}
    </UiButton>
    <UiButton size="sm" variant="outline" class="!text-red-500" @click="reset">
      {{ $t('authentication.workspace.logo.btn', 2) }}
    </UiButton>
  </div>
</template>
