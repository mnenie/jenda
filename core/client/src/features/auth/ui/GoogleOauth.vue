<script setup lang="ts">
import { UiButton } from '@/shared/ui'
import { Loader2 } from 'lucide-vue-next'
import { ref } from 'vue'
import { toast } from 'vue-sonner'

const isLoading = ref(false)

function onGoogleAuth() {
  toast.warning('Jenda in dev mode and temporarily unavailable')
}
</script>

<template>
  <UiButton variant="outline" :disabled="isLoading" @click="onGoogleAuth">
    <Loader2 v-if="isLoading" :class="$style.loader" />
    <img src="/icons/google.png" :class="$style.google_img" />
    Google
  </UiButton>
</template>

<style module lang="scss">
@use '@/app/styles/mixins' as *;

.google_img {
  width: 16px;
  height: 16px;
}

.loader {
  height: 16px;
  width: 16px;
  @include on-spin;
}
</style>
