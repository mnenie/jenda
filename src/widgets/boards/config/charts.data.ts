import { shallowRef } from 'vue';
import type { Chart } from '@/entities/chart/model';
import { ActivityBoardChart, ActivityTaskChart } from '@/features/boards';

export const chartsData = shallowRef<Chart[]>([
  {
    id: '0',
    titleKeyI18n: 'title_boards',
    descriptionKeyI18n: 'description_boards',
    chart: ActivityBoardChart
  },
  {
    id: '1',
    titleKeyI18n: 'title_tasks',
    descriptionKeyI18n: 'description_tasks',
    chart: ActivityTaskChart
  }
]);
