<script setup lang="ts">
import type { Board } from '@/entities/board'
import { useExpanded } from '@/shared/composables'
import { UiButton } from '@/shared/ui'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router/auto'

const props = defineProps<{
  boards: Board[]
}>()

const showList = ref(true)
const showPlusIcon = ref(false)

const route = useRoute('board')

const _projects = computed(() => {
  return props.boards.map(proj => ({
    ...proj,
    isActive: proj._id === route.params.id && route.params.id !== undefined,
  }))
})

const expanded = useExpanded()

const { isExpanded } = expanded.getExpanded()

const contentPosition = computed(() => {
  return isExpanded.value ? 'flex-start' : 'center'
})

function changeShowList() {
  showList.value = !showList.value
}
</script>

<template>
  <div
    class="flex items-center justify-between w-full pt-0 pb-3"
    :class="[isExpanded ? 'px-2' : 'px-1']"
    @mouseover="showPlusIcon = true"
    @mouseleave="showPlusIcon = false"
  >
    <div class="flex items-center gap-1.5 w-full">
      <div
        v-show="isExpanded"
        i-lucide-chevron-down
        class="cursor-pointer text-base text-neutral-500 dark:text-neutral-400"
        :style="{ transform: !showList ? 'rotate(-90deg)' : '' }"
        @click="changeShowList"
      />
      <p
        class="text-neutral-500 dark:text-neutral-400 text-xs capitalize text-ellipsis
        whitespace-nowrap overflow-hidden"
      >
        {{ $t('sidebar.projects') }}
      </p>
    </div>
    <div
      v-show="isExpanded && showPlusIcon"
      i-lucide-plus
      class="cursor-pointer text-base text-neutral-500 dark:text-neutral-400"
    />
  </div>
  <div
    v-if="showList"
    class="flex flex-col gap-5px justify-start mb-30px"
  >
    <RouterLink
      v-for="project in _projects"
      :key="project._id"
      v-tooltip.right="{
        content: project.name,
        triggers: ['hover'],
        disabled: isExpanded,
      }"
      :to="`/boards/${project._id}`"
      class="flex items-center gap-1.5 cursor-pointer text-neutral-900 justify-start w-full"
    >
      <UiButton
        :variant="project.isActive ? 'secondary' : 'ghost'"
        class="w-full gap-2 shadow-none py-0 px-2 transition-all duration-200 ease"
        :class="project.isActive ? '!bg-neutral-200/40 dark:!bg-neutral-700/50' : ''"
        :style="{ padding: !isExpanded ? '0px' : '', justifyContent: contentPosition }"
      >
        <div
          i-jenda-custom-project
          class="w-17px h-17px rounded flex justify-center items-center"
          :style="{ color: project.color }"
        />
        <span
          v-show="isExpanded"
          class="text-sm text-ellipsis overflow-hidden max-w-80%
          whitespace-nowrap !fw500 text-neutral-900 dark:text-neutral-100"
        >
          {{ project.name }}
        </span>
      </UiButton>
    </RouterLink>
  </div>
</template>
