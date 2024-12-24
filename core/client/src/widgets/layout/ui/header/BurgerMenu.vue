<script setup lang="ts">
import type { MenuLink, SectionItem } from '../../model'
import { useScroll } from '@/shared/composables'
import { computed, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { items as _items, menuLinks as _links } from '../../model'

const isOpen = ref(false)

watch(isOpen, (newVal) => {
  document.body.style.overflow = newVal ? 'hidden' : ''
})

const { tm } = useI18n()

const items = computed(() => {
  const _arr = tm('welcome.mobile.section_blocks') as Omit<SectionItem[], 'icon' | 'urlPrefix'>
  return _items.map((item, i) => ({
    ...item,
    title: _arr[i].title,
    description: _arr[i].description,
  }))
})

const links = computed(() => {
  const _arr = tm('welcome.mobile.links') as Omit<MenuLink[], 'url'>
  return _links.map((link, i) => ({
    ...link,
    title: _arr[i].title,
  }))
})

const { scrollToEl } = useScroll(items.value.map(i => i.urlPrefix))
</script>

<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="fixed top-0 left-0 w-full h-dvh bg-black/50 opacity-0 z-998 pointer-events-none transition-opacity duration-250 ease-in-out"
      @click="isOpen = false"
    />
    <div class="menu bg-main" :class="[isOpen ? 'menu-opened' : '']">
      <div class="flex flex-col gap-2.5">
        <a
          v-for="(link, index) in links"
          :key="index"
          class="flex items-center justify-between p-3 px-4 rounded-8px border-0.5px border-solid border-transparent cursor-pointer duration-100 ease dark:bg-neutral-700"
          :href="link.url"
          target="_blank"
        >
          <p class="text-lg">
            {{ link.title }}
          </p>
          <div
            i-lucide-arrow-up-right
            class="text-neutral-400 text-lg"
          />
        </a>
        <div class="sections">
          <div
            v-for="(i, index) in items"
            :key="index"
            class="flex flex-col min-h-160px p-4 rounded-8px bg-neutral-50 max-[420px]:min-h-100px dark:bg-neutral-700"
            @click="(isOpen = false), scrollToEl(i.urlPrefix)"
          >
            <div class="flex items-center justify-between">
              <span class="text-xl">{{ i.icon }}</span>
              <div
                i-lucide-bookmark
                class="text-neutral-400 text-lg"
              />
            </div>
            <div class="mt-auto">
              <h4 class="text-xl mb-3px dark:text-neutral-100">
                {{ i.title }}
              </h4>
              <p class="text-base text-neutral-700 dark:text-neutral-200">
                {{ i.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
  <div
    v-show="!isOpen"
    i-lucide-menu
    class="text-2xl text-neutral-700 dark:text-neutral-200"
    @click="isOpen = true"
  />
  <div
    v-show="isOpen"
    i-lucide-x
    class="text-2xl text-neutral-700 dark:text-neutral-200"
    @click="isOpen = false"
  />
</template>

<style scoped>
.menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;
  padding: 76px 16px 32px;
  z-index: 10;
  transform: translateY(-100%);
  transition:
    transform 300ms,
    opacity 300ms;
  opacity: 0;
  animation-timing-function: cubic-bezier(0.05, 0.7, 0.1, 1);
  pointer-events: none;
  overflow-y: auto;
}

.sections {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(calc(33% - 8px), 1fr));
  grid-gap: 10px;
  margin-top: 2px;
}

.menu-opened {
  transform: translateY(0);
  opacity: 1;
  pointer-events: all;
}

.menu-opened + .overlay {
  opacity: 1;
  pointer-events: all;
}

@media screen and (max-width: 768px) {
  .sections {
    grid-template-columns: 100%;
  }
}
</style>
