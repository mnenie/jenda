import { withThemeByClassName } from '@storybook/addon-themes'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { themes } from '@storybook/theming'
import { useColorMode } from '@vueuse/core'
import type { Preview } from '@storybook/vue3'

import 'virtual:uno.css'
import '@unocss/reset/tailwind-compat.css'
import '@/app/styles/primary/index.css'

const preview: Preview = {
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
  ],
  parameters: {
    options: {
      storySort: (a, b) =>
        a.id === b.id
          ? 0
          : a.id.localeCompare(b.id, undefined, { numeric: true }),
    },
    layout: 'centered',
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'desktop',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.light,
    },
    backgrounds: {
      disable: true,
    },
  },
}

useColorMode({
  initialValue: 'light',
})

export default preview
