<script setup lang="ts">
import { useHead } from '@unhead/vue'
import ConfirmForm from '../../../components/forms/ConfirmForm.vue'
import ConfirmSection from '../../../components/ConfirmSection.vue'
import { LayoutsEnum } from '@/shared/constants/layouts'

definePage({
  meta: {
    layout: LayoutsEnum.auth,
    requiresAuth: true,
  },
  name: 'confirm',
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
