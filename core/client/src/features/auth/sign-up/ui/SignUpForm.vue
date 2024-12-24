<script setup lang="ts">
import { z } from '@/shared/libs/vee-validate'
import {
  UiButton,
  UiFormField,
  UiFormLabel,
  UiFormMessage,
  UiInput,
} from '@/shared/ui'
import { toTypedSchema } from '@vee-validate/zod'
import { createReusableTemplate } from '@vueuse/core'
import { useField, useForm } from 'vee-validate'
import { useRouter } from 'vue-router/auto'
import { toast } from 'vue-sonner'

const validationSchema = toTypedSchema(
  z.object({
    email: z.string().min(1).email(),
    password: z.string().min(8),
  }),
)

const { handleSubmit, errors } = useForm({
  validationSchema,
})
const { value: email } = useField<string>('email')
const { value: password } = useField<string>('password')

const router = useRouter()

const onRegistration = handleSubmit((values) => {
  toast.warning('Jenda in dev mode and temporarily unavailable')
  // on registration event
  router.push({ name: 'confirm' })
})

const [DefineTemplate, ReuseTemplate] = createReusableTemplate()
</script>

<template>
  <DefineTemplate v-slot="{ $slots, field, error }">
    <UiFormField v-auto-animate>
      <UiFormLabel
        :for="field"
      >
        {{ $t(`authentication.form.${field}`) }}
      </UiFormLabel>
      <component :is="$slots.default" />
      <UiFormMessage v-if="error" :content="error" />
    </UiFormField>
  </DefineTemplate>
  <form @submit.prevent="onRegistration">
    <div class="grid gap-6">
      <div class="grid gap-4">
        <ReuseTemplate field="email" :error="errors.email">
          <UiInput
            id="email"
            v-model="email"
            placeholder="user@example.com"
            type="email"
          />
        </ReuseTemplate>
        <ReuseTemplate field="password" :error="errors.password">
          <UiInput
            id="password"
            v-model="password"
            placeholder="user_password_example"
            type="password"
          />
        </ReuseTemplate>
      </div>
      <div class="grid gap-2">
        <UiButton type="submit">
          {{ $t('authentication.registration.btn') }}
        </UiButton>
        <p class="text-sm text-center select-none text-neutral-500 dark:text-neutral-300">
          {{ $t('authentication.registration.proposal') }}
          <span
            class="form-text-underline"
            @click="router.push({ name: 'sign-in' })"
          >
            {{ $t('authentication.registration.route') }}
          </span>
        </p>
      </div>
    </div>
  </form>
</template>
