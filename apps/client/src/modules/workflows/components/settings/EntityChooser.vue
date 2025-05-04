<script setup lang="ts">
import { ref } from 'vue'
import UtilitySelectChooser from './UtilitySelectChooser.vue'
import type { Chooser } from '../../types'
import { UiButton, UiFormField, UiFormLabel } from '@/shared/ui'

const frameworks = [
  { value: 'next.js', label: 'Next.js' },
  { value: 'sveltekit', label: 'SvelteKit' },
  { value: 'nuxt', label: 'Nuxt' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
] as const as Chooser[]

const value = ref<Chooser>()
</script>

<template>
  <div class="w-full flex flex-col gap-2">
    <p class="text-default fw500">
      Выберите сущность для узла
    </p>
    <UiFormField>
      <UiFormLabel for="entity" required class="text-neutral-500 dark:text-neutral-400">
        Сущность
      </UiFormLabel>
      <UtilitySelectChooser v-model="value" :items="frameworks" for="entity">
        <UiButton variant="outline" class="w-full !text-neutral-500 shadow-none justify-between w-full">
          <span class="text-default">{{ value?.label ?? $t(`workflows.node.settings.placeholder`) }}</span>
          <span i-lucide-chevron-down class="w-4 h-4" />
        </UiButton>
      </UtilitySelectChooser>
    </UiFormField>
  </div>
</template>
