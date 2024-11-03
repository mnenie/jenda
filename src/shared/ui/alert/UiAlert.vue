<script setup lang="ts">
import { computed } from 'vue';
import type { AlertVariant } from './types';
import { variants } from '.';
import { X } from 'lucide-vue-next';
import { useDark } from '@vueuse/core';

const props = withDefaults(
  defineProps<{
    variant?: AlertVariant;
    closable?: boolean;
    content?: string;
  }>(),
  {
    variant: 'default',
    closable: false
  }
);

const emits = defineEmits(['close']);

const isDark = useDark();

const _styles = computed(() => {
  return variants[props.variant];
});

const alertBgColor = computed(() =>
  isDark.value ? _styles.value.dark.background : _styles.value.light.background
);
const alertBorder = computed(() => (isDark.value ? _styles.value.dark.border : _styles.value.light.border));

const valueOfRightPadding = computed(() => props.closable ? '32px' : '10px');
</script>

<template>
  <div :class="$style.alert" :style="{ background: alertBgColor, border: alertBorder }">
    <slot v-if="$slots.default || content">
      <span class="text-sm">{{ content }}</span>
    </slot>
    <X v-if="closable" :class="$style.x_mark" @click="emits('close')" />
  </div>
</template>

<style module lang="scss">
.alert {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 2px v-bind('valueOfRightPadding') 2px 10px;
  border-radius: 8px;
  margin-bottom: 20px;
  min-height: 22px;

  .x_mark {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    width: 13px;
    min-width: 13px;
    color: var(--zinc-600);
    cursor: pointer;
  }
}

:global(html.dark) {
  .alert {
    .x_mark,
    & span {
      color: var(--zinc-200);
    }
  }
}
</style>
