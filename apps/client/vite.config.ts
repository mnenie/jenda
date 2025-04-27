import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { getNuxtStyleRouteName } from 'unplugin-vue-router-extend'
import UnpluginVueRouterExtend from 'unplugin-vue-router-extend/vite'
import UnpluginVueRouter from 'unplugin-vue-router/vite'
import { defineConfig, loadEnv } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import Sonda from 'sonda/vite'
import type { PluginOption } from 'vite'

// fix: uvr v0.11.2
const routeMap = new Map<string, any>()
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
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
      Sonda({
        enabled: !!env.BUILD_ANALYZER,
        format: 'html',
        filename: 'bundle-analyzer.html',
        gzip: true,
        // disable: not compatible with rolldown-vite
      }) as unknown as PluginOption,
      vue(),
    ],
    define: {
      __BUILD_ANALYZER__: JSON.stringify(env.BUILD_ANALYZER),
    },
    worker: {
      format: 'es',
    },
    build: {
      sourcemap: !!env.BUILD_ANALYZER,
    },
    css: {
      lightningcss: {
        errorRecovery: true,
      },
    },
    experimental: {
      enableNativePlugin: mode === 'development' ? false : 'resolver',
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }
})
