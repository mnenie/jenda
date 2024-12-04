<script setup lang="ts">
import { UiButton, UiInput } from '@/shared/ui'
import { useDark } from '@vueuse/core'
import { computed, ref } from 'vue'

const filter = ref('')
const isDark = useDark()

const iconColor = computed(() => {
  return isDark.value ? 'var(--zinc-300)' : 'rgb(82 82 91 / 0.9)'
})
</script>

<template>
  <div :class="$style.items">
    <div :class="$style.filter_container">
      <div
        i-lucide-search
        :class="$style.icon"
        :style="{ color: iconColor }"
      />
      <UiInput
        id="filter"
        v-model.trim="filter"
        :placeholder="$t('boards.filter.input')"
        :class="$style.filter"
      />
    </div>
    <UiButton variant="dashed" style="padding: 0 12px">
      <div
        i-lucide-arrow-up-down
        text-base
        :style="{ color: iconColor }"
      />
      <span>{{ $t('boards.filter.popularity') }}</span>
    </UiButton>
    <UiButton variant="dashed" style="padding: 0 12px">
      <div
        i-lucide-history
        text-base
        :style="{ color: iconColor }"
      />
    </UiButton>
  </div>
</template>

<style module lang="scss">
.items {
  display: flex;
  align-items: center;
  gap: 6px;

  .filter_container {
    position: relative;
    height: 32px;

    .icon {
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
      height: 16px;
      width: 16px;
    }

    .filter {
      padding-left: 32px;
      padding-right: 40px;
      width: 100%;
      height: 32px;
      font-weight: 500;
      background-color: white;
    }
  }
}

:global(html.dark) {
  .items {
    .filter_container {
      .filter {
        background-color: rgba(var(--zinc-rgb-600), 0.4);
        &::placeholder {
          color: var(--zinc-200);
        }
      }
    }
  }
}
</style>
