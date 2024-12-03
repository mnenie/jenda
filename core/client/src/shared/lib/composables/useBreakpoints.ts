import {
  type Breakpoints,
  breakpointsSematic,
  useBreakpoints as VueUseBreakpoints,
} from "@vueuse/core";

interface CustomBreakpoints extends Breakpoints {
  intermediateDesktop: string;
  intermediateLaptop: string;
}

export function useBreakpoints() {
  const breakpoints: CustomBreakpoints = {
    ...breakpointsSematic,
    intermediateDesktop: "1820px",
    intermediateLaptop: "1600px",
  };

  const breakpointsInstance = VueUseBreakpoints(breakpoints);

  return {
    breakpoints: breakpointsInstance,
  };
}
