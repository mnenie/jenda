<script setup lang="ts">
import { useHead } from '@unhead/vue'
import AuthContainer from '../../../components/AuthContainer.vue'
import SignInForm from '../../../components/forms/SignInForm.vue'
import { LayoutsEnum } from '@/shared/constants/layouts'

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
