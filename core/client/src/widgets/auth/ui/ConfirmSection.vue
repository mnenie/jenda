<script setup lang="ts">
import { UiAlert } from '@/shared/ui'
</script>

<template>
  <div
    class="auth-slot-container"
  >
    <div class="h-full w-full flex flex-col justify-center items-center mx-auto">
      <div
        class="form-container"
      >
        <h2 class="text-3xl fw-600 max-[580px]:text-2xl">
          {{ $t('authentication.confirm.title') }}
        </h2>
        <p class="text-sm pb-5 text-neutral-500 dark:text-neutral-400 mt--1.5">
          {{ $t('authentication.confirm.description') }}
        </p>
        <UiAlert
          variant="success"
          closable
          class="max-w-98% max-[520px]:mb-1.5"
        >
          <span class="text-sm">
            {{ $t('authentication.confirm.alert') }}
          </span>
        </UiAlert>
        <slot />
      </div>
    </div>
  </div>
</template>
