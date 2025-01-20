import { Extension } from '@tiptap/core'
import Suggestion from '@tiptap/suggestion'
import { nodeMenus } from '../../utils/menus'
import renderItem from './render'

export default Extension.create({
  name: 'slash',

  addOptions() {
    return {
      suggestion: {
        char: '/',
        // needs to be fixed (types)
        command: ({ editor, range, props }: any) => {
          props.command({ editor, range })
        },
      },
    }
  },

  addProseMirrorPlugins() {
    return [
      Suggestion({
        editor: this.editor,
        ...this.options.suggestion,
      }),
    ]
  },
}).configure({
  suggestion: {
    items: () => [
      ...nodeMenus,
    ],
    render: renderItem,
  },
})
