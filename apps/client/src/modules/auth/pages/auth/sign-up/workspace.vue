<script setup lang="ts">
import { useHead } from '@unhead/vue'
import WorkspaceForm from '../../../components/forms/WorkspaceForm.vue'
import WorkspaceCreating from '../../../components/WorkspaceCreating.vue'
import WorkspaceLogoChooser from '../../../components/features/WorkspaceLogoChooser.vue'
import { LayoutsEnum } from '@/shared/constants/layouts'

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
