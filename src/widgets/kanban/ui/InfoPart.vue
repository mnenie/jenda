<script setup lang="ts">
import { computed } from 'vue';
import { SettingsSheet, SortingItems, RemoveBoard } from '@/features/kanban';
import { UserAvatar } from '@/entities/user';
import type { Board } from '@/entities/board';
import { UiBadge, UiButton } from '@/shared/ui';
import { Users } from 'lucide-vue-next';
import { toast } from 'vue-sonner';

const props = defineProps<{
  board: Board;
}>();

const extraUsers = computed(() => {
  const limit = 4;
  return props.board.users.length - limit;
});

const previewUsers = computed(() => {
  return props.board.users.slice(0, 4);
});

const toggleVisible = () => {
  toast.info('Now this feature in dev mode')
}
</script>

<template>
  <div :class="$style.top_part">
    <div :class="$style.left_container">
      <div :class="$style.name">
        <span class="text-xl">{{ board.name }}</span>
      </div>
      <div :class="$style.badge">
        <div :class="$style.indicator" />
        <span class="text-sm">{{ board.status }}</span>
      </div>
      <div :class="$style.line" />
      <div :class="$style.visible" @click="toggleVisible">
        <UiButton variant="secondary" size="sm" :class="$style.btn">
          <Users :size="16" />
          Team Visible
        </UiButton>
        <UiBadge variant="outline" :class="$style.visible_badge">dev</UiBadge>
      </div>
      <div :class="$style.line" />
      <div :class="$style.users">
        <UserAvatar
          v-for="user in previewUsers"
          :key="user._id"
          v-tooltip.bottom="user.email"
          :class="$style.avatar"
        >
          <img :src="user.photoUrl" style="width: 100%" />
        </UserAvatar>
        <div v-if="board.users.length > 4" class="text-sm" :class="$style.extra">+ {{ extraUsers }}</div>
      </div>
    </div>
    <div :class="$style.right_container">
      <SortingItems />
      <div :class="$style.line" />
      <SettingsSheet />
      <RemoveBoard />
    </div>
  </div>
</template>

<style module lang="scss">
.top_part {
  position: relative;
  z-index: 10;
  gap: 12px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 12px 15px 6px 18px;
  background-color: transparent;
  width: 100%;
  justify-content: space-between;

  .left_container {
    display: flex;
    align-items: center;
    gap: 12px;

    .visible {
      position: relative;

      .visible_badge {
        position: absolute;
        top: -7px;
        right: -7px;
        padding: 0px 1.5px;
        color: var(--zinc-500);
      }

      .btn {
        height: 30px;
        gap: 8px;
        & > svg {
          color: var(--zinc-600);
        }
      }
    }

    .name {
      color: var(--zinc-900);
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .badge {
      display: flex;
      align-items: center;
      gap: 8px;
      height: 16px;
      padding: 5px;
      background: var(--zinc-200);
      border-radius: 4px;

      .indicator {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background-color: #359f39;
      }
    }

    .users {
      display: flex;
      align-items: center;
      gap: 2px;

      .extra {
        margin-left: 6px;
        color: var(--zinc-600);
      }

      .avatar {
        width: 24px;
        height: 24px;
      }
    }
  }

  .right_container {
    display: flex;
    align-items: center;
    gap: 8px;
  }
}

.line {
  width: 1.5px;
  height: 18px;
  background-color: var(--zinc-200);
  margin-left: 6px;
  margin-right: 6px;
}

:global(html.dark) {
  .top_part {
    .left_container {
      .name {
        color: var(--zinc-100);
      }
      .visible {
        .visible_badge {
          background-color: rgba(33, 33, 33, 0.6);
          color: var(--zinc-300);
          border-color: rgba(33, 33, 33, 0.6);
        }
        .btn {
          & svg {
            color: var(--zinc-300);
          }
        }
      }
      .badge {
        background-color: var(--zinc-600);
      }
    }
  }
  .line {
    background-color: var(--zinc-600);
  }
}
</style>
