<script setup lang="ts">
import { UiButton, UiPinInput, UiPinInputGroup, UiPinInputInput } from '@/shared/ui'
import { toTypedSchema } from '@vee-validate/zod'
import { useField, useForm } from 'vee-validate'
import { useRouter } from 'vue-router/auto'
import { toast } from 'vue-sonner'
import { z } from 'zod'

const formSchema = toTypedSchema(z.object({
  pin: z.array(z.coerce.string()).length(5, { message: 'Invalid pin' }),
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
  router.push({ name: 'workspace' })
})

function onResend() {
  toast.success('OTP has been sent to your email')
}
</script>

<template>
  <form @submit.prevent="onConfirm">
    <div v-auto-animate class="form-field">
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
      <span
        v-if="errors.pin"
        class="text-xs text-red-500 !fw500"
      >
        {{ errors.pin }}
      </span>
    </div>
    <p class="text-sm text-neutral-400 mt-2">
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
        class="cursor-pointer underline underline-offset-4 duration-100 ease-in hover:text-neutral-900 dark:hover:text-neutral-400"
      >
        {{ $t('authentication.confirm.route') }}
      </span>
    </p>
  </form>
</template>
