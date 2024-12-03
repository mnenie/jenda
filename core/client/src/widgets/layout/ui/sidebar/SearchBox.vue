<script setup lang="ts">
import type { Board } from '@/entities/board'
import { SearchFilter } from '@/features/filter'
import { File } from '@/shared/assets/icons'
import { HippieNav } from '@noction/hippie-nav'
import { computed, nextTick, ref, useTemplateRef } from 'vue'
import { useRouter } from 'vue-router'
import { useSearch } from '../../model/composables'

const props = defineProps<{
  boards: Board[]
}>()

const hippieNav = useTemplateRef<InstanceType<typeof HippieNav> | null>('hippieNav')

const formattedBoards = computed(() => {
  return props.boards.map(board => ({
    name: board.name,
    path: `/board/${board._id}`,
  }))
})

const router = useRouter()

const options = {
  excludedPaths: [/^\/user\//, '/board/:id', /^\/members(\/.*)?$/],
  indexFields: {
    routes: ['name'],
  },
  displayField: {
    route: 'name',
  },
  resultsLimit: 7,
}

const actions = [
  ...formattedBoards.value.map(board => ({
    action: () => {
      router.push(board.path)
    },
    aliases: [board.name.toLowerCase().replace(/\s+/g, '-')],
    name: board.name,
  })),
]

const openFl = ref(false)
const placeholder = ref('Search...')

async function openModal() {
  // problem: @noction/hippie-nav is not expose the close modal function
  await nextTick(() => {
    if (!hippieNav.value)
      return
    hippieNav.value.openModal()
  })
}

useSearch(hippieNav, openFl, placeholder)
</script>

<template>
  <SearchFilter @open-modal="openModal" />
  <Teleport to="body">
    <HippieNav ref="hippieNav" :options="options" :actions="actions">
      <template #resultItem="{ data }">
        <File class="type-icon" />
        <div class="item-info">
          <span class="text-sm title">{{ data.name }}</span>
          <span v-if="data.path" class="sub-title">{{ data.path }}</span>
          <span v-else class="sub-title">/{{ data.aliases[0] }}</span>
        </div>
      </template>
    </HippieNav>
  </Teleport>
</template>
