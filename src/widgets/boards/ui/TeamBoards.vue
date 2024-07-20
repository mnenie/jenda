<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { BoardPreviewCard } from '@/entities/board';
import type { BoardPreview } from '@/entities/board/model';
import { CreationBoard, FilterBoards } from '@/features/boards';

const { t } = useI18n();

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
</script>

<template>
  <div :class="$style.boards_inside">
    <div :class="$style.top_part">
      <div :class="$style.text">
        <h4 class="heading-4">{{ t('boards.title') }}</h4>
        <p class="text-sm">{{ t('boards.description') }}</p>
      </div>
      <FilterBoards />
    </div>
    <div :class="$style.container">
      <CreationBoard />
      <BoardPreviewCard v-for="board in boards" :key="board._id" :board="board" />
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

    .text {
      & p {
        color: var(--zinc-500);
      }
    }
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

:global(html.dark) {
  .boards_inside {
    .top_part {
      .text {
        & p {
          color: var(--zinc-300);
        }
      }
    }
  }
}
</style>
