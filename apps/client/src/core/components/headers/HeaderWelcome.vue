<script setup lang="ts">
import { computed } from 'vue'
import { useDark, useWindowSize } from '@vueuse/core'
import { useI18n } from 'vue-i18n'
import { headerLinks } from '../../constants/header'
import BurgerMenu from './BurgerMenu.vue'
import ThemeSwitcher from './system/ThemeSwitcher.vue'
import LanguageSelect from './system/LanguageSelect.vue'
import type { HeaderNavLink } from '../../types'
import { useScroll } from '@/shared/composables/scroll'
import { UiButton } from '@/shared/ui'

const isDark = useDark()

const { tm, t } = useI18n()

const iconUrl = computed(() => {
  return isDark.value ? '/icons/kanban-dark.png' : '/icons/kanban.png'
})

const links = computed(() => {
  const localeArr = tm('welcome.header.links') as HeaderNavLink[]
  return headerLinks.map((link, index) => ({
    ...link,
    name: localeArr[index],
  }))
})
const { scrollToEl } = useScroll(links.value.map(link => link.pagePrefix))
const { width } = useWindowSize()
</script>

<template>
  <header
    class="sticky top-0 z-50 flex flex-col self-center gap-10 max-w-1800px w-full px-4 py-3"
  >
    <slot name="offer" />
    <section class="flex items-center justify-between">
      <div class="flex items-center gap-2 select-none">
        <div
          v-if="width >= 1152"
          class="relative z-10 box bg-white border border-solid border-#e3e4e8 flex items-center py-0 pl-2.5 pr-3.5 h-40px rounded-lg
          dark:shadow-sm dark:bg-#313131 dark:border-neutral-700"
        >
          <div class="flex items-center gap-0.5">
            <a
              href="https://github.com/mnenie/jenda"
              target="_blank"
              class="flex items-center gap-1 cursor-pointer mr-2"
            >
              <img
                :src="iconUrl"
                class="w-22px h-22px"
              />
              <h3 class="text-xl fw-500">
                Jenda
              </h3>
            </a>
            <UiButton
              v-for="link in links"
              :key="link.id"
              variant="ghost"
              size="sm"
              class="text-neutral-500 fw500 hover:text-neutral-700 dark:text-neutral-400"
              @click="scrollToEl(link.pagePrefix)"
            >
              {{ link.name }}
            </UiButton>
          </div>
        </div>
        <a
          v-else
          href="https://github.com/mnenie/jenda"
          target="_blank"
          class="flex items-center gap-1 cursor-pointer mr-2"
        >
          <img
            :src="iconUrl"
            class="w-22px h-22px"
          />
          <h3 class="text-xl fw500">
            Jenda
          </h3>
        </a>
        <div class="flex items-center gap-1">
          <LanguageSelect />
          <div class="w-1px h-3.5 bg-neutral-200 dark:bg-neutral-700" />
          <ThemeSwitcher />
        </div>
      </div>
      <div v-if="width >= 1152" class="flex items-center gap-1.5 btns">
        <UiButton
          variant="ghost"
          size="lg"
          class="bg-main bg-transparent"
          style="font-weight: 500"
          @click="$router.push({ name: 'sign-in' })"
        >
          {{ t('welcome.header.login') }}
        </UiButton>
        <UiButton size="lg" @click="$router.push({ name: 'sign-up' })">
          {{ t('welcome.header.reg') }}
        </UiButton>
      </div>
      <BurgerMenu v-else />
    </section>
  </header>
</template>

<style scoped>
.box {
  box-shadow:
    0 12px 40px 0 rgba(0, 0, 0, 0.06),
    0 1px 0 0 rgba(0, 0, 0, 0.04);
}
</style>
