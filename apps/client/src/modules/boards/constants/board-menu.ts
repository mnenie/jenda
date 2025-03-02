interface MenuItem {
  value?: string
  shortcut: string
}

export const menuValues = [
  {
    value: 'background',
    shortcut: '⌥⌘P',
  },
  {
    value: 'labels',
    shortcut: '⌃⌘O',
  },
  {
    value: 'edit',
    shortcut: '⌥⌘E',
  },
  {
    value: 'delete',
    shortcut: '⌥⌘X',
  },
] satisfies MenuItem[]
