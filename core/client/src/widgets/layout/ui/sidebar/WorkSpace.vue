<script setup lang="ts">
import type { Link } from '../../model'
import { RouteNames } from '@/shared/config/consts'
import { UiButton } from '@/shared/ui'
import { Icon } from '@iconify/vue'
import { useDark } from '@vueuse/core'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps<{
  links: Link[]
  isExpanded: boolean
}>()

const route = useRoute()
const isDark = useDark()

function isCurrentPath(link: Link) {
  if (route.name?.toString().startsWith(RouteNames.members)) {
    return link.pathName === RouteNames.members
  }
  if (route.name === RouteNames.boards) {
    return link.pathName === RouteNames.boards
  }
  return link.pathName === route.name
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
const iconColor = computed(() => {
  if (isDark.value) {
    return !props.isExpanded ? 'var(--zinc-200)' : 'var(--zinc-300)'
  }
  else {
    return !props.isExpanded ? 'var(--zinc-800)' : 'var(--zinc-600)'
  }
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
      :to="{ name: link.pathName }"
      class="flex items-center gap-1.5 cursor-pointer text-neutral-900 justify-start w-full"
    >
      <UiButton
        :variant="link.isActive ? 'secondary' : 'ghost'"
        class="w-full gap-2 shadow-none py-0 px-2 transition-all duration-200 ease
        focus:bg-#e7e7e799 hover:bg-neutral-200/30 dark:focus:bg-neutral-700/50 dark:hover:bg-neutral-700/30"
        :style="{ padding: !isExpanded ? '0px' : '', justifyContent: contentPosition }"
      >
        <Icon :icon="link.icon" class="text-17px" :color="iconColor" />
        <span v-show="isExpanded" class="text-sm !fw500 text-neutral-900 dark:text-neutral-100">{{ $t(`sidebar.${link.name}`) }}</span>
      </UiButton>
    </RouterLink>
  </div>
</template>
