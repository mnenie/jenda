<script setup lang="ts">
import { BgPanel, SignInForm } from '@/features/auth'
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
  <div class="w-full h-full flex">
    <AuthContainer>
      <SignInForm />
    </AuthContainer>
    <BgPanel />
  </div>
</template>
