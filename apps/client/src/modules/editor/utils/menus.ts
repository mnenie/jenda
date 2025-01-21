import type { Editor } from '@tiptap/vue-3'

interface CommandProps {
  editor: Editor
  range?: any
}

function handleCommand({ editor, range }: any) {
  if (range) {
    return editor.chain().focus().deleteRange(range)
  }
  else {
    return editor.chain().focus()
  }
}

const handleHeadingCommand = (props: CommandProps, level: number) => handleCommand(props).toggleHeading({ level }).run()

const isActive = (editor: any, type: string | Record<string, unknown>) => editor.isActive(type)

const isHeadingActive = (editor: any, level: number) => editor.isActive('heading', { level })

export const nodeMenus = [
  {
    key: 'paragraph',
    icon: 'mdi:format-paragraph',
    command: (props: CommandProps) => handleCommand(props).toggleNode('paragraph', 'paragraph').run(),
    isActive: (editor: any) => isActive(editor, 'paragraph'),
  },
  {
    key: 'heading1',
    icon: 'hugeicons:heading-01',
    command: (props: CommandProps) => handleHeadingCommand(props, 1),
    isActive: (editor: any) => isHeadingActive(editor, 1),
  },
  {
    key: 'heading2',
    icon: 'hugeicons:heading-02',
    command: (props: CommandProps) => handleHeadingCommand(props, 2),
    isActive: (editor: any) => isHeadingActive(editor, 2),
  },
  {
    key: 'heading3',
    icon: 'hugeicons:heading-03',
    command: (props: CommandProps) => handleHeadingCommand(props, 3),
    isActive: (editor: any) => isHeadingActive(editor, 3),
  },
  {
    key: 'blockquote',
    icon: 'mdi:format-quote-close',
    command: (props: CommandProps) => handleCommand(props).toggleBlockquote().run(),
    isActive: (editor: any) => isActive(editor, 'blockquote'),
  },
  {
    key: 'alignLeft',
    icon: 'hugeicons:text-align-left',
    command: (props: CommandProps) => handleCommand(props).setTextAlign('left').run(),
    isActive: (editor: any) => isActive(editor, { textAlign: 'left' }),
  },
  {
    key: 'alignCenter',
    icon: 'hugeicons:text-align-center',
    command: (props: CommandProps) => handleCommand(props).setTextAlign('center').run(),
    isActive: (editor: any) => isActive(editor, { textAlign: 'center' }),
  },
  {
    key: 'alignRight',
    icon: 'hugeicons:text-align-right',
    command: (props: CommandProps) => handleCommand(props).setTextAlign('right').run(),
    isActive: (editor: any) => isActive(editor, { textAlign: 'right' }),
  },
  {
    key: 'bulletList',
    icon: 'mdi:format-list-bulleted',
    command: (props: CommandProps) => handleCommand(props).toggleBulletList().run(),
    isActive: (editor: any) => isActive(editor, 'bulletList'),
  },
  {
    key: 'orderedList',
    icon: 'mdi:format-list-numbered',
    command: (props: CommandProps) => handleCommand(props).toggleOrderedList().run(),
    isActive: (editor: any) => isActive(editor, 'orderedList'),
  },
  {
    key: 'taskList',
    icon: 'mdi:format-list-checks',
    command: (props: CommandProps) => handleCommand(props).toggleTaskList().run(),
    isActive: (editor: any) => isActive(editor, 'taskList'),
  },
]
