type TabsPrefix = 'tabs'

export const staticTabs: Record<`${TabsPrefix}-${string}` | TabsPrefix, string> = {
  'tabs': '',
  'tabs-content': 'focus-visible:outline-none focus-visible:ring-0',
  'tabs-list': 'inline-flex items-center justify-center rounded-lg bg-neutral-100 h-9 2xl:h-8 border border-neutral-100 p-1 text-neutral-500 dark:(border-neutral-700/60 bg-neutral-800 text-neutral-400)',
  'tabs-trigger': 'inline-flex items-center bg-transparent justify-center whitespace-nowrap rounded-md py-0.5 px-1.5 2xl:px-2 text-default font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-neutral-950 data-[state=active]:shadow dark:(ring-offset-0 focus-visible:ring-0 data-[state=active]:bg-neutral-700/40 data-[state=active]:text-neutral-100)',
}

export const tabs = [
  staticTabs,
]
