import { describe, it, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import { defineComponent, h } from 'vue';
import '@/shared/lib/vitest-utils/cookiesI18n-mock';
import i18n from '@/shared/lib/i18n';
import ChartItem from '../ChartItem.vue';

const TestChartComponent = defineComponent({
  render() {
    return h('div', 'chart');
  }
});

describe('tests for ChartItem.vue ', () => {
  const wrapper = shallowMount(ChartItem, {
    global: {
      plugins: [i18n],
      mocks: {
        t: (key: string) => {
          const translations: Record<string, string> = {
            'boards.chart.test1': 'test chart title',
            'boards.chart.test2': 'test chart description'
          };
          return translations[key];
        }
      }
    },
    props: {
      chart: {
        id: 'test-chart',
        titleKeyI18n: 'test-title',
        descriptionKeyI18n: 'test-description',
        chart: TestChartComponent
      }
    }
  });

  it('should render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
