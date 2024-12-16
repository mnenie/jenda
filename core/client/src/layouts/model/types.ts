export enum LayoutsEnum {
  default = 'default',
  auth = 'auth',
  welcome = 'welcome',
  empty = 'empty',
}

export const LayoutToFileMap: Record<LayoutsEnum, string> = {
  default: 'DefaultLayout.vue',
  auth: 'AuthLayout.vue',
  welcome: 'WelcomeLayout.vue',
  empty: 'EmptyLayout.vue',
}
