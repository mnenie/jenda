<script setup lang="ts">
import { LogoFile } from '@/features/auth'
import { UiAlert } from '@/shared/ui'
</script>

<template>
  <div
    class="auth-slot-container"
  >
    <div class="h-full w-full flex flex-col justify-center items-center mx-auto">
      <LogoFile />
      <div
        class="relative flex w-460px flex-col gap-2
          max-[520px]:!w-full max-[1100px]:!w-460px max-[1200px]:w-360px"
      >
        <h2 class="text-3xl fw-600 max-[580px]:text-2xl">
          {{ $t('authentication.confirm.title') }}
        </h2>
        <p class="text-sm pb-5 text-neutral-400 mt--1.5">
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
