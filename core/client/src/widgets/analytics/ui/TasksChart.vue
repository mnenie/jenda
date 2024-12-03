<script setup lang="ts">
import { type Chart, ChartItemWrapper } from '@/entities/chart'
import { useCharts } from '@/entities/chart/model/composables'
import { useDark } from '@vueuse/core'
import { computed, markRaw, ref } from 'vue'
import { VueUiDonut } from 'vue-data-ui'
import { useI18n } from 'vue-i18n'

const isDark = useDark()

const mainColor = computed(() => (isDark.value ? '#d4d4d8' : '#18181b'))

const { chartTasksValue } = useCharts()

const nameSize = computed(() => chartTasksValue.value - 4)

const config = computed(() => ({
  responsive: false,
  padding: 0,
  customPalette: [],
  useCssAnimation: true,
  useBlurOnHover: true,
  userOptions: {
    show: false,
  },
  style: {
    fontFamily: 'inherit',
    chart: {
      useGradient: false,
      backgroundColor: 'transparent',
      color: mainColor.value,
      layout: {
        labels: {
          dataLabels: {
            show: true,
            useLabelSlots: false,
            hideUnderValue: 3,
          },
          value: {
            rounding: 0,
            show: true,
            formatter: null,
          },
          percentage: {
            color: mainColor.value,
            bold: true,
            fontSize: chartTasksValue.value,
            rounding: 0,
            formatter: null,
          },
          name: {
            color: '#71717a',
            bold: false,
            fontSize: nameSize.value,
          },
          hollow: {
            show: false,
            total: {
              show: false,
            },
            average: {
              show: false,
            },
          },
        },
        donut: {
          strokeWidth: 64,
          borderWidth: 1,
          useShadow: false,
        },
      },
      comments: {
        show: false,
        showInTooltip: true,
      },
      legend: {
        show: false,
      },
      tooltip: {
        show: false,
      },
    },
  },
}))

const { tm } = useI18n()

const dataNames = computed(() => tm('analytics.charts.tasks.dataset.names') as string[])

const dataset = ref([
  {
    name: dataNames.value[0],
    values: [22],
    color: '#538BF3',
  },
  {
    name: dataNames.value[1],
    values: [10],
    color: '#d4d4d8',
  },
])

const chart = markRaw<Chart>({
  key: 'tasks',
  section: 'boards',
})
</script>

<template>
  <ChartItemWrapper :chart width="600px">
    <VueUiDonut :config="config" :dataset="dataset" style="padding-top: 0" />
  </ChartItemWrapper>
</template>
