<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useField, useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { z } from '@/shared/libs/vee-validate'
import { UiBadge, UiFormField, UiFormLabel, UiFormMessage, UiInput } from '@/shared/ui'

const { t } = useI18n()

const validationSchema = toTypedSchema(
  z.object({
    delay: z.number().min(0).max(3600, {
      message: t('workflow.node.settings.delay.max'),
    }).optional(),
  }),
)

const { errors } = useForm({
  validationSchema,
  initialValues: {
    delay: 0,
  },
})

const { value: delay } = useField<string>('delay')

const isMaxError = computed(() => {
  return errors.value.delay?.includes(t('workflow.node.settings.delay.max'))
})
</script>

<template>
  <div class="w-full flex flex-col gap-2 pb-20">
    <p class="text-default fw500">
      {{ $t('workflow.node.settings.delay.title') }}
    </p>
    <UiFormField v-auto-animate>
      <UiFormLabel class="text-neutral-500 dark:text-neutral-400">
        {{ $t('workflow.node.settings.sections.delay') }}
      </UiFormLabel>
      <UiInput v-model="delay" class="shadow-none focus:ring-0" type="number" placeholder="0">
        <template #trailing>
          <div class="flex items-center gap-1 mr-1">
            <UiBadge v-if="isMaxError" variant="soft" class="p-0 px-1 mr-1.5">
              {{ $t('workflow.nodes.paid') }}
            </UiBadge>
            <div
              v-tooltip.top-end="{
                content: $t('workflow.node.settings.delay.tooltip'),
              }"
              i-hugeicons-alert-diamond
              class="bg-blue-600 min-w-4.2 min-h-4.2"
            />
          </div>
        </template>
      </UiInput>
      <UiFormMessage v-if="errors.delay" :content="errors.delay" />
    </UiFormField>
  </div>
</template>
