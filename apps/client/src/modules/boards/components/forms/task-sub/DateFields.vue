<script setup lang="ts">
import { createReusableTemplate } from '@vueuse/core'
import TaskDatePicker from './TaskDatePicker.vue'
import type { DateValue } from '@internationalized/date'
import {
  UiFormField,
  UiFormLabel,
} from '@/shared/ui'

const timeLimit = defineModel<DateValue>('limit')

const [DefineTemplate, ReuseTemplate] = createReusableTemplate()
</script>

<template>
  <DefineTemplate v-slot="{ $slots, tPrefix }">
    <UiFormField class="mb-3 w-full">
      <UiFormLabel>
        {{ $t(`kanban.column.tasks.forms.creating.timeLimit.${tPrefix}`) }}
      </UiFormLabel>
      <component :is="$slots.default" />
    </UiFormField>
  </DefineTemplate>
  <div class="flex gap-3 items-start">
    <ReuseTemplate t-prefix="creationDate">
      <TaskDatePicker :today-and-disabled="true" />
    </ReuseTemplate>
    <ReuseTemplate t-prefix="label">
      <TaskDatePicker v-model="timeLimit" />
    </ReuseTemplate>
  </div>
</template>
