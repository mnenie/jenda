<script setup lang="ts">
import type { Options } from '@/shared/ui/select/types'
import type { HeaderNavLink } from '../../model'
import { BurgerMenu } from '@/features/menu'
import { RouteNames } from '@/shared/config/consts'
import { useLanguage, useScroll } from '@/shared/lib/composables'
import { redirect } from '@/shared/lib/helpers'
import { UiButton, UiSelect } from '@/shared/ui'
import { useDark, useToggle, useWindowSize } from '@vueuse/core'
import { computed, ref, shallowReactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { headerLinks } from '../../model'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const { tm, t } = useI18n()

const iconUrl = computed(() => {
  return isDark.value ? '/icons/kanban-dark.png' : '/icons/kanban.png'
})

const languages = shallowReactive<Options[]>([
  { name: 'EN', value: 'en-US' },
  { name: 'RU', value: 'ru-RU' },
  { name: 'ZH', value: 'zh-CN' },
])
const language = ref('')

useLanguage(languages, language)

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
    class="fixed top-0 left-0 right-0 z-50 flex flex-col self-center gap-10 max-w-1800px w-full px-4 py-3
    max-[1152px]:max-w-1064px max-[992px]:max-w-900px"
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
            <div
              class="flex items-center gap-1 cursor-pointer mr-2"
              @click="redirect('https://github.com/mnenie/jenda')"
            >
              <img
                :src="iconUrl"
                class="w-22px h-22px"
              />
              <h3 class="text-xl">
                Jenda
              </h3>
            </div>
            <UiButton
              v-for="link in links"
              :key="link.id"
              variant="ghost"
              size="sm"
              class="text-neutral-500 font-medium hover:text-neutral-700 dark:text-neutral-400 dark:hover:!bg-neutral-700"
              @click="scrollToEl(link.pagePrefix)"
            >
              {{ link.name }}
            </UiButton>
          </div>
        </div>
        <div
          v-else
          class="flex items-center gap-1 cursor-pointer mr-2"
          @click="redirect('https://github.com/mnenie/jenda')"
        >
          <img
            :src="iconUrl"
            class="w-22px h-22px"
          />
          <h3 class="text-xl">
            Jenda
          </h3>
        </div>
        <div class="flex items-center gap-1">
          <UiSelect v-model="language" :options="languages" as="btn">
            <div i-hugeicons-globe-02 text-base />
          </UiSelect>
          <div class="w-1px h-3.5 bg-neutral-200 dark:bg-neutral-700" />
          <UiButton
            variant="ghost"
            size="sm"
            class="p-2 gap-1 text-neutral-400 hover:text-neutral-700 dark:!text-neutral-400 dark:hover:!text-neutral-200"
            @click="toggleDark()"
          >
            <div v-if="!isDark" i-hugeicons-moon-02 text-base />
            <div v-else i-lucide-sun text-base />
          </UiButton>
        </div>
      </div>
      <div v-if="width >= 1152" class="flex items-center gap-1.5 btns">
        <UiButton
          variant="ghost"
          style="font-weight: 500"
          @click="$router.push({ name: RouteNames.login })"
        >
          {{ t('welcome.header.login') }}
        </UiButton>
        <UiButton @click="$router.push({ name: RouteNames.registration })">
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
