<script setup lang="ts">
import { computed } from 'vue';
import type { StatusBadge } from '@/entities/board';

defineOptions({
  inheritAttrs: false
});

const props = defineProps<{
  statuses: StatusBadge[];
  projStatus: StatusBadge['status'];
}>();
const emits = defineEmits<{
  (e: 'updateStatus', status: StatusBadge['status']): void;
}>();

const activeStatus = computed(() => {
  return (s: string) => {
    return props.projStatus === s && [s, true];
  };
});
</script>

<template>
  <div :class="$style.badges">
    <div
      v-for="b in statuses"
      v-bind="$attrs"
      :key="b._id"
      :class="[$style.badge, { [$style.active]: activeStatus(b.status) }]"
      @click="emits('updateStatus', b.status)"
    >
      <div :class="$style.indicator" :style="{ backgroundColor: b.indicator }" />
      <span class="text-sm">{{ b.status }}</span>
    </div>
  </div>
  <p :class="[$style.status_p, 'text-sm']">
    {{ $t('kanban.configuration.status') }}
  </p>
</template>

<style module lang="scss">
.badges {
  display: flex;
  align-items: center;
  gap: 6px;

  .badge {
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    gap: 8px;
    height: 20px;
    padding: 5px 10px;
    background: var(--zinc-100);
    border: 1px solid var(--zinc-200);
    border-radius: 4px;
    cursor: pointer;

    .indicator {
      width: 7px;
      height: 7px;
      border-radius: 50%;
    }
  }

  .active {
    border: 1px solid var(--zinc-300);
  }
}

.status_p {
  color: var(--zinc-500);
  margin: 10px 0;
}

:global(html.dark) {
  .status_p {
    color: var(--zinc-300);
  }
  .badges {
    .badge {
      background-color: var(--zinc-600);
      border: 1px solid var(--zinc-600);
    }
    .active {
      border: 1px solid var(--zinc-300);
    }
  }
}
</style>
