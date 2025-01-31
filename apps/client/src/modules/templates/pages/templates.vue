<script setup lang="ts">
import { useHead } from '@unhead/vue'
import AllTemplates from '../components/AllTemplates.vue'
import ImportTemplate from '../components/ImportTemplate.vue'
import { UiButton } from '@/shared/ui'

// unplugin
definePage({
  meta: {
    requiresAuth: true,
    breadcrumb: [
      {
        tKey: 'templates',
        icon: 'hugeicons:dashboard-square-add',
        name: 'templates',
        to: { name: 'templates' },
      },
    ],
  },
  name: 'templates',
})

useHead({
  title: 'Jenda | Templates',
})
</script>

<template>
  <div class="flex items-center justify-between mb-5">
    <p class="text-sm text-neutral-600 dark:text-neutral-300">
      {{ $t('templates.description') }}
    </p>
    <div>
      <UiButton variant="outline" @click="$router.push({ name: 'community' })">
        {{ $t('templates.community') }}
      </UiButton>
      <UiButton variant="solid" class="ml-2">
        {{ $t('templates.create') }}
      </UiButton>
    </div>
  </div>
  <RouterView />
  <ImportTemplate />
  <AllTemplates />
</template>
