<script setup lang="ts">
import { ImportTemplate } from '@/entities/template'
import UiButton from '@/shared/ui/button/UiButton.vue'
import UiDialog from '@/shared/ui/dialog/UiDialog.vue'
import UiDialogContent from '@/shared/ui/dialog/UiDialogContent.vue'
import UiDialogTrigger from '@/shared/ui/dialog/UiDialogTrigger.vue'
import { AllTemplates } from '@/widgets/templates'
import { useHead } from '@unhead/vue'
import { ref, useTemplateRef } from 'vue'
import { useRoute, useRouter } from 'vue-router'

definePage({
  meta: {
    requiresAuth: true,
  },
  name: 'templates',
})

useHead({
  title: 'Jenda | Templates',
})

const sheet = useTemplateRef<InstanceType<typeof UiDialog> | null>('sheet')
const route = useRoute()
const router = useRouter()

function toggleModalRoute() {
  if (sheet.value && !sheet.value.open && route.name === 'community') {
    router.back()
  }
}

const isModalOpen = ref<boolean>(false)
</script>

<template>
  <div class="flex items-center justify-between mb-5">
    <p class="text-sm text-neutral-600 dark:text-neutral-300">
      {{ $t('templates.description') }}
    </p>
    <div>
      <UiDialog ref="sheet" v-model:open="isModalOpen" @update:open="toggleModalRoute">
        <UiDialogTrigger as-child>
          <UiButton variant="outline" @click="isModalOpen = true, $router.push({ name: 'community' })">
            {{ $t('templates.community') }}
          </UiButton>
        </UiDialogTrigger>
        <UiDialogContent>
          <div>
            placeholder
          </div>
        </UiDialogContent>
      </UiDialog>
      <UiButton variant="solid" class="ml-2" @click="$router.push('/templates/new')">
        {{ $t('templates.create') }}
      </UiButton>
    </div>
  </div>
  <ImportTemplate />
  <AllTemplates />
</template>
