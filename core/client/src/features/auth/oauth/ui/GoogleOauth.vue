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
  <UiButton variant="outline" @click="onGoogleAuth">
    <img src="/icons/google.png" class="w-4 h-4" />
    Google
  </UiButton>
</template>
