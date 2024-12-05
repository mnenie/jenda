import { definePreset } from '@unocss/core'

export const presetDefaultToPx = definePreset(() => {
  return {
    name: 'default-to-px',
    rules: [
      [/^m-([.\d]+)$/, ([_, num]) => ({ margin: `${num}px` })],
      [/^p-([.\d]+)$/, ([_, num]) => ({ padding: `${num}px` })],
      [/^mx-([.\d]+)$/, ([_, num]) => ({ 'margin-left': `${num}px`, 'margin-right': `${num}px` })],
      [/^my-([.\d]+)$/, ([_, num]) => ({ 'margin-top': `${num}px`, 'margin-bottom': `${num}px` })],
      [/^px-([.\d]+)$/, ([_, num]) => ({ 'padding-left': `${num}px`, 'padding-right': `${num}px` })],
      [/^py-([.\d]+)$/, ([_, num]) => ({ 'padding-top': `${num}px`, 'padding-bottom': `${num}px` })],
      [/^w-([.\d]+)$/, ([_, num]) => ({ width: `${num}px` })],
      [/^h-([.\d]+)$/, ([_, num]) => ({ height: `${num}px` })],
      [/^max-w-([.\d]+)$/, ([_, num]) => ({ 'max-width': `${num}px` })],
      [/^max-h-([.\d]+)$/, ([_, num]) => ({ 'max-height': `${num}px` })],
      [/^gap-([.\d]+)$/, ([_, num]) => ({ gap: `${num}px` })],
    ],
  }
})
