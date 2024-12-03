<script setup lang="ts">
import type { User } from '@/entities/user/model'
import type { BoardPreview } from '../model'
import { UserAvatar } from '@/entities/user'
import { computed } from 'vue'

defineProps<{
  board: BoardPreview
}>()

const userPosition = computed(() => {
  return (board: BoardPreview, user: User) => {
    return (board.users.length - 1 - +user._id!) * 12
  }
})
</script>

<template>
  <div :class="$style.active_board" @click="$router.push('/board/1')">
    <div :class="$style.text">
      <p class="text-base" style="font-weight: 500">
        {{ board.name }}
      </p>
      <span class="text-xs">{{ board.description }}</span>
    </div>
    <div :class="$style.bottom_part">
      <span class="text-xs"> {{ $t('boards.card.date_updated') }}: May 2024</span>
      <div :class="$style.users">
        <template v-for="user in board.users" :key="user._id">
          <UserAvatar
            :class="$style.user"
            :style="{
              right: `${userPosition(board, user)}px`,
              zIndex: userPosition(board, user),
              border: `1px solid ${user._id === '0' ? 'var(--purple-main)' : 'var(--zinc-300)'}`,
            }"
          >
            <img :src="user.photoUrl" style="width: 100%" />
          </UserAvatar>
        </template>
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.active_board {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  border: 1px solid var(--zinc-200);
  min-width: 240px;
  height: 120px;
  border-radius: 15px;
  padding: 15px;
  cursor: pointer;

  .text {
    & span {
      color: var(--zinc-500);
    }
  }

  .bottom_part {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;

    & > span {
      color: var(--zinc-500);
    }

    .users {
      position: relative;
      display: flex;
      align-items: center;
      height: 20px;
      width: 20px;

      .user {
        height: 22px;
        width: 22px;
        position: absolute;
        top: 0;
      }
    }
  }
}

:global(html.dark) {
  .active_board {
    background-color: rgba(var(--zinc-rgb-600), 0.4);
    border-color: var(--zinc-600);
    color: var(--zinc-100);

    .text {
      & p {
        color: var(--zinc-100);
      }
      & span {
        color: var(--zinc-200);
      }
    }

    .bottom_part {
      & > span {
        color: var(--zinc-300);
      }
    }
  }
}
</style>
