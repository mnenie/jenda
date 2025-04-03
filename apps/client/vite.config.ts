import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { getNuxtStyleRouteName } from 'unplugin-vue-router-extend'
import UnpluginVueRouterExtend from 'unplugin-vue-router-extend/vite'
import UnpluginVueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
// import Sonda from 'sonda/vite'

// fix: uvr v0.11.2
const routeMap = new Map<string, any>()
export default defineConfig({
  plugins: [
    UnpluginVueRouter({
      getRouteName: (node: any) => {
        if (!routeMap.size) {
          for (const [key, value] of (node.parent as any)?.map)
            routeMap.set(key, value)
        }
        return getNuxtStyleRouteName(node)
      },
      routesFolder: [
        './src/modules/auth/pages',
        './src/modules/members/pages',
        './src/modules/workflows/pages',
        './src/modules/boards/pages',
        './src/modules/tasks/pages',
        './src/modules/workspace/pages',
        './src/modules/notes/pages',
        './src/modules/settings/pages',
        './src/modules/templates/pages',
        './src/modules/welcome/pages',
        './src/core/pages',
      ],
      dts: './typed-router.d.ts',
    }),
    UnpluginVueRouterExtend({
      routeMap,
    }),
    vueDevTools(),
    UnoCSS(),
    ViteImageOptimizer({
      include: [
        '@/shared/assets/**/*.{png,jpg,jpeg,webp,svg}',
        'public/**/*.{png,jpg,jpeg,webp,svg}',
      ],
    }),
    // Sonda(),
    vue(),
  ],
  build: {
    // only with sonda active
    // sourcemap: true,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
