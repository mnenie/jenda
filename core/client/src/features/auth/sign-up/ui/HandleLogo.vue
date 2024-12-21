<script setup lang="ts">
import { authWorkspaceKey } from '@/shared/constants'
import { UiButton } from '@/shared/ui'
import { inject } from 'vue'

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
