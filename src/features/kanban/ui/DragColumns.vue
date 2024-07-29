<script setup lang="ts">
import { ref, useCssModule } from 'vue';
import Draggable from 'vuedraggable';
import { ColumnItem } from '@/entities/board';
import type { Column } from '@/entities/board';

defineProps<{
  columns: Column[];
}>();

const style = useCssModule();

const dragOptions = ref({
  animation: 200,
  disabled: false,
  handle: '.draggable',
  ghostClass: style.ghost
});
</script>

<template>
  <Draggable
    :list="columns"
    :component-data="{
      tag: 'ul',
      name: 'flip-list',
      type: 'transition'
    }"
    v-bind="dragOptions"
    :force-fallback="true"
    :class="$style.columns"
    item-key="_id"
  >
    <template #item="{ element: column }">
      <div :key="column._id">
        <ColumnItem :column class="draggable">
          {{ column.title }}
          <template #content>
            <slot :cards="column.cards" />
          </template>
        </ColumnItem>
      </div>
    </template>
  </Draggable>
</template>

<style module lang="scss">
.columns {
  display: flex;
  flex-direction: row;
  list-style: none;
  gap: 15px;
  max-height: 100%;
}

.flip-list-move {
  transition: transform 0.3s;
}

.no-move {
  transition: transform 0s;
}

.ghost {
  opacity: 0.2;
}
</style>
