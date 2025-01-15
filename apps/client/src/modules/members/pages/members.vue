<script setup lang="ts">
import { useHead } from '@unhead/vue'

definePage({
  meta: {
    requiresAuth: true,
  },
  name: 'members',
})

useHead({
  title: 'Jenda | Members',
})
</script>

<template>
  <div class="h-full w-full">
    <div class="">
      <p class="text-sm text-neutral-600 dark:text-neutral-300">
        {{ $t('members.description') }}
      </p>
    </div>
  </div>
</template>
