<script setup lang="ts">
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
  title: 'Jenda | Create Workspace',
})
</script>

<template>
  <div class="auth-page">
    <AuthContainer>
      worspace
    </AuthContainer>
  </div>
</template>
