import { defineAsyncComponent, shallowRef } from 'vue';
import type { Chart } from '@/entities/chart/model';

export const chartsData = shallowRef<Chart[]>([
  {
    id: '0',
    titleKeyI18n: 'title_boards',
    descriptionKeyI18n: 'description_boards',
    chart: defineAsyncComponent(() => import('@/features/boards/charts/ui/ActivityBoardChart.vue'))
  },
  {
    id: '1',
    titleKeyI18n: 'title_tasks',
    descriptionKeyI18n: 'description_tasks',
    chart: defineAsyncComponent(() => import('@/features/boards/charts/ui/ActivityTaskChart.vue'))
  }
]);
