<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { SignInForm } from '@/features/auth/sign-in'
import { LayoutsEnum } from '@/layouts/model'
import { AuthContainer } from '@/widgets/auth'

definePage({
  meta: {
    layout: LayoutsEnum.auth,
    requiresAuth: false,
  },
  name: 'sign-in',
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
