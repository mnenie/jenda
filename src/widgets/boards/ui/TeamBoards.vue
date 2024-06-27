<script setup lang="ts">
import type { BoardPreview } from '@/entities/board/model';
import { UserAvatar } from '@/entities/user';
import type { UserType } from '@/entities/user/model';
import { CreationBoard, FilterBoards } from '@/features/boards';
import { computed, ref } from 'vue';

const boards = ref<BoardPreview[]>([
  {
    _id: '0',
    title: 'GTM Campaign',
    description: 'crm system development',
    users: [
      { _id: '0', email: 'al', photoUrl: 'https://www.shadcn-vue.com/avatars/02.png' },
      { _id: '1', email: 'al', photoUrl: 'https://www.shadcn-vue.com/avatars/03.png' },
      { _id: '2', email: 'al', photoUrl: 'https://www.shadcn-vue.com/avatars/05.png' }
    ]
  }
]);

const userPosition = computed(() => {
  return (board: BoardPreview, user: UserType) => {
    return (board.users.length - 1 - +user._id!) * 12;
  };
});
</script>

<template>
  <div :class="$style.boards_inside">
    <div :class="$style.top_part">
      <div>
        <h4 class="heading-4">Boards in this team</h4>
        <p class="text-sm" style="color: var(--zinc-500)">
          All your active boards are located here, which you can switch to and work on
        </p>
      </div>
      <FilterBoards />
    </div>
    <div :class="$style.container">
      <CreationBoard />
      <div v-for="board in boards" :key="board._id" :class="$style.active_board">
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
    </div>
  </div>
</template>

<style module lang="scss">
.boards_inside {
  margin-bottom: 70px;

  .top_part {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .container {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-top: 20px;
    width: 100%;
    overflow-x: auto;
    scroll-behavior: smooth;
    padding-bottom: 10px;
  }

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
}
</style>
