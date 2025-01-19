import LinterPlugin from '../plugin'

export class SingleH1 extends LinterPlugin {
  scan() {
    let h1Count = 0
    this.doc.descendants((node, position) => {
      if (node.type.name === 'heading' && node.attrs.level === 1) {
        h1Count++
        if (h1Count > 1) {
          this.record(
            'multiple h1 tags (!)',
            position,
            position + node.nodeSize,
          )
        }
      }
    })
    return this
  }
}
