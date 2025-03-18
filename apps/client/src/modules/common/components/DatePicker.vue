<script setup lang="ts">
import { computed } from 'vue'
import {
  DateFormatter,
  type DateValue,
  getLocalTimeZone,
} from '@internationalized/date'
import { Icon } from '@iconify/vue'
import { Calendar, UiButton, UiPopover, UiPopoverContent, UiPopoverTrigger } from '@/shared/ui'
import { cn } from '@/shared/libs/shadcn/utils'

const df = new DateFormatter('en-US', {
  dateStyle: 'long',
})

const dateValue = defineModel<DateValue>()

const pickerValue = computed(() => {
  return dateValue.value ? df.format(dateValue.value.toDate(getLocalTimeZone())) : 'Выбрать дату'
})
</script>

<template>
  <UiPopover>
    <UiPopoverTrigger as-child>
      <UiButton
        variant="outline"
        :class="cn(
          'text-left font-normal',
          !dateValue && 'text-muted-foreground',
        )"
      >
        <Icon icon="hugeicons:calendar-02" class="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400" />
        {{ pickerValue }}
      </UiButton>
    </UiPopoverTrigger>
    <UiPopoverContent class="w-auto p-0">
      <Calendar v-model="dateValue" />
    </UiPopoverContent>
  </UiPopover>
</template>
