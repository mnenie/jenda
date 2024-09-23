import { computed, effectScope, onScopeDispose, watch } from 'vue';
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

    watch(
      [bgColor, tickColor],
      ([bg, tick], _) => {
        data.datasets[0].backgroundColor = bg;
        data.datasets[0].borderColor = bg;
        options.scales!.x!.ticks!.color = tick;
        options.scales!.y!.ticks!.color = tick;
        // @ts-expect-error missing type
        options.scales!.y!.border!.color = bg;
        // @ts-expect-error missing type
        options.scales!.x!.border!.color = bg;
      },
      { immediate: true }
    );
  });

  onScopeDispose(() => {
    scope.stop();
  });
}
