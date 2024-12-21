<script setup lang="ts">
import { SignInForm } from '@/features/auth/sign-in'
import { LayoutsEnum } from '@/layouts/model'
import { AuthContainer } from '@/widgets/auth'
import { useHead } from '@unhead/vue'

definePage({
  meta: {
    layout: LayoutsEnum.auth,
    requiresAuth: false,
  },
})
useHead({
  title: 'Jenda | Sign In',
})
</script>

<template>
  <div class="auth-page">
    <AuthContainer>
      <SignInForm />
    </AuthContainer>
  </div>
</template>
