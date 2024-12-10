<script setup lang="ts">
import type { Link } from '../../model'
import { UiButton } from '@/shared/ui'
import { Icon } from '@iconify/vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps<{
  links: Link[]
  isExpanded: boolean
}>()

const route = useRoute()

function isCurrentPath(link: Link) {
  if (route.path === '/boards') {
    return link.pathName === 'boards'
  }
  return route.path === `/${link.pathName}`
}

const pathName = computed(() => {
  return props.links.map(link => ({
    ...link,
    isActive: isCurrentPath(link),
  }))
})

const contentPosition = computed(() => {
  return props.isExpanded ? 'flex-start' : 'center'
})
</script>

<template>
  <div class="flex flex-col gap-5px justify-start mb-30px">
    <RouterLink
      v-for="link in pathName"
      :key="link.id"
      v-tooltip.right="{
        content: $t(`sidebar.${link.name}`),
        triggers: ['hover'],
        disabled: isExpanded,
      }"
      :to="link.pathName"
      class="flex items-center gap-1.5 cursor-pointer text-neutral-900 justify-start w-full"
    >
      <UiButton
        :variant="link.isActive ? 'secondary' : 'ghost'"
        class="w-full gap-2 shadow-none py-0 px-2 transition-all duration-200 ease"
        :class="link.isActive ? '!bg-neutral-200/40 dark:!bg-neutral-700/50' : ''"
        :style="{ padding: !isExpanded ? '0px' : '', justifyContent: contentPosition }"
      >
        <Icon :icon="link.icon" class="text-17px text-neutral-900 dark:text-neutral-200" />
        <span v-show="isExpanded" class="text-sm !fw500 text-neutral-900 dark:text-neutral-100">{{ $t(`sidebar.${link.name}`) }}</span>
      </UiButton>
    </RouterLink>
  </div>
</template>
