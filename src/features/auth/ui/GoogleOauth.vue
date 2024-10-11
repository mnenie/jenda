<script setup lang="ts">
import { ref } from 'vue';
import { UiButton } from '@/shared/ui';
import { Loader2 } from 'lucide-vue-next';
import { toast } from 'vue-sonner';

const isLoading = ref(false);

function onGoogleAuth () {
  toast.warning('Jenda in dev mode and temporarily unavailable');
}
</script>

<template>
  <UiButton :variant="'outline'" :disabled="isLoading" @click="onGoogleAuth">
    <Loader2 v-if="isLoading" :class="$style.loader" />
    <img src="/icons/google.png" :class="$style.google_img" />
    Google
  </UiButton>
</template>

<style module lang="scss">
@import '@/app/styles/mixins';

.google_img {
  width: 16px;
  height: 16px;
  margin-right: 8px;
}

.loader {
  margin-right: 8px;
  height: 16px;
  width: 16px;
  @include on-spin;
}
</style>
