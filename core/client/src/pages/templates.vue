<script setup lang="ts">
import { ImportTemplate } from '@/entities/template'
import { AllTemplates } from '@/widgets/templates'
import { useHead } from '@unhead/vue'

definePage({
  meta: {
    requiresAuth: true,
  },
})
useHead({
  title: 'Jenda | Templates',
})
</script>

<template>
  <div class="flex flex-col items-start mb-5">
    <p class="text-sm text-neutral-600 dark:text-neutral-300">
      {{ $t('templates.description') }}
    </p>
  </div>
  <ImportTemplate />
  <AllTemplates />
</template>
