<script setup lang="ts">
import { ref } from 'vue'
import { toTypedSchema } from '@vee-validate/zod'
import { createReusableTemplate } from '@vueuse/core'
import { useField, useForm } from 'vee-validate'
import { useRouter } from 'vue-router/auto'
import { useBoardsStore } from '../../stores/board'
import TagsChooser from './TagsChooser.vue'
import type { Label } from '../../types'
import { UiAlert, UiButton, UiFormField, UiFormLabel, UiFormMessage, UiInput } from '@/shared/ui'
import { z } from '@/shared/libs/vee-validate'

const validationSchema = toTypedSchema(
  z.object({
    name: z.string().min(1).max(15),
  }),
)
const { handleSubmit, errors } = useForm({
  validationSchema,
})

const labels = ref<Label[]>([])
const { value: name } = useField<string>('name')

const router = useRouter()
const boardsStore = useBoardsStore()

const onBoardCreation = handleSubmit((values) => {
  boardsStore.addBoard({
    _id: Math.random().toString(),
    name: values.name,
    labels: labels.value,
    status: 'active',
    estimate: 0,
    users: [],
    date: '12.12.2024',
  })
  router.push({ name: 'boards' })
})

const [DefineTemplate, ReuseTemplate] = createReusableTemplate()
</script>

<template>
  <DefineTemplate v-slot="{ $slots, field, error }">
    <UiFormField v-auto-animate>
      <UiFormLabel
        :for="field"
      >
        {{ $t(`boards.forms.creating.${field}.label`) }}
      </UiFormLabel>
      <component :is="$slots.default" />
      <UiFormMessage v-if="error" :content="error" />
    </UiFormField>
  </DefineTemplate>
  <div class="flex flex-col gap-8">
    <form @submit.prevent="onBoardCreation">
      <div class="grid gap-6">
        <div class="grid gap-4">
          <ReuseTemplate field="name" :error="errors.name">
            <UiInput
              id="name"
              v-model="name"
              :placeholder="$t('authentication.workspace.creating.form.name.placeholder')"
              class="shadow-none focus:ring-0"
            />
          </ReuseTemplate>
          <UiAlert
            variant="warning"
            :content="$t('boards.forms.creating.labels.alert')"
            class="mt-3 mb-1"
          />
          <ReuseTemplate field="labels">
            <TagsChooser id="labels" v-model="labels" />
            <span class="text-xs text-neutral-500">
              {{ $t('boards.forms.creating.labels.description') }}
            </span>
          </ReuseTemplate>
        </div>
        <div class="flex items-center justify-end gap-3">
          <UiButton
            variant="secondary"
            size="sm"
            type="button"
            @click="router.back()"
          >
            {{ $t('boards.forms.creating.btns', 1) }}
          </UiButton>
          <UiButton
            variant="solid"
            size="sm"
            type="submit"
          >
            {{ $t('boards.forms.creating.btns', 2) }}
          </UiButton>
        </div>
      </div>
    </form>
  </div>
</template>
