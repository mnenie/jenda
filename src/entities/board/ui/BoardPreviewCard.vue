<script setup lang="ts">
import type { UserType } from '@/entities/user/model';
import type { BoardPreview } from '../model';
import { UserAvatar } from '@/entities/user';
import { computed } from 'vue';

defineProps<{
  board: BoardPreview,
}>()

const userPosition = computed(() => {
  return (board: BoardPreview, user: UserType) => {
    return (board.users.length - 1 - +user._id!) * 12;
  };
});
</script>
<template>
  <div :class="$style.active_board">
    <div>
      <p class="text-base" style="font-weight: 500">{{ board.title }}</p>
      <span class="text-xs" style="color: var(--zinc-500)">{{ board.description }}</span>
    </div>
    <div :class="$style.bottom_part">
      <span class="text-xs" style="color: var(--zinc-500)"> Updated: May 2024</span>
      <div :class="$style.users">
        <template v-for="user in board.users" :key="user._id">
          <UserAvatar
            :class="$style.user"
            :style="{
              right: userPosition(board, user) + 'px',
              zIndex: userPosition(board, user),
              border: `1px solid ${user._id === '0' ? 'var(--purple-main)' : 'var(--zinc-300)'}`
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

  .bottom_part {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;

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
</style>
