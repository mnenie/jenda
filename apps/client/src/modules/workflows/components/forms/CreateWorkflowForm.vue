<script setup lang="ts">
import { ref } from 'vue'
import { toTypedSchema } from '@vee-validate/zod'
import { createReusableTemplate } from '@vueuse/core'
import { useField, useForm } from 'vee-validate'
import { useRouter } from 'vue-router/auto'
import { useWorkflowsStore } from '../../stores/workflows'
import { UiButton, UiFormField, UiFormLabel, UiFormMessage, UiInput } from '@/shared/ui'
import { z } from '@/shared/libs/vee-validate'
import { UiTextarea } from '@/shared/ui/textarea'

const validationSchema = toTypedSchema(
  z.object({
    name: z.string().min(1).max(15),
  }),
)
const { handleSubmit, errors } = useForm({
  validationSchema,
})

const { value: name } = useField<string>('name')
const description = ref('')

const router = useRouter()
const workflowsStore = useWorkflowsStore()

const onWorkflowCreation = handleSubmit((values) => {
  router.push({ name: 'workflows-id', params: { id: '1' } })
})

const [DefineTemplate, ReuseTemplate] = createReusableTemplate()
</script>

<template>
  <DefineTemplate v-slot="{ $slots, field, error }">
    <UiFormField v-auto-animate>
      <UiFormLabel
        :for="field"
      >
        {{ $t(`workflows.forms.creating.${field}.label`) }}
      </UiFormLabel>
      <component :is="$slots.default" />
      <UiFormMessage v-if="error" :content="error" />
    </UiFormField>
  </DefineTemplate>
  <div class="flex flex-col gap-8">
    <form @submit.prevent="onWorkflowCreation">
      <div class="grid gap-6">
        <div class="grid gap-4">
          <ReuseTemplate field="name" :error="errors.name">
            <UiInput
              id="name"
              v-model="name"
              :placeholder="$t('workflows.forms.creating.name.placeholder')"
              class="shadow-none h-default focus:ring-0"
            />
          </ReuseTemplate>
          <ReuseTemplate field="description">
            <UiTextarea
              id="description"
              v-model="description"
              :placeholder="$t('workflows.forms.creating.description.placeholder')"
              class="shadow-none min-h-10 focus:ring-0"
            />
          </ReuseTemplate>
        </div>
        <div class="flex items-center justify-end gap-3">
          <UiButton
            variant="secondary"
            size="default"
            type="button"
            class="px-4"
            @click="router.back()"
          >
            {{ $t('workflows.forms.creating.btns', 1) }}
          </UiButton>
          <UiButton
            variant="solid"
            size="default"
            type="submit"
            class="px-4"
          >
            {{ $t('workflows.forms.creating.btns', 2) }}
          </UiButton>
        </div>
      </div>
    </form>
  </div>
</template>
