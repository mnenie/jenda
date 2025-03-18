<script setup lang="ts">
import { ref, watch } from 'vue'
import {
  DateFormatter,
  type DateValue,
  getLocalTimeZone,
} from '@internationalized/date'
import { Icon } from '@iconify/vue'
import { UiButton, UiCalendar, UiPopover, UiPopoverContent, UiPopoverTrigger } from '@/shared/ui'
import { cn } from '@/shared/libs/shadcn/utils'

const emit = defineEmits<{
  (e: 'update:modelValue', value: Date): void
}>()

const df = new DateFormatter('en-US', {
  dateStyle: 'long',
})

const value = ref<DateValue>()

watch(value, (newValue) => {
  if (newValue) {
    emit('update:modelValue', newValue.toDate(getLocalTimeZone()))
  }
})
</script>

<template>
  <UiPopover>
    <UiPopoverTrigger as-child>
      <UiButton
        variant="outline"
        :class="cn(
          'text-left font-normal',
          !value && 'text-muted-foreground',
        )"
      >
        <Icon icon="hugeicons:calendar-02" class="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400" />
        {{ value ? df.format(value.toDate(getLocalTimeZone())) : "Выбрать дату" }}
      </UiButton>
    </UiPopoverTrigger>
    <UiPopoverContent class="w-auto p-0">
      <UiCalendar v-model="value" />
    </UiPopoverContent>
  </UiPopover>
</template>
