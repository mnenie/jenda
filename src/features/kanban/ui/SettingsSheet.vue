<script setup lang="ts">
import { computed, ref, shallowReactive } from 'vue';
import { useI18n } from 'vue-i18n';
import { UiBadge, UiButton, UiInput, UiSheet } from '@/shared/ui';
import type { SheetElement } from '@/shared/ui';
import { Settings2 } from 'lucide-vue-next';
import { UserAvatar } from '@/entities/user';
import type { Board } from '@/entities/board';
import { Check } from 'lucide-vue-next';
import { useDark } from '@vueuse/core';

type Status = Board['status'];

interface StatusBadge {
  _id: string;
  indicator: string;
  status: Status;
}

const sheet = ref<SheetElement | null>(null);

const open = () => {
  if (sheet.value) {
    sheet.value.open();
  }
};

//TODO(@mnenie): refactor this part

const { t } = useI18n();
const isDark = useDark();

const name = ref('Startup');
const projColor = ref('#b156db');

const colors = ['#ffd45e', '#45ad2d', '#3b54c4', '#b156db', '#a6a2a3', '#ff7a97', '#a1612a'] as const;
const statuses = shallowReactive<StatusBadge[]>([
  { _id: '0', indicator: '#acb1c2', status: 'not active' },
  { _id: '1', indicator: '#359f39', status: 'work' },
  { _id: '2', indicator: '#fde50c', status: 'archive' },
  { _id: '3', indicator: '#d01f1f', status: 'closed' }
]);

const isCurrentColor = computed(() => {
  return (color: string) => projColor.value === color;
});
</script>

<template>
  <UiButton :variant="'dashed'" :size="'sm'" :class="$style.settings" @click="open">
    <Settings2 :size="16" />
  </UiButton>
  <UiSheet ref="sheet">
    <template #header>
      <p class="text-lg" style="font-weight: 500">{{ t('kanban.configuration.title') }}</p>
      <span :class="[$style.desc, 'text-sm']">
        {{ t('kanban.configuration.description') }}
      </span>
    </template>
    <template #default>
      <div :class="$style.about">
        <div :class="$style.name">
          <div :class="$style.indicator_bg" :style="{ backgroundColor: projColor }">S</div>
          <UiInput v-model="name" placeholder="name ?" :class="$style.input" />
          <UiBadge :variant="isDark ? 'default' : 'outline'">free</UiBadge>
        </div>
        <div :class="$style.colors">
          <div
            v-for="(color, index) in colors"
            :key="index"
            :class="$style.color"
            :style="{ backgroundColor: color }"
            @click="projColor = color"
          >
            <Check v-if="isCurrentColor(color)" :size="14" color="white" />
          </div>
        </div>
      </div>
      <p :class="[$style.desc, 'text-sm']">
        {{ t('kanban.configuration.name') }}
      </p>
      <div :class="$style.users">
        <p>Participants:</p>
        <UserAvatar style="width: 24px; height: 24px">
          <img style="width: 100%" src="https://avatars.githubusercontent.com/u/121057011?v=4" />
        </UserAvatar>
      </div>
      <div :class="$style.badges">
        <div v-for="b in statuses" :key="b._id" :class="$style.badge">
          <div :class="$style.indicator" :style="{ backgroundColor: b.indicator }" />
          <span class="text-sm">{{ b.status }}</span>
        </div>
      </div>
      <p :class="[$style.desc, 'text-sm']">
        {{ t('kanban.configuration.status') }}
      </p>
      <div :class="$style.btns">
        <UiButton>{{ t('kanban.configuration.update') }}</UiButton>
        <UiButton variant="destructive">{{ t('kanban.configuration.clear') }}</UiButton>
      </div>
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

.desc {
  color: var(--zinc-500);
  margin: 10px 0;
}

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

.badges {
  display: flex;
  align-items: center;
  gap: 6px;

  .badge {
    display: flex;
    align-items: center;
    gap: 8px;
    height: 20px;
    padding: 5px 10px;
    background: var(--zinc-200);
    border-radius: 4px;

    .indicator {
      width: 7px;
      height: 7px;
      border-radius: 50%;
    }
  }
}

.users {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 25px;
}

.btns {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 18px;
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
  .desc {
    color: var(--zinc-300);
  }

  .badges {
    .badge {
      background-color: var(--zinc-600);
    }
  }
}
</style>
