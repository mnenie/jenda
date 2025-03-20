<script setup lang="ts">
import { shallowRef } from 'vue'
import { toTypedSchema } from '@vee-validate/zod'
import { createReusableTemplate } from '@vueuse/core'
import { useField, useForm } from 'vee-validate'
import { storeToRefs } from 'pinia'
import { useBoardsStore } from '../../stores/boards'
import BoardName from './edit-sub/BoardName.vue'
import VisibilityTabs from './edit-sub/VisibilityTabs.vue'
import VisibleAlert from './edit-sub/VisibleAlert.vue'
import { UiButton, UiDialogClose, UiFormField, UiFormLabel, UiFormMessage } from '@/shared/ui'
import { z } from '@/shared/libs/vee-validate'

const emit = defineEmits < {
  (e: 'closeDialog'): void
}>()

const validationSchema = toTypedSchema(
  z.object({
    name: z.string().min(1).max(15),
  }),
)
const { handleSubmit, errors } = useForm({
  validationSchema,
})

const boardsStore = useBoardsStore()
const { board } = storeToRefs(boardsStore)

const { value: name } = useField<string>('name', {}, { initialValue: board.value.name })

const color = shallowRef<string>(board.value.color ?? '#ffffff')

const tabsValue = shallowRef()
const popoverModel = shallowRef(false)

const onEditBoard = handleSubmit((values) => {
  board.value = {
    ...board.value,
    name: values.name,
    color: color.value,
    visibility: tabsValue.value,
  }
  emit('closeDialog')
})

const [DefineTemplate, ReuseTemplate] = createReusableTemplate()
</script>

<template>
  <DefineTemplate v-slot="{ $slots, field, error }">
    <UiFormField v-auto-animate>
      <UiFormLabel
        :for="field"
      >
        {{ $t(`board.forms.edit.${field}.label`) }}
      </UiFormLabel>
      <component :is="$slots.default" />
      <UiFormMessage v-if="error" :content="error" />
    </UiFormField>
  </DefineTemplate>
  <div class="flex flex-col gap-8">
    <form @submit.prevent="onEditBoard">
      <div class="grid gap-6">
        <div class="grid gap-4">
          <ReuseTemplate field="name" :error="errors.name">
            <BoardName v-model:name="name" v-model:color="color" v-model:popover="popoverModel" />
          </ReuseTemplate>
          <ReuseTemplate field="visibility">
            <VisibilityTabs v-model:tabs="tabsValue" />
          </ReuseTemplate>
          <VisibleAlert />
        </div>
        <div class="flex items-center justify-end gap-3">
          <UiDialogClose as-child>
            <UiButton variant="secondary" type="button" class="px-4">
              {{ $t('board.forms.edit.btns', 1) }}
            </UiButton>
          </UiDialogClose>
          <UiButton variant="solid" type="submit" class="px-4">
            {{ $t('board.forms.edit.btns', 2) }}
          </UiButton>
        </div>
      </div>
    </form>
  </div>
</template>
