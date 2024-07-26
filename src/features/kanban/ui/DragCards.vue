<script setup lang="ts">
import { ref, useCssModule } from 'vue';
import Draggable from 'vuedraggable';
import { CardItem } from '@/entities/board';
import type { Card } from '@/entities/board';

defineProps<{
  cards: Card[];
}>();

const style = useCssModule();

const drag = ref(false);
const dragOptions = ref({
  animation: 200,
  disabled: false,
  ghostClass: style.ghost
});
</script>

<template>
  <Draggable
    :list="cards"
    group="list"
    :component-data="{
      tag: 'ul',
      name: 'flip-cards',
      type: 'transition'
    }"
    v-bind="dragOptions"
    :force-fallback="true"
    item-key="_id"
    @start="drag = true"
    @end="drag = false"
  >
    <template #item="{ element: card }">
      <div :key="card._id">
        <CardItem :card :class="{ [$style.dragging]: drag }" />
      </div>
    </template>
  </Draggable>
</template>

<style module lang="scss">
.dragging {
  cursor: grabbing;
}

.flip-cards-move {
  transition: transform 0.5s;
}

.no-move {
  transition: transform 0s;
}

.ghost {
  opacity: 0.3;
}
</style>
