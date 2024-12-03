<script setup lang="ts">
import { type Chart, ChartItemWrapper } from '@/entities/chart'
import { useCharts } from '@/entities/chart/model/composables'
import { useDark } from '@vueuse/core'
import { computed, markRaw, ref } from 'vue'
import { VueUiSparkHistogram } from 'vue-data-ui'

const isDark = useDark()

const valuesColor = computed(() => (isDark.value ? '#a1a1aa' : '#52525b'))

const { chartOnlineInWorkspaceValue } = useCharts()

const timeLabels = computed(() => chartOnlineInWorkspaceValue.value - 1)

const config = computed(() => ({
  style: {
    backgroundColor: 'transparent',
    animation: { show: true, speedMs: 437 },
    layout: { height: 60, width: 646, padding: { top: 15, right: 0, bottom: 18, left: 0 } },
    bars: {
      shape: 'square' as
      | 'square'
      | 'circle'
      | 'triangle'
      | 'diamond'
      | 'pentagon'
      | 'hexagon'
      | 'star'
      | undefined,
      strokeWidth: 0,
      colors: { positive: '#538BF3', gradient: { show: false } },
      borderRadius: 24,
      gap: 12,
    },
    labels: {
      value: {
        fontSize: chartOnlineInWorkspaceValue.value,
        color: valuesColor.value,
        bold: false,
        rounding: 1,
        prefix: '',
        suffix: '',
        offsetY: 0,
        formatter: null,
      },
      timeLabel: { fontSize: timeLabels.value, color: valuesColor.value, bold: false },
    },
    selector: { stroke: '#52525b', strokeWidth: 0, strokeDasharray: 3, borderRadius: 2 },
  },
}))

const dataset = ref([
  { value: 12, timeLabel: 'Jan', intensity: 1 },
  { value: 2, timeLabel: 'Feb', intensity: 1 },
  { value: 9, timeLabel: 'Mar', intensity: 1 },
  { value: 9, timeLabel: 'Apr', intensity: 1 },
  { value: 5, timeLabel: 'May', intensity: 1 },
  { value: 10, timeLabel: 'Jun', intensity: 1 },
  { value: 4, timeLabel: 'Jul', intensity: 1 },
  { value: 5, timeLabel: 'Aug', intensity: 1 },
  { value: 10, timeLabel: 'Sep', intensity: 1 },
  { value: 10, timeLabel: 'Oct', intensity: 1 },
  { value: 8, timeLabel: 'Nov', intensity: 1 },
  { value: 2, timeLabel: 'Dec', intensity: 1 },
])

const chart = markRaw<Chart>({
  key: 'online',
  section: 'workspace',
})
</script>

<template>
  <ChartItemWrapper :chart width="100%">
    <VueUiSparkHistogram :config="config" :dataset="dataset" />
  </ChartItemWrapper>
</template>
