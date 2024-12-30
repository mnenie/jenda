<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { createReusableTemplate } from '@vueuse/core'
import { useField, useForm } from 'vee-validate'
import { useRouter } from 'vue-router/auto'
import { z } from '@/shared/libs/vee-validate'
import { UiButton, UiFormField, UiFormLabel, UiFormMessage, UiInput } from '@/shared/ui'

const validationSchema = toTypedSchema(
  z.object({
    name: z.string().min(1).max(15),
    url: z.string().min(3),
  }),
)

const { handleSubmit, errors } = useForm({
  validationSchema,
})
const { value: name } = useField<string>('name')
const { value: url } = useField<string>('url')

const router = useRouter()

const onWorkspaceCreation = handleSubmit((values) => {
  // on registration event
  router.push({ name: 'boards' })
})

const [DefineTemplate, ReuseTemplate] = createReusableTemplate()
</script>

<template>
  <DefineTemplate v-slot="{ $slots, field, error }">
    <UiFormField v-auto-animate>
      <UiFormLabel
        :for="field"
      >
        {{ $t(`authentication.workspace.creating.form.${field}.label`) }}
      </UiFormLabel>
      <component :is="$slots.default" />
      <UiFormMessage v-if="error" :content="error" />
    </UiFormField>
  </DefineTemplate>
  <form @submit.prevent="onWorkspaceCreation">
    <div class="grid gap-6">
      <div class="grid gap-4">
        <ReuseTemplate field="name" :error="errors.name">
          <UiInput
            id="name"
            v-model="name"
            :placeholder="$t('authentication.workspace.creating.form.name.placeholder')"
          />
        </ReuseTemplate>
        <ReuseTemplate field="url" :error="errors.url">
          <div class="relative w-full h-9 flex items-center">
            <span class="text-sm pb-0.5px text-neutral-500 absolute left-3">workpaces/</span>
            <UiInput id="url" v-model="url" class="pl-22" type="text" />
          </div>
        </ReuseTemplate>
      </div>
      <UiButton type="submit">
        {{ $t('authentication.workspace.route') }}
      </UiButton>
    </div>
  </form>
</template>
