<script setup lang="ts">
import { computed, ref, shallowRef } from 'vue'
import { toTypedSchema } from '@vee-validate/zod'
import { useField, useForm } from 'vee-validate'
import { toast } from 'vue-sonner'
import { createReusableTemplate } from '@vueuse/core'
import { storeToRefs } from 'pinia'
import { useKanbanContext } from '../../composables/kanban'
import { useBoardsStore } from '../../stores/boards'
import AddUsersBox from './task-sub/AddUsersBox.vue'
import AddLabelsBox from './task-sub/AddLabelsBox.vue'
import DateFields from './task-sub/DateFields.vue'
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

const boardStore = useBoardsStore()
const { board } = storeToRefs(boardStore)

const loading = shallowRef(false)

const { cards } = useKanbanContext()

const [DefineTemplate, ReuseTemplate] = createReusableTemplate()

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
    cards.value?.push(newCard)
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
        <AddUsersBox id="users" v-model:users="users" :options="board.users" />
      </div>
    </ReuseTemplate>
    <ReuseTemplate field="labels">
      <div class="flex gap-2 flex-wrap w-full">
        <AddLabelsBox id="labels" v-model:labels="labels" :options="board.labels" />
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
