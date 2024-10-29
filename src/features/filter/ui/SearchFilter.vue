<script setup lang="ts">
import { computed } from 'vue';
import { useDark } from '@vueuse/core';
import { UiBadge, UiButton } from '@/shared/ui';
import { Search } from 'lucide-vue-next';
import { useExpanded } from '@/shared/lib/composables';

const isDark = useDark();

const expanded = useExpanded();

const { isExpanded } = expanded.getExpanded();

const iconColor = computed(() => {
  if (isDark.value) {
    return !isExpanded.value ? 'var(--zinc-200)' : 'var(--zinc-300)';
  } else {
    return !isExpanded.value ? 'var(--zinc-800)' : 'rgb(82 82 91 / 0.9)';
  }
});
</script>

<template>
  <div :class="$style.search_container" :style="{ marginBottom: isExpanded ? '20px' : '19px' }">
    <UiButton variant="ghost" :class="$style.search_filter">
      <Search :class="[isExpanded ? $style.icon : $style.icon_no_expanded]" :color="iconColor" />
      <span v-show="isExpanded" class="text-sm">
        {{ $t('sidebar.input') }}
      </span>
    </UiButton>
    <UiBadge
      variant="secondary"
      :class="$style.badge"
      :style="{ top: isExpanded ? '50%' : '20%', right: isExpanded ? '8px' : '-2px' }"
    >
      <span>⌘</span>
      <span>K</span>
    </UiBadge>
  </div>
</template>

<style module lang="scss">
.search_container {
  position: relative;
  height: 32px;

  .icon {
    height: 16px;
    width: 16px;
    margin-right: 10px;
  }

  .icon_no_expanded {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 16px;
    width: 16px;
  }

  .search_filter {
    width: 100%;
    justify-content: flex-start;
    height: 32px;
    padding: 0 8px;
    border-radius: 8px;

    & > span {
      font-weight: 500;
      color: var(--zinc-700);
    }
  }

  .badge {
    position: absolute;
    height: 16px;
    transform: translateY(-50%);
    padding-left: 4px;
    padding-right: 4px;
    & span {
      color: var(--zinc-500);
      font-size: 10px;
    }
  }
}

:global(html.dark) {
  .search_container {
    .search_filter {
      &:hover {
        background-color: var(--zinc-700);
      }
      & > span {
        color: var(--zinc-200);
      }
    }
    .badge {
      & span {
        color: var(--zinc-300);
      }
    }
  }
}
</style>
