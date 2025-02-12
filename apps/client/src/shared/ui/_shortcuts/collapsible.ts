type CollapsiblePrefix = 'collapsible'

export const staticCollapsible: Record<`${CollapsiblePrefix}-${string}` | CollapsiblePrefix, string> = {
  'collapsible': '',
  'collapsible-content': 'overflow-hidden transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down',
}

export const collapsible = [
  staticCollapsible,
]
