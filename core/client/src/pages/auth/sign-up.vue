<script setup lang="ts">
import { BgPanel, SignUpForm } from '@/features/auth'
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
  <div class="w-full h-full flex">
    <AuthContainer>
      <SignUpForm />
    </AuthContainer>
    <BgPanel />
  </div>
</template>
