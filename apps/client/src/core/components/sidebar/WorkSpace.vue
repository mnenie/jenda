<script setup lang="ts">
import LinkItem from './links/LinkItem.vue'
import type { WorkspaceLink } from '../../types'
import { UiBadge } from '@/shared/ui'

defineProps<{
  links: WorkspaceLink[]
}>()
</script>

<template>
  <div class="flex flex-col space-y-1.5 justify-start mb-20px">
    <LinkItem
      v-for="link in links"
      :key="link.name"
      :link="link"
    >
      <template #badge="{ isExpanded }">
        <UiBadge
          v-if="link.badge && isExpanded && link.name === 'workflows'"
          variant="soft"
          class="px-5px py-0 text-xs rounded-md"
        >
          <span class="text-xs">beta</span>
        </UiBadge>
      </template>
    </LinkItem>
  </div>
</template>
