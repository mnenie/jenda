<script setup lang="ts">
import { computed, markRaw, ref } from 'vue';
import { useDark } from '@vueuse/core';
import { VueUiDonut } from 'vue-data-ui';
import { ChartItemWrapper, type Chart } from '@/entities/chart';

const isDark = useDark();

const mainColor = computed(() => isDark.value ? '#d4d4d8' : '#18181b')

const config = computed(() => ({
  responsive: false,
  padding: 0,
  customPalette: [],
  useCssAnimation: true,
  useBlurOnHover: true,
  userOptions: {
    show: false
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
            hideUnderValue: 3
          },
          value: {
            rounding: 0,
            show: true,
            formatter: null
          },
          percentage: {
            color: mainColor.value,
            bold: true,
            fontSize: 12,
            rounding: 0,
            formatter: null
          },
          name: {
            color: '#71717a',
            bold: false,
            fontSize: 12
          },
          hollow: {
            show: false,
            total: {
              show: false,
            },
            average: {
              show: false
            }
          }
        },
        donut: {
          strokeWidth: 64,
          borderWidth: 1,
          useShadow: false,
        }
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
      }
    }
  }
}));

const dataset = ref([
  {
    name: 'Выполненные',
    values: [22],
    color: '#538BF3'
  },
  {
    name: 'Невыполненные',
    values: [10],
    color: '#d4d4d8'
  }
]);

const chart = markRaw<Chart>({
  key: 'tasks',
  section: 'boards',
});
</script>

<template>
  <ChartItemWrapper :chart width="600px">
    <VueUiDonut :config="config" :dataset="dataset" style="padding-top: 0;" />
  </ChartItemWrapper>
</template>
