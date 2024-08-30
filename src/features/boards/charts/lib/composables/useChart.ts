import { computed, effectScope, onScopeDispose, watchEffect } from 'vue';
import { useDark } from '@vueuse/core';
import type { ChartData, ChartOptions } from 'chart.js';

export default function useChart(data: ChartData, options: ChartOptions) {
  const isDark = useDark();

  const scope = effectScope();

  scope.run(() => {
    const bgColor = computed(() => {
      return isDark.value ? 'rgba(64, 64, 64, 0.9)' : 'rgb(228 228 231)';
    });
    const tickColor = computed(() => {
      return isDark.value ? 'rgb(163 163 163)' : 'rgb(82 82 82)';
    });

    watchEffect(() => {
      data.datasets[0].backgroundColor = bgColor.value;
      data.datasets[0].borderColor = bgColor.value;
      options.scales!.x!.ticks!.color = tickColor.value;
      options.scales!.y!.ticks!.color = tickColor.value;
      // @ts-expect-error missing type
      options.scales!.y!.border!.color = bgColor.value;
      // @ts-expect-error missing type
      options.scales!.x!.border!.color = bgColor.value;
    });
  });

  onScopeDispose(() => {
    scope.stop();
  });
}
