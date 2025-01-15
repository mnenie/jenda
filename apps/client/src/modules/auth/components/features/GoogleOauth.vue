<script setup lang="ts">
import { toast } from 'vue-sonner'
import { UiButton } from '@/shared/ui'

function onGoogleAuth() {
  toast.warning('Jenda in dev mode and temporarily unavailable')
}
</script>

<template>
  <UiButton size="md" variant="outline" @click="onGoogleAuth">
    <img src="/icons/google.png" class="w-4 h-4" />
    Google
  </UiButton>
</template>
