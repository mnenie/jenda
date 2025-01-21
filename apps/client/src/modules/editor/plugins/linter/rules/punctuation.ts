import LinterPlugin from '../plugin'

export class Punctuation extends LinterPlugin {
  public regex = / ([,.!?:]) ?/g

  scan() {
    this.doc.descendants((node, position) => {
      if (!node.isText) {
        return
      }
      if (!node.text) {
        return
      }

      let match = null
      do {
        match = this.regex.exec(node.text)
        if (match) {
          this.record(
            'error with punctuation',
            position + match.index,
            position + match.index + match[0].length,
          )
        }
      } while (match !== null)
    })

    return this
  }
}
