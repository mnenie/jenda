<script setup lang="ts">
import { shallowReactive } from 'vue'
import { useHead } from '@unhead/vue'
import type { ChoosingWorkspaceItem } from '@/entities/workspace'
import { LayoutsEnum } from '@/layouts/model'
import { WorkspaceChoosing } from '@/widgets/auth'
import { WorkspaceChanger } from '@/features/auth/sign-in'

definePage({
  meta: {
    layout: LayoutsEnum.auth,
    requiresAuth: true,
  },
  name: 'sign-in-workspace',
})

useHead({
  title: 'Sign In | Choose your workspace',
})

const workspaces = shallowReactive<ChoosingWorkspaceItem[]>([
  {
    _id: '1',
    name: 'Workspace 1',
    plan: 'FREE',
    status: 'active',
  },
  {
    _id: '2',
    name: 'Workspace 2',
    plan: 'PREMIUM',
    status: 'active',
  },
])
</script>

<template>
  <div class="auth-page">
    <WorkspaceChoosing>
      <WorkspaceChanger :workspaces />
    </WorkspaceChoosing>
  </div>
</template>
