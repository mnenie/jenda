<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useField, useForm } from 'vee-validate'
import { useRouter } from 'vue-router/auto'
import { toast } from 'vue-sonner'
import { z } from '@/shared/libs/vee-validate'
import { UiButton, UiFormField, UiFormMessage, UiPinInput, UiPinInputGroup, UiPinInputInput } from '@/shared/ui'

const formSchema = toTypedSchema(z.object({
  pin: z.array(z.coerce.string()).length(5),
}))

const { handleSubmit, setFieldValue, errors } = useForm({
  validationSchema: formSchema,
  initialValues: {
    pin: [],
  },
})

const { value: pin } = useField<string[]>('pin')

const router = useRouter()

const onConfirm = handleSubmit((values) => {
  router.push({ name: 'sign-up-workspace' })
})

function onResend() {
  toast.success('OTP has been sent to your email')
}
</script>

<template>
  <form @submit.prevent="onConfirm">
    <UiFormField v-auto-animate>
      <UiPinInput
        id="pin-input"
        v-model:model-value="pin"
        placeholder="○"
        class="flex gap-2 items-center mt-1 w-full"
        otp
        type="number"
        @update:model-value="(arrStr) => {
          setFieldValue('pin', arrStr.filter(Boolean))
        }"
      >
        <UiPinInputGroup>
          <UiPinInputInput
            v-for="(id, index) in 5"
            :key="id"
            :index="index"
          />
        </UiPinInputGroup>
      </UiPinInput>
      <UiFormMessage v-if="errors.pin" :content="errors.pin" />
    </UiFormField>
    <p class="text-sm text-neutral-500 dark:text-neutral-400 mt-2">
      {{ $t('authentication.form.otp') }}
    </p>
    <UiButton type="submit" class="w-full mt-4 mb-2">
      {{ $t('authentication.confirm.btn') }}
    </UiButton>
    <p
      class="text-sm text-center select-none text-neutral-500 dark:text-neutral-300"
      @click="onResend"
    >
      {{ $t('authentication.confirm.proposal') }}
      <span
        class="form-text-underline"
      >
        {{ $t('authentication.confirm.route') }}
      </span>
    </p>
  </form>
</template>
