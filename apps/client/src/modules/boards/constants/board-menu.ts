interface MenuItem {
  tPrefix: string
  shortcut: string
  select?: () => void
}

export const menuItems = [
  {
    tPrefix: 'edit',
    shortcut: '⌘⌃E',
  },
  {
    tPrefix: 'labels',
    shortcut: '⌘⌃L',
  },
  {
    tPrefix: 'background',
    shortcut: '⌘I',
  },
  {
    tPrefix: 'delete',
    shortcut: '⌘⌃B',
  },
] satisfies MenuItem[]
