import { useBreakpoints, useExpanded } from "@/shared/lib/composables";
import { computed } from "vue";

export function useCharts() {
  const { breakpoints } = useBreakpoints();

  const expanded = useExpanded();
  const { isExpanded } = expanded.getExpanded();

  const isBetweenIntermediateDesktopAnd4K = breakpoints.between(
    "intermediateDesktop",
    "desktop4K",
  ).value;

  const chartOnlineInWorkspaceValue = computed(() => {
    if (isBetweenIntermediateDesktopAnd4K) {
      return isExpanded.value ? 7.7 : 6.5;
    }
    return isExpanded.value ? 10 : 8;
  });

  const chartBoardsValue = computed(() => {
    if (isBetweenIntermediateDesktopAnd4K) {
      return isExpanded.value ? 10 : 9;
    }
    return isExpanded.value ? 13 : 11;
  });

  const chartTasksValue = computed(() =>
    isBetweenIntermediateDesktopAnd4K ? 14 : 18,
  );

  return {
    chartOnlineInWorkspaceValue,
    chartBoardsValue,
    chartTasksValue,
  };
}
