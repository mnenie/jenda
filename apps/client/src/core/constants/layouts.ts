import type { LayoutsEnum } from '@/shared/constants/layouts'

export const LayoutToFileMap: Record<LayoutsEnum, string> = {
  default: 'DefaultLayout.vue',
  auth: 'AuthLayout.vue',
  welcome: 'WelcomeLayout.vue',
  empty: 'EmptyLayout.vue',
}
