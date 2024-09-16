<script setup lang="ts">
import { computed, ref } from 'vue';
import { useDark } from '@vueuse/core';
import { UiInput, UiBadge } from '@/shared/ui';
import { Search } from 'lucide-vue-next';
import useFilter from '../model/composables/useFilter';

const props = defineProps<{
  isExpanded: boolean;
}>();

const emit = defineEmits<{
  (e: 'onToggle'): void;
}>();

const search = ref('');
const inputRef = ref<HTMLElement | null>(null);

const isDark = useDark();
const iconColor = computed(() => {
  if (isDark.value) {
    return !props.isExpanded ? 'var(--zinc-200)' : 'var(--zinc-300)';
  } else {
    return !props.isExpanded ? 'var(--zinc-800)' : 'rgb(82 82 91 / 0.9)';
  }
});

const { onToggleArea } = useFilter(inputRef, props, emit);
</script>

<template>
  <div :class="$style.search_container" :style="{ marginBottom: isExpanded ? '15px' : '16px' }">
    <Search
      :class="[isExpanded ? $style.icon : $style.icon_no_expanded]"
      :color="iconColor"
      @click="onToggleArea"
    />
    <UiInput
      v-show="isExpanded"
      id="input"
      ref="inputRef"
      v-model.trim="search"
      :placeholder="$t('sidebar.input')"
      :class="$style.input_filter"
    />
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
    position: absolute;
    left: 0px;
    top: 50%;
    transform: translateY(-50%);
    height: 16px;
    width: 16px;
  }

  .icon_no_expanded {
    cursor: pointer;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 16px;
    width: 16px;
  }

  .input_filter {
    padding-left: 24px;
    padding-right: 40px;
    border: none;
    width: 100%;
    height: 32px;
    box-shadow: none;
    font-weight: 500;
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
    .input_filter {
      background-color: transparent;
      &::placeholder {
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
