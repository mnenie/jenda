export enum LayoutsEnum {
  default = 'default',
  auth = 'auth',
  welcome = 'welcome'
}

export const LayoutToFileMap: Record<LayoutsEnum, string> = {
  default: 'DefaultLayout.vue',
  auth: 'AuthLayout.vue',
  welcome: 'WelcomeLayout.vue'
};
