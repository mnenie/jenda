<script setup lang="ts">
import { ConfirmForm } from '@/features/auth/sign-up'
import { LayoutsEnum } from '@/layouts/model'
import { ConfirmSection } from '@/widgets/auth'
import { useHead } from '@unhead/vue'

definePage({
  meta: {
    layout: LayoutsEnum.auth,
    requiresAuth: true,
  },
})
useHead({
  title: 'Sign Up | Confirm your email',
})
</script>

<template>
  <div class="auth-page">
    <ConfirmSection>
      <div i-hugeicons-alpha class="w-12 h-12 absolute right-0 top--14" />
      <ConfirmForm />
    </ConfirmSection>
  </div>
</template>
