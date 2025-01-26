<script setup lang="ts">
import { useHead } from '@unhead/vue'

// unplugin
definePage({
  meta: {
    requiresAuth: true,
    breadcrumb: [
      {
        tKey: 'members',
        icon: 'hugeicons:user-multiple-02',
        name: 'members',
        to: { name: 'members' },
      },
    ],
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
