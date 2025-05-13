<script setup lang="ts">
import { useField, useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { z } from '@/shared/libs/vee-validate'
import { UiFormField, UiFormLabel, UiFormMessage, UiTextarea } from '@/shared/ui'

defineProps<{
  modelValue: string
}>()

const validationSchema = toTypedSchema(
  z.object({
    message: z.string().min(1),
  }),
)
const { errors } = useForm({
  validationSchema,
})

const { value: message } = useField<string>('message', undefined, {
  syncVModel: true,
})
</script>

<template>
  <UiFormField v-auto-animate>
    <UiFormLabel required class="text-neutral-500 dark:text-neutral-400">
      {{ $t('workflow.node.settings.sections.message') }}
    </UiFormLabel>
    <UiTextarea v-model="message" class="shadow-none min-h-14 h-14 max-h-30 focus:ring-0 px-2" placeholder="Введите сообщение" />
    <UiFormMessage v-if="errors.message" :content="errors.message" />
  </UiFormField>
</template>
