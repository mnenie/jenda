import { Extension } from '@tiptap/vue-3'

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
