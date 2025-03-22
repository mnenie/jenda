<script setup lang="ts">
import { computed, ref, shallowRef, toValue } from 'vue'
import { toTypedSchema } from '@vee-validate/zod'
import { useField, useForm } from 'vee-validate'
import { toast } from 'vue-sonner'
import { createReusableTemplate } from '@vueuse/core'
import { useKanbanContext } from '../../../composables/kanban'
import AddUsersBox from './AddUsersBox.vue'
import AddLabelsBox from './AddLabelsBox.vue'
import DateFields from './DateFields.vue'
import type { Label, UserOption } from '../../../types'
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

const emit = defineEmits<{
  (e: 'close'): void
}>()

const validationSchema = toTypedSchema(
  z.object({
    title: z.string().min(1),
  }),
)

const { handleSubmit, errors } = useForm({
  validationSchema,
})
const { value: title } = useField<string>('title')

const timeLimit = shallowRef<DateValue>()

const users = ref<UserOption[]>([])

const creatorOrUsers = computed(() => {
  return users.value.length
    ? users.value
    : [
        { _id: 'creator', email: 'creator@mail.ru', photoUrl: 'https://avatars.githubusercontent.com/u/121057011?v=4' },
      ]
})

const labels = ref<Label[]>([])

const loading = shallowRef(false)

const { cards } = useKanbanContext()

const onAddTask = handleSubmit(async (values) => {
  loading.value = true
  await new Promise<void>(resolve => setTimeout(resolve, 2000))
  try {
    const newCard = {
      _id: Math.random().toString(),
      title: values.title,
      timeLimit: timeLimit.value,
      users: creatorOrUsers.value,
      labels: labels.value,
    }
    toValue(cards)?.push(newCard)
    emit('close')
    toast.success('success')
  }
  catch {
    toast.error('error')
  }
  finally {
    loading.value = false
  }
})

const [DefineTemplate, ReuseTemplate] = createReusableTemplate()

const mockUsers = [
  {
    _id: '1',
    email: 'alex@mail.ru',
    photoUrl: 'https://avatars.githubusercontent.com/u/121057011?v=4',
    role: 'admin',
  },
  {
    _id: '2',
    email: 'nick@mail.ru',
    photoUrl: 'https://avatars.githubusercontent.com/u/121338834?v=4',
    role: 'admin',
  },
  {
    _id: '3',
    email: 'nick3@mail.ru',
    photoUrl: 'https://avatars.githubusercontent.com/u/121338834?v=4',
    role: 'admin',
  },
  {
    _id: '4',
    email: 'nick4@mail.ru',
    photoUrl: 'https://avatars.githubusercontent.com/u/121338834?v=4',
    role: 'admin',
  },
  {
    _id: '5',
    email: 'nick5@mail.ru',
    photoUrl: 'https://avatars.githubusercontent.com/u/121338834?v=4',
  },
  {
    _id: '6',
    email: 'nick6@mail.ru',
    photoUrl: 'https://avatars.githubusercontent.com/u/121338834?v=4',
  },
  {
    _id: '7',
    email: 'nick7@mail.ru',
    photoUrl: 'https://avatars.githubusercontent.com/u/121338834?v=4',
  },
  {
    _id: '8',
    email: 'nick8@mail.ru',
    photoUrl: 'https://avatars.githubusercontent.com/u/121338834?v=4',
  },
  {
    _id: '9',
    email: 'nick9@mail.ru',
    photoUrl: 'https://avatars.githubusercontent.com/u/121338834?v=4',
  },
  {
    _id: '10',
    email: 'nick10@mail.ru',
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
  {
    id: '3',
    name: 'design',
    color: '#f472b6',
  },
  {
    id: '4',
    name: 'testing',
    color: '#34d399',
  },
  {
    id: '5',
    name: 'qa',
    color: '#a78bfa',
  },
  {
    id: '6',
    name: 'documentation',
    color: '#60a5fa',
  },
  {
    id: '7',
    name: 'management',
    color: '#f87171',
  },
  {
    id: '8',
    name: 'security',
    color: '#facc15',
  },
  {
    id: '9',
    name: 'devops',
    color: '#6b7280',
  },
  {
    id: '10',
    name: 'analytics',
    color: '#10b981',
  },
]
</script>

<template>
  <DefineTemplate v-slot="{ $slots, field, error }">
    <UiFormField class="mb-3 w-full">
      <UiFormLabel
        :for="field"
      >
        {{ $t(`kanban.column.tasks.forms.creating.${field}.label`) }}
      </UiFormLabel>
      <component :is="$slots.default" />
      <UiFormMessage v-if="error" :content="error" class="transition-all" />
    </UiFormField>
  </DefineTemplate>
  <form @submit.prevent="onAddTask">
    <ReuseTemplate field="title" :error="errors.title">
      <UiInput
        id="title"
        v-model="title"
        variant="filled"
        :placeholder="$t('kanban.column.tasks.forms.creating.title.placeholder')"
      />
    </ReuseTemplate>
    <DateFields v-model:limit="timeLimit" />
    <ReuseTemplate field="users">
      <div class="flex gap-2 flex-wrap w-full">
        <AddUsersBox id="users" v-model:users="users" :options="mockUsers" />
      </div>
    </ReuseTemplate>
    <ReuseTemplate field="labels">
      <div class="flex gap-2 flex-wrap w-full">
        <AddLabelsBox id="labels" v-model:labels="labels" :options="mockLabels" />
      </div>
    </ReuseTemplate>
    <UiDialogFooter class="sm:justify-end">
      <UiDialogClose as-child>
        <UiButton type="button" size="sm" variant="secondary">
          {{ $t('common.create.btns', 1) }}
        </UiButton>
      </UiDialogClose>
      <UiButton :loading type="submit" size="sm" variant="solid">
        {{ $t('common.create.btns', 2) }}
      </UiButton>
    </UiDialogFooter>
  </form>
</template>
