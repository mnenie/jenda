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

const props = defineProps<{
  todayAndDisabled?: boolean
}>()

const { t } = useI18n()
const locale = computed(() => {
  return getCurrentLocale.value
})

const df = new DateFormatter(locale.value, {
  dateStyle: 'long',
})

const dateValue = defineModel<DateValue>()

const pickerValue = computed(() => {
  if (props.todayAndDisabled) {
    return df.format(new Date())
  }
  return dateValue.value ? df.format(dateValue.value.toDate(getLocalTimeZone())) : t('kanban.column.tasks.forms.creating.timeLimit.placeholder')
})
</script>

<template>
  <UiPopover>
    <UiPopoverTrigger as-child>
      <UiButton
        :disabled="todayAndDisabled"
        variant="ghost"
        :class="cn(
          '!input-filled text-left w-full justify-start shadow-none justify-between',
          !dateValue && 'text-muted-foreground',
        )"
      >
        <div class="flex items-center gap-1">
          <Icon icon="hugeicons:calendar-02" class="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400" />
          <span class="fw400">{{ pickerValue }}</span>
        </div>
        <div
          v-if="dateValue !== undefined"
          style="pointer-events: auto"
          class="hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-md flex items-center justify-center w-5 h-5 transition-all"
          @click.stop="dateValue = undefined"
        >
          <Icon
            icon="hugeicons:cancel-01"
            class="w-3.6 h-3.6 text-neutral-500 dark:text-neutral-400 cursor-pointer"
          />
        </div>
      </UiButton>
    </UiPopoverTrigger>
    <UiPopoverContent class="w-full p-0">
      <UiCalendar v-model="dateValue" :is-date-disabled="(date) => date.toDate(getLocalTimeZone()) <= new Date" class="w-220px" />
    </UiPopoverContent>
  </UiPopover>
</template>
