<script setup lang="ts">
import { nextTick, useTemplateRef, watch } from 'vue'
import { toTypedSchema } from '@vee-validate/zod'
import { configure, useField, useForm } from 'vee-validate'
import { useI18n } from 'vue-i18n'
import { z } from '@/shared/libs/vee-validate'
import { UiFormField, UiFormLabel, UiFormMessage, UiTextarea } from '@/shared/ui'

defineProps<{
  modelValue: string
}>()

configure({
  validateOnInput: true,
})

const errorMessage = useTemplateRef<typeof UiFormMessage | null>('message')

const { t } = useI18n()

const validationSchema = toTypedSchema(
  z.object({
    body: z.string().refine(
      async (value) => {
        try {
          JSON.parse(value)
          return true
        }
        catch {
          return false
        }
      },
      {
        message: t('workflow.node.settings.request_body.error'),
      },
    ),
  }),
)

const { errors } = useForm({
  validationSchema,
})

const { value: body } = useField<string>('body', undefined, {
  syncVModel: true,
})

watch(errorMessage, async (message) => {
  await nextTick()
  message?.scrollToMessage()
}, { flush: 'post' })
</script>

<template>
  <UiFormField v-auto-animate class="w-full">
    <UiFormLabel
      for="body"
      class="text-neutral-500 dark:text-neutral-400"
    >
      <span>HTTP body</span>
    </UiFormLabel>
    <UiTextarea v-model="body" class="w-full h-full shadow-none focus:ring-0" />
    <span class="text-small text-neutral-500 dark:text-neutral-400 mt--1">
      {{ t('workflow.node.settings.request_body.description', 1) }}
      <a href="https://github.com/mnenie/jenda" target="_blank" class="text-blue-500 underline">
        {{ t('workflow.node.settings.request_body.description', 2) }}
      </a>
    </span>
    <UiFormMessage v-if="errors.body" ref="message" :content="errors.body" />
  </UiFormField>
</template>
