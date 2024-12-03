<script setup lang="ts">
import type { Link } from '../../model'
import { RouteNames } from '@/shared/config/consts'
import { UiButton } from '@/shared/ui'
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
  <div :class="$style.sidebar_main_links">
    <RouterLink
      v-for="link in pathName"
      :key="link.id"
      v-tooltip.right="{
        content: $t(`sidebar.${link.name}`),
        triggers: ['hover'],
        disabled: isExpanded,
      }"
      :to="{ name: link.pathName }"
      :class="$style.link"
    >
      <UiButton
        :variant="link.isActive ? 'secondary' : 'ghost'"
        :class="$style.link_btn"
        :style="{ padding: !isExpanded ? '0px' : '', justifyContent: contentPosition }"
      >
        <component :is="link.icon" :class="$style.icon" :color="iconColor" />
        <span v-show="isExpanded" class="text-sm">{{ $t(`sidebar.${link.name}`) }}</span>
      </UiButton>
    </RouterLink>
  </div>
</template>

<style module lang="scss">
@use '@/app/styles/mixins' as *;

.name_block {
  color: var(--zinc-300);
  margin-bottom: 12px;
  text-transform: uppercase;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.sidebar_main_links {
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: flex-start;
  margin-bottom: 30px;

  .link {
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    color: var(--zinc-900);
    justify-content: flex-start;
    width: 100%;

    .link_btn {
      width: 100%;
      gap: 8px;
      box-shadow: none;
      padding: 0 8px;
      transition: all 0.2s ease;
      &:hover {
        background-color: rgba(var(--zinc-rgb-200), 0.3);
      }
      &:focus {
        background-color: rgba(231, 231, 231, 0.6);
      }

      .icon {
        font-size: 17px;
      }
    }

    & span {
      font-weight: 500 !important;
      color: var(--zinc-900);
    }
  }
}

:global(html.dark) {
  .sidebar_main_links {
    .link {
      .link_btn {
        & span {
          color: var(--zinc-100);
        }
        &:hover {
          background-color: rgba(var(--zinc-rgb-600), 0.3);
        }
        &:focus {
          background-color: rgba(var(--zinc-rgb-600), 0.5);
        }
      }
    }
  }
}
</style>
