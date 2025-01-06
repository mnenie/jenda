<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import { useRoute } from 'vue-router/auto'
import type { WorkspaceLink } from '@/shared/config/types-shared'
import { useExpanded } from '@/shared/composables'
import { UiBadge, UiButton } from '@/shared/ui'

const props = defineProps<{
  links: WorkspaceLink[]
}>()

const route = useRoute()

function isCurrentPath(link: WorkspaceLink): boolean {
  if (route.name === 'boards') {
    return link.pathName === 'boards'
  }
  if (route.name === 'community') {
    return link.pathName === 'templates'
  }
  return route.path === `/${link.pathName}`
}

const pathName = computed(() => {
  return props.links.map(link => ({
    ...link,
    isActive: isCurrentPath(link),
  }))
})

const expanded = useExpanded()

const { isExpanded } = expanded.getExpanded()

const contentPosition = computed(() => {
  return isExpanded.value ? 'space-between' : 'center'
})
</script>

<template>
  <div class="flex flex-col space-y-1.5 justify-start mb-20px">
    <RouterLink
      v-for="link in pathName"
      :key="link.id"
      v-tooltip.right="{
        content: $t(`sidebar.${link.name}`),
        triggers: ['hover'],
        disabled: isExpanded,
      }"
      :to="`/${link.pathName}`"
      class="flex items-center gap-1.5 cursor-pointer text-neutral-900 justify-start w-full"
    >
      <UiButton
        :variant="link.isActive ? 'secondary' : 'ghost'"
        size="sm"
        class="w-full gap-2 shadow-none px-2 transition-all duration-200 ease"
        :class="link.isActive ? '!bg-neutral-200/40 dark:!bg-neutral-700/50' : ''"
        :style="{ padding: !isExpanded ? '0px' : '', justifyContent: contentPosition }"
      >
        <div class="flex items-center gap-2">
          <Icon :icon="link.icon" class="!w-15px !h-15px 2xl:(!w-4 !h-4) text-neutral-900 dark:text-neutral-200" />
          <span v-show="isExpanded" class="text-13px 2xl:text-sm !fw500 text-neutral-900 dark:text-neutral-100">{{ $t(`sidebar.${link.name}`) }}</span>
        </div>
        <UiBadge v-if="link.id === 1 && isExpanded" variant="solid" class="px-5px py-0 text-xs rounded-md">
          <span class="text-[10px] text-white">3</span>
        </UiBadge>
      </UiButton>
    </RouterLink>
  </div>
</template>
