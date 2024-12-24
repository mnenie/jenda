import type { TreeNode } from 'unplugin-vue-router'
import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { getNuxtStyleRouteName } from 'unplugin-vue-router-extend'
import UnpluginVueRouterExtend from 'unplugin-vue-router-extend/vite'
import UnpluginVueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

const routeMap = new Map<string, TreeNode>()
export default defineConfig({
  plugins: [
    UnpluginVueRouter({
      getRouteName: (node: TreeNode) => {
        if (!routeMap.size) {
          for (const [key, value] of (node.parent as any)?.map)
            routeMap.set(key, value)
        }
        return getNuxtStyleRouteName(node)
      },
      routesFolder: ['src/pages'],
      dts: './typed-router.d.ts',
    }),
    UnpluginVueRouterExtend({
      routeMap,
    }),
    vueDevTools(),
    UnoCSS(),
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
})
