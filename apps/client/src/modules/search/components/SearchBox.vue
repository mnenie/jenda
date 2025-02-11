<script setup lang="ts">
import { ref, watch } from 'vue'
import { useMagicKeys } from '@vueuse/core'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router/auto'
import { storeToRefs } from 'pinia'
import SearchList from './SearchList.vue'
import SearchFilter from './SearchFilter.vue'
import PanelItems from './PanelItems.vue'
import type { SearchRoute } from '../types'
import { UiCommandDialog, UiCommandInput } from '@/shared/ui'
import { useBoardsStore } from '@/modules/boards/stores/boards'

const modelSearch = ref('')
const open = ref(false)

const { t } = useI18n()
const router = useRouter()

const boardsStore = useBoardsStore()
const { boards } = storeToRefs(boardsStore)

const { meta_k, ctrl_k } = useMagicKeys({
  passive: false,
  onEventFired(e) {
    if (e.key === 'k' && (e.metaKey || e.ctrlKey))
      e.preventDefault()
  },
})

function handleCommandItem<T extends SearchRoute>(item: T) {
  open.value = false
  router.push(item.path)
}

function handleOpenChange() {
  open.value = !open.value
}

watch([meta_k, ctrl_k], (v) => {
  if (v[0] || v[1])
    handleOpenChange()
})
</script>

<template>
  <SearchFilter
    @open-modal="handleOpenChange"
  />
  <UiCommandDialog
    v-model:search="modelSearch"
    v-model:open="open"
    class="top-1/4 max-w-40%"
  >
    <UiCommandInput :placeholder="t('search.placeholder')" />
    <SearchList
      :model-search="modelSearch"
      :boards="boards"
      @handle-route="handleCommandItem"
    />
    <PanelItems />
  </UiCommandDialog>
</template>
