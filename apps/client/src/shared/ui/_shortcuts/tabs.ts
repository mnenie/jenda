type TabsPrefix = 'tabs'

export const staticTabs: Record<`${TabsPrefix}-${string}` | TabsPrefix, string> = {
  'tabs': '',
  'tabs-content': 'focus-visible:outline-none focus-visible:ring-0',
  'tabs-list': 'inline-flex items-center justify-center rounded-lg bg-neutral-100 h-9 2xl:h-8 border border-neutral-100 p-1 text-neutral-500 dark:(border-neutral-700/60 bg-neutral-800 text-neutral-400)',
  'tabs-trigger': 'inline-flex items-center bg-transparent justify-center whitespace-nowrap rounded-md py-0.5 px-1.5 2xl:px-2 text-default font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-neutral-950 data-[state=active]:shadow dark:(ring-offset-0 focus-visible:ring-0 data-[state=active]:bg-neutral-700/40 data-[state=active]:text-neutral-100)',
  'tabs-list-primary': 'relative shrink-0 flex border-b border-neutral-200 dark:border-neutral-700',
  'tabs-primary': 'flex flex-col w-full',
  'tabs-indicator': 'absolute px-4 left-px h-2px bottom-0 w-[--radix-tabs-indicator-size] translate-x-[--radix-tabs-indicator-position] translate-y-[1px] rounded-full transition-[width,transform] duration-200',
  'tabs-trigger-primary': 'bg-white px-5 text-default h-40px flex items-center justify-center leading-none select-none rounded-tl-md outline-none cursor-default focus-visible:relative focus-visible:shadow-[0_0_0_2px] focus-visible:shadow-black dark:bg-neutral-800 dark:text-neutral-200',
}

export const tabs = [
  staticTabs,
]
