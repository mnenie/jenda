<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import { useRoute } from 'vue-router/auto'
import type { WorkspaceLink } from '@/shared/config/shared-types'
import { useExpandedContext } from '@/shared/composables/expanded'
import { UiBadge, UiButton } from '@/shared/ui'

const props = defineProps<{
  links: WorkspaceLink[]
}>()

const route = useRoute()
const { isExpanded } = useExpandedContext()

function isLinkActive(link: WorkspaceLink): boolean {
  if (route.name.match(/boards/)) {
    return link.pathName === 'boards'
  }
  if (route.name === 'community') {
    return link.pathName === 'templates'
  }
  if (route.name.match(/workflows/)) {
    return link.pathName === 'workflows'
  }
  return route.path === `/${link.pathName}`
}

const computedLinks = computed(() =>
  props.links.map(link => ({
    ...link,
    isActive: isLinkActive(link),
  })),
)
const contentPosition = computed(() => isExpanded.value ? 'space-between' : 'center')
</script>

<template>
  <div class="flex flex-col space-y-1.5 justify-start mb-20px">
    <RouterLink
      v-for="link in computedLinks"
      :key="link.id"
      v-tooltip.right="{
        content: $t(`sidebar.${link.name}`),
        triggers: ['hover'],
        disabled: isExpanded,
      }"
      :to="{ name: link.name }"
      class="flex items-center gap-1.5 cursor-pointer text-neutral-900 justify-start w-full"
    >
      <UiButton
        :variant="link.isActive ? 'secondary' : 'ghost'"
        size="sm"
        class="w-full gap-2 shadow-none px-2 transition-all duration-200 ease"
        :class="{ '!bg-neutral-200/40 dark:!bg-neutral-700/50': link.isActive }"
        :style="{ padding: !isExpanded ? '0px' : '', justifyContent: contentPosition }"
      >
        <div class="flex items-center gap-2">
          <Icon
            :icon="link.icon"
            class="!w-16px !h-16px 2xl:(!min-w-4 !min-h-4) text-neutral-800 dark:text-neutral-200"
          />
          <span
            v-show="isExpanded"
            class="text-default !fw500 text-neutral-950 dark:text-neutral-100"
          >
            {{ $t(`sidebar.${link.name}`) }}
          </span>
        </div>
        <UiBadge
          v-if="link.badge && isExpanded && link.name === 'workflows'"
          variant="soft"
          class="px-5px py-0 text-xs rounded-md"
        >
          <span class="text-xs">beta</span>
        </UiBadge>
      </UiButton>
    </RouterLink>
  </div>
</template>
