<script setup lang="ts">
import { computed, reactive } from 'vue';
import { useLocalStorage } from '@vueuse/core';
import { useI18n } from 'vue-i18n';
import { UiSelect } from '@/shared/ui';

const { t, locale } = useI18n();

const filterStore = useLocalStorage('kanban-sort-condition', 'all');
const options = reactive([
  { name: `📄 ${t('kanban.sorting.all')}`, value: 'all' },
  { name: `💬 ${t('kanban.sorting.activity')}`, value: 'activity' },
  { name: `👥 ${t('kanban.sorting.workload')}`, value: 'workload' }
]);

const filter = computed({
  get() {
    const selected = options.find((option) => option.value === filterStore.value);
    return selected && selected.name;
  },
  set(newValue) {
    const selected = options.find((option) => option.name === newValue);
    if (selected) {
      filterStore.value = selected.value;
    }
  }
});
const width = computed(() => (locale.value === 'ru-RU' ? '172px' : '166px'));
</script>

<template>
  <UiSelect v-model="filter" :options="options" :class="$style.filter_tasks" />
</template>

<style module lang="scss">
.filter_tasks {
  position: relative;
  height: 30px;
  width: v-bind('width');
  border: 1px dashed var(--zinc-200);
}

:global(html.dark) {
  .filter_tasks {
    border: 1px dashed var(--zinc-600);
    background-color: transparent;
  }
}
</style>
