<script lang="ts" setup>
import { computed, markRaw, ref } from 'vue'
import { useWindowSize } from '@vueuse/core'
import { VueUiKpi } from 'vue-data-ui'
import { type Chart, ChartItemWrapper } from '@/entities/chart'
import { useBreakpoints } from '@/shared/composables'

const { width } = useWindowSize()

const { breakpoints } = useBreakpoints()

const chartHeight = computed(() => {
  if (breakpoints.between('intermediateLaptop', 'intermediateDesktop').value) {
    return '120px'
  }
  return '80px'
})
const fontSizeChart = computed(() => (width.value >= 1500 ? 30 : 25))

const config = computed(() => ({
  animationFrames: 40,
  animationValueStart: 0,
  prefix: '~',
  useAnimation: true,
  valueBold: true,
  valueFontSize: fontSizeChart.value,
  valueRounding: 0,
  formatter: null,
}))

const dataset = ref(20)

const chart = markRaw<Chart>({
  key: 'users',
  section: 'workspace',
})
</script>

<template>
  <ChartItemWrapper :chart width="600px" :height="chartHeight">
    <VueUiKpi :config="config" :dataset="dataset" />
  </ChartItemWrapper>
</template>
