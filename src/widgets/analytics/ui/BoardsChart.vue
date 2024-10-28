<script setup lang="ts">
import { computed, markRaw, ref } from 'vue';
import { useDark } from '@vueuse/core';
import { VueUiStackbar } from 'vue-data-ui';
import { ChartItemWrapper, type Chart } from '@/entities/chart';

const isDark = useDark();

const valuesColor = computed(() => (isDark.value ? '#a1a1aa' : '#52525b'));
const gridColor = computed(() => (isDark.value ? '#3f3f46' : '#f4f4f5'));

// @ts-ignore
const config = computed<any>(() => ({
  responsive: false,
  customPalette: [],
  useCssAnimation: true,
  orientation: 'vertical',
  table: {
    show: false
  },
  userOptions: {
    show: false
  },
  style: {
    chart: {
      backgroundColor: 'transparent',
      color: '#538BF3',
      height: 300,
      width: 800,
      padding: { top: 20, right: 36, bottom: 20, left: 36 },
      title: {
        text: '',
        color: '#1A1A1A',
        fontSize: 20,
        bold: true,
        textAlign: 'center',
        paddingLeft: 0,
        paddingRight: 0,
        subtitle: { color: '#A1A1A1', text: '', fontSize: 16, bold: false }
      },
      legend: { show: false, bold: false, backgroundColor: '#FFFFFF', color: '#1A1A1A', fontSize: 14 },
      zoom: { show: false, color: '#CCCCCC', highlightColor: '#4A4A4A', fontSize: 14, useResetSlot: false },
      tooltip: {
        show: false
      },
      highlighter: { color: '#1A1A1A', opacity: '5' },
      bars: {
        gapRatio: '0.5',
        distributed: false,
        showDistributedPercentage: true,
        borderRadius: 0,
        strokeWidth: 1,
        gradient: { show: false, intensity: '0' },
        totalValues: { show: false, offsetY: 0, fontSize: 16, bold: false, color: '#1A1A1A' },
        dataLabels: {
          show: false,
          adaptColorToBackground: true,
          color: '#1A1A1A',
          fontSize: 14,
          bold: false,
          rounding: 0,
          prefix: '',
          suffix: '',
          formatter: null
        }
      },
      grid: {
        scale: { ticks: '10' },
        x: {
          showAxis: false,
          showHorizontalLines: true,
          axisColor: gridColor.value,
          axisThickness: 2,
          axisName: { show: false, text: 'X axis', fontSize: 12, color: '#1A1A1A', bold: false, offsetY: 0 },
          timeLabels: {
            show: true,
            values: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            offsetY: 0,
            rotation: 0,
            fontSize: 9,
            color: valuesColor.value,
            bold: false
          }
        },
        y: {
          showAxis: false,
          showVerticalLines: false,
          axisColor: '#E1E5E8',
          axisThickness: 2,
          axisName: { show: false, text: 'Y axis', fontSize: 12, color: '#1A1A1A', bold: false, offsetX: 0 },
          axisLabels: { show: true, color: valuesColor.value, fontSize: 10, bold: false }
        }
      }
    }
  }
}));

const dataset = ref([{ name: 'Series 1', series: [5, 2, 10, 2, 1, 5, 5, 9, 7, 3, 1, 4], color: '#538BF3' }]);

const chart = markRaw<Chart>({
  key: 'boards',
  section: 'workspace'
});
</script>

<template>
  <ChartItemWrapper :chart width="100%">
    <VueUiStackbar :config="config" :dataset="dataset" />
  </ChartItemWrapper>
</template>
