<script setup lang="ts">
import type { Board } from '@/entities/board'
import { SearchFilter } from '@/features/filter'
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
        <div i-hugeicons-file-02 class="type-icon" />
        <div class="item-info">
          <span class="text-sm title">{{ data.name }}</span>
          <span v-if="data.path" class="sub-title">{{ data.path }}</span>
          <span v-else-if="data.aliases" class="sub-title">/{{ data.aliases[0] }}</span>
        </div>
      </template>
    </HippieNav>
  </Teleport>
</template>

<style>
/* global for @noction/hippie-nav */
.hippie-nav {
  @apply box-border;
}

.search-results ul {
  @apply p-0;
}

.search-results .recent-title {
  @apply px-4 py-2 text-[12px] font-bold opacity-50;
}

.no-result {
  @apply flex items-center justify-center px-8 py-10 text-neutral-200 dark:text-neutral-600;
}

.key-caps {
  @apply sticky bottom-0 z-60 flex gap-4 items-center justify-start px-4 py-2;
}

.key-cap-content {
  @apply flex gap-2 items-center text-[13px];
}

.key-cap-btn {
  @apply flex px-2 text-neutral-300 rounded-md;
}

.key-cap-content span {
  @apply text-neutral-300;
}

.modal {
  @apply fixed inset-0 z-[9999] flex items-start px-36 py-30 bg-black/60;
}

.modal-content {
  @apply relative min-w-[560px] max-h-full mx-auto overflow-hidden-auto bg-white rounded-xl shadow-md dark:bg-neutral-800;
}

.search-panel {
  @apply sticky top-0 z-60 grid grid-cols-[auto_1fr_auto] gap-4 items-center w-full px-4 py-2;
}

.search-panel-icon {
  @apply flex-none h-[15px] text-neutral-500 opacity-50 dark:text-neutral-300;
}

.search-panel-input {
  @apply text-[15px] text-neutral-700 placeholder:text-neutral-500 dark:placeholder:text-neutral-300 bg-transparent border-0 outline-none dark:text-neutral-200 mt-px;
}

.clear-btn {
  @apply h-[9px] h-[9px] text-neutral-400 bg-transparent border-0 opacity-100 transition-opacity duration-200 flex items-center justify-center dark:text-neutral-300;
}

.clear-btn:hover {
  @apply opacity-100;
}

.hippie-result-item {
  @apply flex items-center justify-between px-4 py-2 leading-[1.5] cursor-pointer transition duration-75 ease-in text-neutral-700 dark:text-neutral-300;
}

.hippie-result-item .highlighted {
  @apply underline decoration-2 underline-offset-2;
}

.hippie-result-item .title {
  @apply text-[14px] text-neutral-700 lowercase dark:text-neutral-300;
}

.hippie-result-item .type-icon {
  @apply text-[16px] text-neutral-500;
}

.hippie-result-item .sub-title {
  @apply text-[12px] opacity-50;
}

.hippie-result-item.selected {
  @apply bg-neutral-100 dark:bg-neutral-700/40;
}

.hippie-result-item.selected > span {
  @apply text-neutral-600;
}

.hippie-result-item.selected .type-icon {
  @apply text-blue-500;
}

.hippie-result-item.selected .highlighted {
  @apply text-inherit underline;
}

.hippie-result-item-content {
  @apply grid grid-cols-[12px_1fr] gap-4 items-center w-[95%];
}

.hippie-result-item-content .item-info {
  @apply flex flex-col;
}

.hippie-result-item .clear-btn {
  @apply h-[8px] border-0 opacity-100 transition-opacity duration-200 flex items-center justify-center;
}

.hippie-result-item .clear-btn:hover {
  @apply opacity-100;
}

.hippie-enter-active {
  animation: fade calc(var(--hippie-animate-duration) / 2);
}

.hippie-enter-active .modal-content {
  animation: pulse var(--hippie-animate-duration);
}

.hippie-leave-active {
  animation: fade calc(var(--hippie-animate-duration) / 2) reverse;
}

.hippie-leave-active .modal-content {
  animation: pulse calc(var(--hippie-animate-duration)) reverse;
}

.hippie-enter-from,
.hippie-leave-to {
  @apply opacity-0;
}

@keyframes pulse {
  0% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  55% {
    transform: scale3d(0.98, 0.98, 0.98);
  }

  100% {
    transform: scale3d(1, 1, 1);
  }
}

@keyframes fade {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0.75;
  }

  100% {
    opacity: 1;
  }
}

.list-enter-active,
.list-leave-active {
  @apply transition-all duration-200 ease;
}

.list-enter-from,
.list-leave-to {
  @apply opacity-0 translate-x-8;
}

.hippie-expand-enter-active,
.hippie-expand-leave-active {
  @apply overflow-hidden transition-all duration-200 ease-in-out delay-100;
}

.hippie-expand-enter,
.hippie-expand-leave-to {
  @apply h-0;
}

.hippie-expand-enter-from,
.hippie-expand-leave-to {
  @apply opacity-0;
}
</style>
