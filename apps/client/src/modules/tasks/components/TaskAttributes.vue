<script setup lang="ts">
import { ref, shallowRef } from 'vue'
import { createReusableTemplate } from '@vueuse/core'
import { Icon } from '@iconify/vue'
import { type DateValue, getLocalTimeZone, today } from '@internationalized/date'
import TaskTitle from './attributes/TaskTitle.vue'
import TaskLabels from './attributes/TaskLabels.vue'
import TaskEstimate from './attributes/TaskEstimate.vue'
import TaskUsers from './attributes/TaskUsers.vue'
import type { User } from '@/modules/auth/types'
import type { Label } from '@/modules/boards/types'
import TaskDatePicker from '@/modules/boards/components/forms/task-sub/TaskDatePicker.vue'
import { UiTextarea } from '@/shared/ui'
import { cn } from '@/shared/libs/shadcn/utils'

const title = shallowRef<string>('Add i18n support')
const users = ref<User[]>([{
  _id: '1',
  email: 'alex',
  photoUrl: 'https://avatars.githubusercontent.com/u/121057011?v=4',
}, {
  _id: '2',
  email: 'airat@gmail.com',
  photoUrl: 'https://avatars.githubusercontent.com/u/95149637?s=100&v=4',
}])
const timeLimit = shallowRef<DateValue>(today(getLocalTimeZone()))
const labels = ref<Label[]>([{
  id: '1',
  name: 'feature',
  color: '#00ff00',
}])
const estimate = ref<number>(4)
const description = ref<string>('Это описание задачи. Тебе надо ее выполнить или придет андрей романыч за тобой. Он обитает на СНТ Овод')

const [DifineTemplate, ReuseTemplate] = createReusableTemplate()
</script>

<template>
  <DifineTemplate v-slot="{ $slots, icon, field, containerClass }">
    <div :class="cn('flex gap-2 items-center', containerClass)">
      <div class="flex gap-2 items-center w-35%">
        <Icon :icon="icon" class="text-18px text-gray-500" />
        <span class="text-14px text-gray-500">{{ $t(`tasks.${field}.label`) }}</span>
      </div>
      <div class="flex gap-2 w-full self-start flex-wrap">
        <component :is="$slots.default" />
      </div>
    </div>
  </DifineTemplate>

  <TaskTitle v-model:title="title" />
  <div class="flex flex-col gap-5">
    <ReuseTemplate field="users" icon="hugeicons:user-multiple-03">
      <TaskUsers v-model:users="users" />
    </ReuseTemplate>
    <ReuseTemplate field="timeLimit" icon="hugeicons:calendar-02">
      <TaskDatePicker v-model="timeLimit" input-class="w-auto" no-icon />
    </ReuseTemplate>
    <ReuseTemplate field="labels" icon="hugeicons:label">
      <TaskLabels :labels="labels ?? []" @update:labels="labels = $event" />
    </ReuseTemplate>
    <ReuseTemplate field="estimate" icon="hugeicons:estimate-02">
      <TaskEstimate v-model:estimate="estimate" />
    </ReuseTemplate>
    <ReuseTemplate field="description" icon="hugeicons:text-align-justify-right" container-class="flex-col items-start gap-4">
      <UiTextarea v-model="description" :placeholder="$t('tasks.description.input_placeholder')" />
    </ReuseTemplate>
  </div>
</template>
