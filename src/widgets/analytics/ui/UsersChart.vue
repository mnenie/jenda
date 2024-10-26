<script lang="ts" setup>
import { ChartItemWrapper, type Chart } from '@/entities/chart';
import { ref, shallowReactive } from 'vue';
import { VueUiKpi } from 'vue-data-ui';

const config = ref({
  animationFrames: 40,
  animationValueStart: 0,
  prefix: '~',
  useAnimation: true,
  valueBold: true,
  valueFontSize: 30,
  valueRounding: 0,
  formatter: null
});

const dataset = ref(20);

const chart = shallowReactive<Chart>({
  key: 'users',
  section: 'workspace',
  config: config.value,
  dataset: dataset.value
});
</script>

<template>
  <ChartItemWrapper :chart>
    <VueUiKpi :config="chart.config" :dataset="chart.dataset" />
  </ChartItemWrapper>
</template>
