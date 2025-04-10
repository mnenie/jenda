import { Extension } from '@tiptap/vue-3'
import { Plugin } from '@tiptap/pm/state'
import findColors from '../utils/colors'

export default function useHighlighter() {
  const colorHighlighter = Extension.create({
    name: 'colorHighlighter',
    addProseMirrorPlugins() {
      return [
        new Plugin({
          state: {
            init(_, { doc }) {
              return findColors(doc)
            },
            apply(transaction, oldState) {
              return transaction.docChanged ? findColors(transaction.doc) : oldState
            },
          },
          props: {
            decorations(state) {
              return this.getState(state)
            },
          },
        }),
      ]
    },
  })
  return {
    colorHighlighter,
  }
}
