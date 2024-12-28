<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { SignUpForm } from '@/features/auth/sign-up'
import { LayoutsEnum } from '@/layouts/model'
import { AuthContainer } from '@/widgets/auth'

definePage({
  meta: {
    layout: LayoutsEnum.auth,
    requiresAuth: false,
  },
  name: 'sign-up',
})

useHead({
  title: 'Jenda | Sign Up',
})
</script>

<template>
  <div class="auth-page">
    <AuthContainer>
      <SignUpForm />
    </AuthContainer>
  </div>
</template>
