<script setup lang="ts">
import PrivacyPolicy from './common/PrivacyPolicy.vue'
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
        <h2 class="text-3xl fw-600 max-[580px]:text-2xl mb-6">
          {{ $t('authentication.workspace.creating.title') }}
        </h2>
        <div class="mb-4">
          <slot name="logo" />
        </div>
        <UiAlert
          variant="warning"
          closable
          :content="$t('authentication.workspace.creating.alert')"
          class="max-w-98% mb-6 mt-2 max-[520px]:mb-1.5"
        />
        <slot name="form" />
        <PrivacyPolicy />
      </div>
    </div>
  </div>
</template>
