<script setup lang="ts">
import { UiButton, UiInput } from '@/shared/ui'
import { toTypedSchema } from '@vee-validate/zod'
import { useField, useForm } from 'vee-validate'
import { toast } from 'vue-sonner'
import { z } from 'zod'

const validationSchema = toTypedSchema(
  z.object({
    email: z
      .string({ required_error: 'Email is a required field' })
      .nonempty('Email is a required field')
      .email('Email must be a valid'),
    password: z
      .string({ required_error: 'Password is a required field' })
      .nonempty('Password is a required field')
      .min(8, 'Password must be at least 8 characters'),
  }),
)

const { handleSubmit, errors } = useForm({
  validationSchema,
})
const { value: email } = useField<string>('email')
const { value: password } = useField<string | number>('password')

const onLogin = handleSubmit((values) => {
  // on login event
  toast.warning('Jenda in dev mode and temporarily unavailable')
})
</script>

<template>
  <form @submit.prevent="onLogin">
    <div class="grid gap-6">
      <div class="grid gap-4">
        <div v-auto-animate class="form-field">
          <label
            class="form-label"
            for="email"
          >
            {{ $t('authentication.form.email') }}
          </label>
          <UiInput id="email" v-model="email" placeholder="user@example.com" type="email" />
          <span
            v-if="errors.email"
            class="text-xs text-red-500 !fw500"
          >
            {{ errors.email }}
          </span>
        </div>
        <div v-auto-animate class="form-field">
          <label
            class="form-label"
            for="password"
          >
            {{ $t('authentication.form.password') }}
          </label>
          <UiInput id="password" v-model="password" placeholder="user_password_example" type="password" />
          <span
            v-if="errors.password"
            class="text-xs text-red-500 !fw500"
          >
            {{ errors.password }}
          </span>
        </div>
      </div>
      <div class="grid gap-2">
        <UiButton type="submit">
          {{ $t('authentication.login.btn') }}
        </UiButton>
        <p class="text-sm text-center select-none text-neutral-500 dark:text-neutral-300">
          {{ $t('authentication.login.proposal') }}
          <span
            class="cursor-pointer underline underline-offset-4 duration-100 ease-in hover:text-neutral-900 dark:hover:text-neutral-400"
            @click="$router.push('/auth/sign-up')"
          >
            {{ $t('authentication.login.route') }}
          </span>
        </p>
      </div>
    </div>
  </form>
</template>
