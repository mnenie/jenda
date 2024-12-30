<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { createReusableTemplate } from '@vueuse/core'
import { useField, useForm } from 'vee-validate'
import { toast } from 'vue-sonner'
import { useRouter } from 'vue-router/auto'
import {
  UiButton,
  UiFormField,
  UiFormLabel,
  UiFormMessage,
  UiInput,
} from '@/shared/ui'
import { z } from '@/shared/libs/vee-validate'

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
const { value: password } = useField<string | number>('password')

const router = useRouter()

const onLogin = handleSubmit((values) => {
  // on login event
  toast.warning('Jenda in dev mode and temporarily unavailable')
  router.push({ name: 'sign-in-workspace' })
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
  <form @submit.prevent="onLogin">
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
          {{ $t('authentication.login.btn') }}
        </UiButton>
        <p class="text-sm text-center select-none text-neutral-500 dark:text-neutral-300">
          {{ $t('authentication.login.proposal') }}
          <span
            class="cursor-pointer underline underline-offset-4 duration-100 ease-in hover:text-neutral-900 dark:hover:text-neutral-400"
            @click="$router.push({ name: 'sign-up' })"
          >
            {{ $t('authentication.login.route') }}
          </span>
        </p>
      </div>
    </div>
  </form>
</template>
