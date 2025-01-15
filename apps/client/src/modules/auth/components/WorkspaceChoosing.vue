<script setup lang="ts">
import PrivacyPolicy from './common/PrivacyPolicy.vue'
</script>

<template>
  <div
    class="auth-slot-container"
  >
    <div class="h-full w-full flex flex-col justify-center items-center mx-auto">
      <div
        class="form-container"
      >
        <h2 class="text-3xl fw-600 max-[580px]:text-2xl mb-2">
          {{ $t('authentication.workspace.choosing.title') }}
        </h2>
        <p class="text-neutral-500 dark:text-neutral-300">
          {{ $t('authentication.workspace.choosing.description', 1) }}
        </p>
        <p class="mb-6 max-w-100% text-neutral-500 dark:text-neutral-300">
          {{ $t('authentication.workspace.choosing.description', 2) }}
        </p>
        <slot />
        <PrivacyPolicy />
      </div>
    </div>
  </div>
</template>
