<script setup lang="ts">
import { UiButton, UiInput } from '@/shared/ui'
import { toTypedSchema } from '@vee-validate/zod'
import { useField, useForm } from 'vee-validate'
import { useRouter } from 'vue-router/auto'
import { z } from 'zod'

const validationSchema = toTypedSchema(
  z.object({
    name: z
      .string({ required_error: 'Name is a required field' })
      .nonempty('Name is a required field'),
    link: z
      .string({ required_error: 'Link is a required field' })
      .nonempty('Link is a required field')
      .min(3, 'Link must be at least 3 characters'),
  }),
)

const { handleSubmit, errors } = useForm({
  validationSchema,
})
const { value: name } = useField<string>('name')
const { value: link } = useField<string>('link')

const router = useRouter()

const onWorkspaceCreation = handleSubmit((values) => {
  // on registration event
  router.push({ name: 'boards' })
})
</script>

<template>
  <form @submit.prevent="onWorkspaceCreation">
    <div class="grid gap-6">
      <div class="grid gap-4">
        <div v-auto-animate class="form-field">
          <label
            class="form-label"
            for="name"
          >
            {{ $t('authentication.workspace.form.name.label') }}
          </label>
          <UiInput
            id="name"
            v-model="name"
            :placeholder="$t('authentication.workspace.form.name.placeholder')"
          />
          <span
            v-if="errors.name"
            class="text-xs text-red-500 !fw500"
          >
            {{ errors.name }}
          </span>
        </div>
        <div v-auto-animate class="form-field">
          <label
            class="form-label"
            for="link"
          >
            {{ $t('authentication.workspace.form.link.label') }}
          </label>
          <div class="relative w-full h-9 flex items-center">
            <span class="text-sm pb-0.5px text-neutral-500 absolute left-3">workpaces/</span>
            <UiInput id="link" v-model="link" class="pl-89px" type="text" />
          </div>
          <span
            v-if="errors.link"
            class="text-xs text-red-500 !fw500"
          >
            {{ errors.link }}
          </span>
        </div>
      </div>
      <UiButton type="submit">
        {{ $t('authentication.workspace.route') }}
      </UiButton>
    </div>
  </form>
</template>
