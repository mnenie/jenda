<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { WorkspaceForm } from '@/features/auth/sign-up'
import { LayoutsEnum } from '@/layouts/model'
import { WorkspaceCreating, WorkspaceLogoChooser } from '@/widgets/auth'

definePage({
  meta: {
    layout: LayoutsEnum.auth,
    requiresAuth: true,
  },
  name: 'sign-up-workspace',
})

useHead({
  title: 'Sign Up | Create Workspace',
})
</script>

<template>
  <div class="auth-page">
    <WorkspaceCreating>
      <template #logo>
        <WorkspaceLogoChooser />
      </template>
      <template #form>
        <WorkspaceForm />
      </template>
    </WorkspaceCreating>
  </div>
</template>
