<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { createReusableTemplate, useLocalStorage } from '@vueuse/core'
import { Icon } from '@iconify/vue'
import SearchItem from './SearchItem.vue'
import type { Board } from '@/modules/boards/types'
import type { SearchRoute } from '../types'
import { links as _links } from '@/shared/constants/links'
import { UiCommandEmpty, UiCommandGroup, UiCommandList } from '@/shared/ui'

const props = defineProps<{
  boards: Board[]
  modelSearch: string
}>()

const emit = defineEmits<{
  (e: 'handleRoute', route: any, section: string): void
}>()

const [DefineTemplate, ReuseTemplate] = createReusableTemplate()

const mousePosition = ref()

const { t } = useI18n()

const formattedBoards = computed(() => {
  return props.boards.map(board => ({
    name: board.name,
    path: `/boards/${board._id}`,
    icon: 'fluent-emoji-high-contrast:brown-square',
    color: board.color,
  }))
})

const formattedLinks = computed(() => {
  return _links.map(link => ({
    ...link,
    name: t(`sidebar.${link.name}`),
    color: undefined,
    path: `/${link.pathName}`,
  }))
})

const links = computed(() => [...formattedLinks.value, ...formattedBoards.value])

const storeLinks = useLocalStorage<typeof links.value>('links', [])

function addToLocalStorage(item: any) {
  const exists = storeLinks.value.some(link => link.name === item.name)
  if (!exists) {
    storeLinks.value = [item, ...storeLinks.value]
  }
}

function handleCommandItem<T extends string>(item: SearchRoute, section: T) {
  if (section === 'links')
    addToLocalStorage(item)
  emit('handleRoute', item, section)
}
</script>

<template>
  <DefineTemplate v-slot="{ data, section }">
    <UiCommandGroup :heading="t(`search.${section}`)">
      <SearchItem
        v-for="route, idx in data"
        :key="idx"
        :route="route"
        :section="section"
        :mouse-position="mousePosition"
        @handle-route="handleCommandItem"
        @on-mouse-over="mousePosition = idx"
        @on-mouse-leave="mousePosition = undefined"
      >
        <template #ext-icon>
          <Icon
            v-if="mousePosition === idx"
            icon="mi-enter"
            class="min-w-4 min-h-4 text-neutral-500 transition-all duration-200 ease dark:text-neutral-400"
          />
        </template>
      </SearchItem>
    </UiCommandGroup>
  </DefineTemplate>
  <UiCommandList>
    <UiCommandEmpty v-show="modelSearch">
      {{ t('search.empty') }}
    </UiCommandEmpty>
    <ReuseTemplate v-if="!modelSearch && storeLinks.length > 0" :data="storeLinks" section="recently" />
    <ReuseTemplate v-if="modelSearch" :data="links" section="links" />
  </UiCommandList>
</template>
