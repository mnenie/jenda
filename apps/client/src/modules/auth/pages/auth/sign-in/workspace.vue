<script setup lang="ts">
import { shallowReactive } from 'vue'
import { useHead } from '@unhead/vue'
import WorkspaceChoosing from '../../../components/WorkspaceChoosing.vue'
import WorkspaceChanger from '../../../components/forms/WorkspaceChanger.vue'
import type { ChoosingWorkspaceItem } from '@/modules/workspace/types'
import { LayoutsEnum } from '@/shared/constants/layouts'

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
