<script setup lang="ts">
import { ImportTemplate } from '@/entities/template'
import UiButton from '@/shared/ui/button/UiButton.vue'
import UiDialog from '@/shared/ui/dialog/UiDialog.vue'
import UiDialogContent from '@/shared/ui/dialog/UiDialogContent.vue'
import UiDialogTrigger from '@/shared/ui/dialog/UiDialogTrigger.vue'
import { AllTemplates } from '@/widgets/templates'
import { useHead } from '@unhead/vue'

definePage({
  meta: {
    requiresAuth: true,
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
      <UiDialog>
        <UiDialogTrigger as-child>
          <UiButton variant="outline" @click="$router.push({ name: 'community' })">
            {{ $t('templates.community') }}
          </UiButton>
        </UiDialogTrigger>
        <UiDialogContent @close-auto-focus="$router.back()">
          <RouterView />
        </UiDialogContent>
      </UiDialog>
      <UiButton variant="solid" class="ml-2">
        {{ $t('templates.create') }}
      </UiButton>
    </div>
  </div>
  <ImportTemplate />
  <AllTemplates />
</template>
