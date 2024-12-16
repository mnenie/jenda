<script setup lang="ts">
import { SignUpForm } from '@/features/auth'
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
