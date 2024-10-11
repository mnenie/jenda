<script setup lang="ts">
import { ref, shallowReactive, useTemplateRef } from 'vue';
import { UiButton, UiSheet } from '@/shared/ui';
import type { SheetElement } from '@/shared/ui';
import { Settings2 } from 'lucide-vue-next';
import { UserAvatar } from '@/entities/user';
import type { StatusBadge } from '@/entities/board';
import { ChangeName, ChooseStatus, UpdateBoard } from '@/features/kanban';

const sheet = useTemplateRef<SheetElement | null>('sheet');

function open () {
  if (sheet.value) {
    sheet.value.open();
  }
}

// mock data -> after data from backend
const name = ref('Startup');
const projColor = ref('#b156db');
const projStatus = ref<StatusBadge['status']>('archive');

const colors = ['#ffd45e', '#45ad2d', '#3b54c4', '#b156db', '#a6a2a3', '#ff7a97', '#a1612a'] as const;
const statuses = shallowReactive<StatusBadge[]>([
  { _id: '0', indicator: '#acb1c2', status: 'not active' },
  { _id: '1', indicator: '#359f39', status: 'work' },
  { _id: '2', indicator: '#fde50c', status: 'archive' },
  { _id: '3', indicator: '#d01f1f', status: 'closed' }
]);

function updateStatus (status: StatusBadge['status']) {
  projStatus.value = status;
  console.log(status);
}
</script>

<template>
  <UiButton :variant="'dashed'" :size="'sm'" :class="$style.settings" @click="open">
    <Settings2 :size="16" />
  </UiButton>
  <UiSheet ref="sheet">
    <template #header>
      <p class="text-lg" style="font-weight: 500">{{ $t('kanban.configuration.title') }}</p>
      <span :class="[$style.desc, 'text-sm']">
        {{ $t('kanban.configuration.description') }}
      </span>
    </template>
    <template #default>
      <ChangeName v-model="name" :name :colors :proj-color @update-color="projColor = $event" />
      <div :class="$style.users">
        <p class="text-base">{{ $t('kanban.configuration.users') }}:</p>
        <UserAvatar style="width: 24px; height: 24px">
          <img style="width: 100%" src="https://avatars.githubusercontent.com/u/121057011?v=4" />
        </UserAvatar>
      </div>
      <ChooseStatus :statuses :proj-status @update-status="updateStatus($event)" />
      <UpdateBoard />
    </template>
  </UiSheet>
</template>

<style module lang="scss">
.settings {
  height: 30px;
  gap: 8px;

  & > svg {
    color: var(--zinc-500);
  }
}

.users {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 25px;
  & > p {
    color: var(--zinc-600);
  }
}

:global(html.dark) {
  .settings {
    background-color: transparent;
    &:hover {
      background-color: transparent;
      border-color: var(--zinc-500);
    }
    & > svg {
      color: var(--zinc-300);
    }
  }
  .users {
    & > p {
      color: var(--zinc-200);
    }
  }
}
</style>
