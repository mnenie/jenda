<script lang="ts" setup>
import { computed, type HTMLAttributes } from 'vue'
import { CalendarRoot, type CalendarRootEmits, type CalendarRootProps, useForwardPropsEmits } from 'radix-vue'
import { UiCalendarCell, UiCalendarCellTrigger, UiCalendarGrid, UiCalendarGridBody, UiCalendarGridHead, UiCalendarGridRow, UiCalendarHeadCell, UiCalendarHeader, UiCalendarHeading, UiCalendarNextButton, UiCalendarPrevButton } from '.'
import { cn } from '@/shared/libs/shadcn/utils'

const props = defineProps<CalendarRootProps & { class?: HTMLAttributes['class'] }>()

const emits = defineEmits<CalendarRootEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <CalendarRoot
    v-slot="{ grid, weekDays }"
    :class="cn('p-3', props.class)"
    v-bind="forwarded"
  >
    <UiCalendarHeader>
      <UiCalendarPrevButton />
      <UiCalendarHeading />
      <UiCalendarNextButton />
    </UiCalendarHeader>

    <div class="flex flex-col gap-y-4 mt-4 sm:flex-row sm:gap-x-4 sm:gap-y-0">
      <UiCalendarGrid v-for="month in grid" :key="month.value.toString()">
        <UiCalendarGridHead>
          <UiCalendarGridRow>
            <UiCalendarHeadCell
              v-for="day in weekDays"
              :key="day"
            >
              {{ day }}
            </UiCalendarHeadCell>
          </UiCalendarGridRow>
        </UiCalendarGridHead>
        <UiCalendarGridBody>
          <UiCalendarGridRow v-for="(weekDates, index) in month.rows" :key="`weekDate-${index}`" class="mt-2 w-full">
            <UiCalendarCell
              v-for="weekDate in weekDates"
              :key="weekDate.toString()"
              :date="weekDate"
            >
              <UiCalendarCellTrigger
                :day="weekDate"
                :month="month.value"
              />
            </UiCalendarCell>
          </UiCalendarGridRow>
        </UiCalendarGridBody>
      </UiCalendarGrid>
    </div>
  </CalendarRoot>
</template>
