import { Extension } from '@tiptap/core'

export default function useConverter() {
  const smilieReplacer = Extension.create({
    name: 'smilieReplacer',
    addInputRules() {
      return [
        // TODO: add replacer array
      ]
    },
  })
  return {
    smilieReplacer,
  }
}
