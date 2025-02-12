<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router/auto'
import { Icon } from '@iconify/vue'
import type { WorkspaceLink } from '../../../types'
import { useExpandedContext } from '@/shared/composables/expanded'
import { type ButtonVariants, UiButton } from '@/shared/ui'

interface LinkProps {
  link: WorkspaceLink
  variant?: ButtonVariants['variant']
  custom?: boolean
}
const { variant = 'ghost', ...props } = defineProps<LinkProps>()

const route = useRoute()
const { isExpanded } = useExpandedContext()

const contentPosition = computed(() => isExpanded.value ? 'space-between' : 'center')

const linkVariant = computed(() => props.custom
  ? variant
  : route.name === props.link.name ? 'secondary' : 'ghost',
)
</script>

<template>
  <RouterLink
    v-tooltip.right="{
      content: $t(`sidebar.${link.name}`),
      triggers: ['hover'],
      disabled: isExpanded,
    }"
    :to="{ name: link.name }"
    class="flex items-center gap-1.5 cursor-pointer text-neutral-900 justify-start w-full"
  >
    <UiButton
      size="sm"
      :variant="linkVariant"
      class="relative w-full gap-2 shadow-none px-2 transition-all duration-200 ease"
      :class="{ '!bg-neutral-200/40 dark:!bg-neutral-700/50': route.name === link.name }"
      :style="{ padding: !isExpanded ? '0px' : '', justifyContent: contentPosition }"
    >
      <div class="flex items-center gap-2">
        <Icon
          v-if="link.icon"
          :icon="link.icon"
          class="2xl:(!w-4 !h-4) !w-16px !h-16px text-neutral-800"
          :class="[isExpanded ? 'dark:text-neutral-300' : 'dark:text-neutral-200']"
        />
        <span
          v-show="isExpanded"
          class="text-default !fw500 text-neutral-950 dark:text-neutral-100"
        >
          {{ $t(`sidebar.${link.name}`) }}
        </span>
      </div>
      <slot name="badge" :is-expanded="isExpanded" />
    </UiButton>
  </RouterLink>
</template>
