<script setup lang="ts">
import { computed, shallowRef, toValue } from 'vue'
import { toast } from 'vue-sonner'
import { z } from 'zod'
import { toTypedSchema } from '@vee-validate/zod'
import { useField, useForm } from 'vee-validate'
import { useI18n } from 'vue-i18n'
import { storeToRefs } from 'pinia'
import { useKanbanContext } from '../../composables/kanban'
import { useBoardsStore } from '../../stores/boards'
import { UiButton, UiDialogClose, UiDialogFooter, UiFormField, UiFormLabel, UiFormMessage, UiInput } from '@/shared/ui'

const emit = defineEmits<{
  (e: 'close'): void
}>()

const loading = shallowRef(false)

const boardsStore = useBoardsStore()
const { board } = storeToRefs(boardsStore)

const { t } = useI18n()

const { cards, id, currentLimit } = useKanbanContext()
const tasksCount = computed(() => toValue(cards).length)

const validationSchema = computed(() => toTypedSchema(
  z.object({
    limit: z.coerce.number()
      .min(tasksCount.value, t('kanban.column.forms.settingLimit.errors.min', { count: tasksCount.value }))
      .max(100, t('kanban.column.forms.settingLimit.errors.max')),
  }),
))

const { handleSubmit, errors } = useForm({
  validationSchema,
})

const { value: limit } = useField<number>('limit', {}, { initialValue: currentLimit })

const setColumnLimit = handleSubmit(async (values) => {
  loading.value = true
  await new Promise<void>(resolve => setTimeout(resolve, 500))
  try {
    const column = board.value.columns?.find(column => column._id === id)
    column!.limit = values.limit

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
  <form @submit.prevent="setColumnLimit">
    <UiFormField class="mb-3 w-full">
      <UiFormLabel
        for="limit"
      >
        {{ $t('kanban.column.forms.settingLimit.limit.label') }}
      </UiFormLabel>
      <UiInput
        id="limit"
        v-model="limit"
        type="number"
        variant="filled"
        :placeholder="$t('kanban.column.forms.settingLimit.limit.placeholder')"
      />
      <UiFormMessage v-if="errors.limit" :content="errors.limit" class="transition-all" />
    </UiFormField>
    <UiDialogFooter class="sm:justify-end mt-7">
      <UiDialogClose as-child>
        <UiButton type="button" size="sm" variant="secondary">
          {{ $t('common.edit.btns', 1) }}
        </UiButton>
      </UiDialogClose>
      <UiButton :loading type="submit" size="sm" variant="solid">
        {{ $t('common.edit.btns', 2) }}
      </UiButton>
    </UiDialogFooter>
  </form>
</template>
