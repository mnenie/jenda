import { Extension, textInputRule } from '@tiptap/vue-3'

export default function useConverter() {
  const smilieReplacer = Extension.create({
    name: 'smilieReplacer',
    addInputRules() {
      return [
        textInputRule({ find: /-___- $/, replace: '😑 ' }),
        textInputRule({ find: /:'-\) $/, replace: '😂 ' }),
        textInputRule({ find: /':-\) $/, replace: '😅 ' }),
        textInputRule({ find: /':-D $/, replace: '😅 ' }),
        textInputRule({ find: />:-\) $/, replace: '😆 ' }),
        textInputRule({ find: /-__- $/, replace: '😑 ' }),
        textInputRule({ find: /':-\( $/, replace: '😓 ' }),
        textInputRule({ find: /:'-\( $/, replace: '😢 ' }),
        textInputRule({ find: />:-\( $/, replace: '😠 ' }),
        textInputRule({ find: /O:-\) $/, replace: '😇 ' }),
        textInputRule({ find: /:'\) $/, replace: '😂 ' }),
        textInputRule({ find: /:-D $/, replace: '😃 ' }),
        textInputRule({ find: /':D $/, replace: '😅 ' }),
        textInputRule({ find: />:\) $/, replace: '😆 ' }),
        textInputRule({ find: /;-\) $/, replace: '😉 ' }),
        textInputRule({ find: /8-D $/, replace: '😎 ' }),
        textInputRule({ find: /:-\* $/, replace: '😘 ' }),
        textInputRule({ find: /:-\) $/, replace: '🙂 ' }),
        textInputRule({ find: /x-p $/, replace: '😜 ' }),
        textInputRule({ find: /':\( $/, replace: '😓 ' }),
        textInputRule({ find: /:-. $/, replace: '😕 ' }),
        textInputRule({ find: /:'\( $/, replace: '😢 ' }),
        textInputRule({ find: /X-\) $/, replace: '😵 ' }),
        textInputRule({ find: />:\( $/, replace: '😠 ' }),
        textInputRule({ find: /<\/3 $/, replace: '💔 ' }),
        textInputRule({ find: /:D $/, replace: '😃 ' }),
        textInputRule({ find: /;D $/, replace: '😉 ' }),
        textInputRule({ find: /:\* $/, replace: '😘 ' }),
        textInputRule({ find: /:\) $/, replace: '🙂 ' }),
        textInputRule({ find: /:X $/, replace: '😶 ' }),
        textInputRule({ find: /:o $/, replace: '😮 ' }),
        textInputRule({ find: /:P $/, replace: '😛 ' }),
        textInputRule({ find: /=L $/, replace: '😕 ' }),
        textInputRule({ find: /:\( $/, replace: '😞 ' }),
        textInputRule({ find: /;\( $/, replace: '😢 ' }),
        textInputRule({ find: /D: $/, replace: '😨 ' }),
        textInputRule({ find: /:\$ $/, replace: '😳 ' }),
        textInputRule({ find: /X\) $/, replace: '😵 ' }),
        textInputRule({ find: /:@ $/, replace: '😠 ' }),
        textInputRule({ find: /<3 $/, replace: '❤️ ' }),
      ]
    },
  })
  return {
    smilieReplacer,
  }
}
