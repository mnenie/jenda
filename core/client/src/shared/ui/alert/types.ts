export type AlertVariant = 'default' | 'success' | 'warning' | 'important'

export interface VariantChilds {
  light: {
    background: string
    border: string
  }
  dark: {
    background: string
    border: string
  }
}
