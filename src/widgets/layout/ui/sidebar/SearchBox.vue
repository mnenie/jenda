<script setup lang="ts">
import { computed, useTemplateRef } from 'vue';
import { useRouter } from 'vue-router';
import { HippieNav } from '@noction/hippie-nav';
import { SearchFilter } from '@/features/filter';
import type { Board } from '@/entities/board';
import { File } from '@/shared/assets/icons';

const props = defineProps<{
  boards: Board[];
}>();

const hippieNav = useTemplateRef<InstanceType<typeof HippieNav>>('hippieNav');

const formattedBoards = computed(() => {
  return props.boards.map((board) => ({
    name: board.name,
    path: `/board/${board._id}`
  }));
});

const router = useRouter();

const options = {
  excludedPaths: [/^\/user\//, '/board/:id', /^\/members(\/.*)?$/],
  indexFields: {
    routes: ['name']
  },
  displayField: {
    route: 'name'
  },
  resultsLimit: 7
};

const actions = [
  ...formattedBoards.value.map((board) => ({
    action: () => {
      router.push(board.path);
    },
    aliases: [board.name.toLowerCase().replace(/\s+/g, '-')],
    name: board.name
  }))
];

function openModal() {
  if (!hippieNav.value) return;
  hippieNav.value.openModal();
}
</script>

<template>
  <SearchFilter @open-modal="openModal" />
  <Teleport to="body">
    <HippieNav ref="hippieNav" :options="options" :actions="actions">
      <template #resultItem="{ data }">
        <File class="type-icon" />
        <div class="item-info">
          <span class="text-sm title">{{ data.name }}</span>
          <span v-if="data.path" class="sub-title">{{ data.path }}</span>
          <span v-else class="sub-title">/{{ data.aliases[0] }}</span>
        </div>
      </template>
    </HippieNav>
  </Teleport>
</template>
