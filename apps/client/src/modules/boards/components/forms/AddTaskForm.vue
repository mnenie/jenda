<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useField, useForm } from 'vee-validate'
import { toast } from 'vue-sonner'
import { createReusableTemplate } from '@vueuse/core'
import { Icon } from '@iconify/vue'
import VisibleLabels from '../additions/VisibleLabels.vue'
import AddUsersBtn from './AddUsersBtn.vue'
import AddLabelsBtn from './AddLabelsBtn.vue'
import type { User } from '@/modules/auth/types'
import type { Label } from '../../types'
import type { DateValue } from '@internationalized/date'
import {
  UiButton,
  UiDialogClose,
  UiDialogFooter,
  UiFormField,
  UiFormLabel,
  UiFormMessage,
  UiInput,
} from '@/shared/ui'
import { z } from '@/shared/libs/vee-validate'
import DatePicker from '@/modules/common/components/DatePicker.vue'
import UserAvatars from '@/modules/common/components/UserAvatars.vue'

export type UserOption = Pick<User, '_id' | 'email' | 'photoUrl'>

const emit = defineEmits<{
  (e: 'close'): void
}>()

const validationSchema = toTypedSchema(
  z.object({
    title: z.string().min(1),
    timeLimit: z.date().optional(),
    users: z.array(
      z.object({
        _id: z.string(),
        email: z.string().email(),
        photoUrl: z.string().url().optional(),
      }),
    ).optional(),
    labels: z.array(
      z.object({
        id: z.string(),
        name: z.string(),
        color: z.string(),
      }),
    ).optional(),
  }),
)

const { handleSubmit, errors } = useForm({
  validationSchema,
})
const { value: title } = useField<string>('title')
const { value: timeLimit } = useField<DateValue | undefined>('timeLimit', undefined, {
  initialValue: undefined,
})
const { value: users } = useField<UserOption[]>('users', [], {
  initialValue: [],
})
const { value: labels } = useField<Label[]>('labels', [], {
  initialValue: [],
})

const onAddTask = handleSubmit((values) => {
  const userEmails = values.users?.map(user => user.email).join(', ') || '[]'
  const userLabels = values.labels?.map(user => user.name).join(', ') || '[]'

  toast.success(`
    title: ${values.title};
    timeLimit: ${values.timeLimit};
    users emails: ${userEmails};
    labels: ${userLabels};
  `)

  emit('close')
})

const [DefineTemplate, ReuseTemplate] = createReusableTemplate()

const mockUsers = [
  {
    _id: '1',
    email: 'alex@mail.ru',
    photoUrl: 'https://avatars.githubusercontent.com/u/121057011?v=4',
  },
  {
    _id: '2',
    email: 'nick@mail.ru',
    photoUrl: 'https://avatars.githubusercontent.com/u/121338834?v=4',
  },
]
const mockLabels = [
  {
    id: '1',
    name: 'frontend',
    color: '#dbeafe',
  },
  {
    id: '2',
    name: 'backend',
    color: '#fca326',
  },
]
</script>

<template>
  <DefineTemplate v-slot="{ $slots, field, error }">
    <UiFormField class="mb-3">
      <UiFormLabel
        :for="field"
      >
        {{ field }}
      </UiFormLabel>
      <component :is="$slots.default" />
      <UiFormMessage v-if="error" :content="error" />
    </UiFormField>
  </DefineTemplate>
  <form @submit.prevent="onAddTask">
    <ReuseTemplate field="title" :error="errors.title">
      <UiInput
        id="title"
        v-model="title"
        placeholder="Придумайте задачу"
      />
    </ReuseTemplate>
    <ReuseTemplate field="timeLimit" :error="errors.timeLimit">
      <div class="flex gap-2 items-center">
        <DatePicker id="timeLimit" v-model="timeLimit" />
        <Icon
          v-if="timeLimit !== undefined"
          icon="hugeicons:delete-02"
          class="w-4 h-4 text-neutral-500 dark:text-neutral-400 cursor-pointer"
          @click="timeLimit = undefined"
        />
      </div>
    </ReuseTemplate>
    <ReuseTemplate field="users" :error="errors.users">
      <div class="flex gap-2 items-center">
        <AddUsersBtn id="users" v-model="users" :options="mockUsers" />
        <UserAvatars
          v-if="users.length > 0"
          :users="users"
          :max="3"
          avatar="w-6 h-6"
          class="mr-2"
        />
      </div>
    </ReuseTemplate>
    <ReuseTemplate field="labels" :error="errors.labels">
      <div class="flex gap-2 items-center">
        <AddLabelsBtn id="labels" v-model="labels" :options="mockLabels" />
        <VisibleLabels
          v-if="labels.length > 0"
          :labels="labels"
          :max="3"
          class="mr-2"
        />
      </div>
    </ReuseTemplate>
    <UiDialogFooter class="sm:justify-end">
      <UiDialogClose as-child>
        <UiButton type="button" size="sm" variant="secondary">
          Закрыть
        </UiButton>
      </UiDialogClose>
      <UiButton type="submit" size="sm" variant="solid">
        Создать
      </UiButton>
    </UiDialogFooter>
  </form>
</template>
