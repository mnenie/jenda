<script setup lang="ts">
import { computed } from 'vue'
import {
  DateFormatter,
  type DateValue,
  getLocalTimeZone,
} from '@internationalized/date'
import { Icon } from '@iconify/vue'
import { useI18n } from 'vue-i18n'
import { UiButton, UiCalendar, UiPopover, UiPopoverContent, UiPopoverTrigger } from '@/shared/ui'
import { cn } from '@/shared/libs/shadcn/utils'
import { getCurrentLocale } from '@/shared/libs/i18n/utils/getLocale'

const { t } = useI18n()
const locale = computed(() => {
  return getCurrentLocale.value
})

const df = new DateFormatter(locale.value, {
  dateStyle: 'long',
})

const dateValue = defineModel<DateValue>()

const pickerValue = computed(() => {
  return dateValue.value ? df.format(dateValue.value.toDate(getLocalTimeZone())) : t('kanban.column.tasks.forms.creating.timeLimit.placeholder')
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
      <UiCalendar v-model="dateValue" />
    </UiPopoverContent>
  </UiPopover>
</template>
