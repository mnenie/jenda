<script setup lang="ts">
import { useHead } from '@unhead/vue'
import SignUpForm from '../../../components/forms/SignUpForm.vue'
import AuthContainer from '../../../components/AuthContainer.vue'
import { LayoutsEnum } from '@/shared/constants/layouts'

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
