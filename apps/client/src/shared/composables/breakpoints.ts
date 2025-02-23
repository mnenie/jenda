import {
  type Breakpoints,
  breakpointsSematic,
  useBreakpoints as VueUseBreakpoints,
} from '@vueuse/core'

interface CustomBreakpoints extends Breakpoints {
  intermediateDesktop: string
  intermediateLaptop: string
}

export function useBreakpoints() {
  const breakpoints: CustomBreakpoints = {
    ...breakpointsSematic,
    intermediateDesktop: '1820px',
    intermediateLaptop: '1660px',
    laptop: '1600px',
  }

  const breakpointsInstance = VueUseBreakpoints(breakpoints, {
    strategy: 'max-width',
  })

  return {
    breakpoints: breakpointsInstance,
  }
}
