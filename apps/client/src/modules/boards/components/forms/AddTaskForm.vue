<script setup lang="ts">
import { ref } from 'vue'
import { toTypedSchema } from '@vee-validate/zod'
import { useField, useForm } from 'vee-validate'
import { toast } from 'vue-sonner'
import { createReusableTemplate } from '@vueuse/core'
import { Icon } from '@iconify/vue'
import { useI18n } from 'vue-i18n'
import { storeToRefs } from 'pinia'
import { useBoardsStore } from '../../stores/boards'
import AddUsersBox from './AddUsersBox.vue'
import TaskDatePicker from './TaskDatePicker.vue'
import AddLabelsBox from './AddLabelsBox.vue'
import type { Label, UserOption } from '../../types'
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

const props = defineProps<{
  columnId: string
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const boardsStore = useBoardsStore()
const { board } = storeToRefs(boardsStore)

const { t } = useI18n()

const validationSchema = toTypedSchema(
  z.object({
    title: z.string().min(1),
    timeLimit: z.any().refine(
      (val) => {
        if (!val)
          return true

        const today = new Date()
        today.setHours(0, 0, 0, 0)

        return val.toDate() >= today
      },
      {
        message: t('kanban.column.tasks.forms.creating.timeLimit.error'),
      },
    ),
  }),
)

const { handleSubmit, errors } = useForm({
  validationSchema,
})
const { value: title } = useField<string>('title')
const { value: timeLimit } = useField<DateValue | undefined>('timeLimit', undefined, {
  initialValue: undefined,
})
const users = ref<UserOption[]>([])
const labels = ref<Label[]>([])

const onAddTask = handleSubmit((values) => {
  try {
    const column = board.value.columns?.find(b => b._id === props.columnId)
    const columnCards = column?.cards

    const newCard = {
      _id: Math.random().toString(),
      title: values.title,
      timeLimit: values.timeLimit,
      users: users.value,
      labels: labels.value,
      // + maybe creator
    }
    columnCards?.push(newCard)

    emit('close')
  }
  catch {
    toast.error('error')
  }
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
  {
    _id: '3',
    email: 'nick3@mail.ru',
    photoUrl: 'https://avatars.githubusercontent.com/u/121338834?v=4',
  },
  {
    _id: '4',
    email: 'nick4@mail.ru',
    photoUrl: 'https://avatars.githubusercontent.com/u/121338834?v=4',
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
      <UiFormMessage v-if="error" :content="error" />
    </UiFormField>
  </DefineTemplate>
  <form @submit.prevent="onAddTask">
    <ReuseTemplate field="title" :error="errors.title">
      <UiInput
        id="title"
        v-model="title"
        :placeholder="$t('kanban.column.tasks.forms.creating.title.placeholder')"
      />
    </ReuseTemplate>
    <div class="flex gap-5 items-start">
      <UiFormField class="mb-3 w-full">
        <UiFormLabel>
          {{ $t(`kanban.column.tasks.forms.creating.timeLimit.creationDate`) }}
        </UiFormLabel>
        <div class="flex gap-2 items-center w-full">
          <TaskDatePicker :today-and-disabled="true" />
        </div>
      </UiFormField>
      <ReuseTemplate field="timeLimit" :error="errors.timeLimit">
        <div class="flex gap-2 items-center w-full">
          <TaskDatePicker id="timeLimit" v-model="timeLimit" />
          <Icon
            v-if="timeLimit !== undefined"
            icon="hugeicons:cancel-01"
            class="w-4 h-4 text-neutral-500 dark:text-neutral-400 cursor-pointer"
            @click="timeLimit = undefined"
          />
        </div>
      </ReuseTemplate>
    </div>
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
      <UiButton type="submit" size="sm" variant="solid">
        {{ $t('common.create.btns', 2) }}
      </UiButton>
    </UiDialogFooter>
  </form>
</template>
