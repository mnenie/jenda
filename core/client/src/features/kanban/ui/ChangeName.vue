<script setup lang="ts">
import { UiBadge, UiInput } from '@/shared/ui'
import { useDark } from '@vueuse/core'
import { computed } from 'vue'

const props = defineProps<{
  name: string
  projColor: string
  colors: readonly string[]
}>()

const emits = defineEmits<{
  (e: 'updateColor', color: string): void
}>()

const isDark = useDark()
const modelName = defineModel<string>()

const isCurrentColor = computed(() => {
  return (color: string) => props.projColor === color
})
</script>

<template>
  <div :class="$style.about">
    <div :class="$style.name">
      <div :class="$style.indicator_bg" :style="{ backgroundColor: projColor }">
        S
      </div>
      <UiInput v-model="modelName" placeholder="name ?" :class="$style.input" />
      <UiBadge :variant="isDark ? 'default' : 'default'">
        free
      </UiBadge>
    </div>
    <div :class="$style.colors">
      <div
        v-for="(color, index) in colors"
        :key="index"
        :class="$style.color"
        :style="{ backgroundColor: color }"
        @click="emits('updateColor', color)"
      >
        <div
          v-if="isCurrentColor(color)"
          i-lucide-check
          text-sm
          color="white"
        />
      </div>
    </div>
  </div>
  <p class="text-sm" :class="[$style.desc]">
    {{ $t('kanban.configuration.name') }}
  </p>
</template>

<style module lang="scss">
.about {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;

  .name {
    display: flex;
    align-items: center;
    gap: 10px;

    .indicator_bg {
      min-width: 30px;
      min-height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--zinc-50);
    }

    .input {
      padding: 0;
      background-color: transparent;
      box-shadow: none;
      border: none;
      max-width: 80px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 22px;

      &::placeholder {
        font-size: 14px;
      }
    }
  }

  .colors {
    display: flex;
    align-items: center;
    gap: 6px;

    .color {
      width: 20px;
      height: 20px;
      border-radius: 20%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  }
}

.desc {
  color: var(--zinc-500);
  margin: 10px 0;
}

:global(html.dark) {
  .desc {
    color: var(--zinc-300);
  }
}
</style>
