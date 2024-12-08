<script setup lang="ts">
import { BgPanel, SignUpForm } from '@/features/auth'
import { AuthContainer } from '@/widgets/auth'
import { useHead } from '@unhead/vue'

useHead({
  title: 'Jenda | Registration',
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
