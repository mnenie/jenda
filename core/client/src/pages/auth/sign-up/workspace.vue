<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { WorkspaceForm } from '@/features/auth/sign-up'
import { LayoutsEnum } from '@/layouts/model'
import { WorkspaceLogoChooser, WorkspaceSection } from '@/widgets/auth'

definePage({
  meta: {
    layout: LayoutsEnum.auth,
    requiresAuth: true,
  },
  name: 'workspace',
})

useHead({
  title: 'Sign Up | Create Workspace',
})
</script>

<template>
  <div class="auth-page">
    <WorkspaceSection>
      <template #logo>
        <WorkspaceLogoChooser />
      </template>
      <template #form>
        <WorkspaceForm />
      </template>
    </WorkspaceSection>
  </div>
</template>
