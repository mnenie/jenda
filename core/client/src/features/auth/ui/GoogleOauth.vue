<script setup lang="ts">
import { UiButton } from '@/shared/ui'
import { ref } from 'vue'
import { toast } from 'vue-sonner'

const isLoading = ref(false)

function onGoogleAuth() {
  toast.warning('Jenda in dev mode and temporarily unavailable')
}
</script>

<template>
  <UiButton variant="outline" :disabled="isLoading" @click="onGoogleAuth">
    <div
      v-if="isLoading"
      i-lucide-loader-circle
      class="h-4 w-4 animate-spin"
    />
    <img src="/icons/google.png" class="w-4 h-4" />
    Google
  </UiButton>
</template>
