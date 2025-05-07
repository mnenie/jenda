<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { values } from '../../constants/trigger_or_action'
import UtilitySelectChooser from './UtilitySelectChooser.vue'
import type { Chooser } from '../../types'
import { UiButton, UiFormField, UiFormLabel } from '@/shared/ui'

const value = ref<Chooser>()

const { t } = useI18n()

const templateValue = computed(() =>
  value.value ? t(`workflow.node.settings.panel_actions.${value.value}`) : t('workflow.node.settings.trigger_or_action.placeholder'),
)
</script>

<template>
  <div class="w-full flex flex-col gap-2">
    <p class="text-default fw500">
      {{ t('workflow.node.settings.trigger_or_action.title') }}
    </p>
    <UiFormField>
      <UiFormLabel for="entity" required class="text-neutral-500 dark:text-neutral-400">
        {{ t('workflow.node.settings.trigger_or_action.description') }}
      </UiFormLabel>
      <UtilitySelectChooser v-model="value" :items="values" for-type="actions" class="w-320px !max-h-260px !block">
        <UiButton variant="outline" class="w-full shadow-none justify-between w-full">
          <span class="text-default" :class="[value ? 'text-neutral-800 dark:text-neutral-200' : '!text-neutral-500']">
            {{ templateValue }}
          </span>
          <span i-lucide-chevron-down class="w-4 h-4" />
        </UiButton>
      </UtilitySelectChooser>
    </UiFormField>
  </div>
</template>
