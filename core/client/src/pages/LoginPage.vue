<script setup lang="ts">
import { BgPanel, SignInForm } from '@/features/auth'
import { AuthContainer } from '@/widgets/auth'
import { useHead } from '@unhead/vue'

useHead({
  title: 'Jenda | Login',
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
