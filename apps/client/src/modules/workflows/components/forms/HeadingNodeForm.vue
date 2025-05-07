<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { createReusableTemplate } from '@vueuse/core'
import { useField, useForm } from 'vee-validate'
import type { PickerNode } from '../../types'
import { UiFormField, UiFormLabel, UiFormMessage, UiInput, UiTextarea } from '@/shared/ui'
import { z } from '@/shared/libs/vee-validate'

const props = defineProps<{
  node: PickerNode
}>()

const validationSchema = toTypedSchema(
  z.object({
    name: z.string().min(1).max(15),
    description: z.string().min(1).max(200),
  }),
)
const { errors } = useForm({
  validationSchema,
  initialValues: {
    name: props.node.data.title,
    description: props.node.data.description,
  },
})

const { value: name } = useField<string>('name')
const { value: description } = useField<string>('description')

const [DefineTemplate, ReuseTemplate] = createReusableTemplate()
</script>

<template>
  <DefineTemplate v-slot="{ $slots, field, error }">
    <UiFormField v-auto-animate class="w-full">
      <UiFormLabel
        :for="field"
        required
        class="text-neutral-500 dark:text-neutral-400"
      >
        {{ $t(`workflow.node.settings.heading.${field}.label`) }}
      </UiFormLabel>
      <component :is="$slots.default" />
      <UiFormMessage v-if="error" :content="error" />
    </UiFormField>
  </DefineTemplate>
  <div class="flex flex-col w-full mb-6">
    <div class="grid gap-2">
      <p class="text-default fw500 mb-0.5">
        {{ $t('workflow.node.settings.heading.title') }}
      </p>
      <ReuseTemplate field="name" :error="errors.name">
        <UiInput
          id="name"
          v-model="name"
          :placeholder="$t('workflow.node.settings.heading.name.placeholder')"
          class="shadow-none focus:ring-0 px-2"
        />
      </ReuseTemplate>
      <ReuseTemplate field="description" :error="errors.description">
        <UiTextarea
          id="description"
          v-model="description"
          :placeholder="$t('workflow.node.settings.heading.description.placeholder')"
          class="shadow-none min-h-11 h-11 max-h-30 focus:ring-0 px-2"
        />
      </ReuseTemplate>
    </div>
  </div>
</template>
