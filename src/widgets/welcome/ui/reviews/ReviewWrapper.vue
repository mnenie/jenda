<script setup lang="ts">
import { UserAvatar } from '@/entities/user';
import type { ReviewWrapper } from '../../model';

defineProps<{
  review?: Partial<ReviewWrapper>;
}>();
</script>

<template>
  <div :class="$style.wrapper">
    <div :class="$style.card">
      <div :class="$style.about">
        <UserAvatar style="width: 34px; height: 34px">
          <img style="width: 100%" :src="review?.img" />
        </UserAvatar>
        <div :class="$style.name">
          <p class="text-base">{{ review?.name }}</p>
          <span class="text-sm">{{ review?.status }}</span>
        </div>
      </div>
      <blockquote class="text-base">{{ `“${review?.comment}”` }}</blockquote>
    </div>
  </div>
</template>

<style module lang="scss">
.wrapper {
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: stretch;
  margin-bottom: 100px;

  .card {
    padding: 6px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .about {
      position: relative;
      display: flex;
      align-items: center;
      gap: 10px;

      .name {
        & > p {
          margin-bottom: 2px;
          color: var(--zinc-800);
        }
        & > span {
          margin-bottom: 2px;
          color: var(--zinc-500);
        }
      }
    }

    blockquote {
      font-size: 16px;
      color: var(--zinc-600);
      font-weight: 500;
    }
  }
}

:global(html.dark) {
  .wrapper {
    .card {
      .about {
        .name {
          & > p {
            color: var(--zinc-200);
          }
          & > span {
            color: var(--zinc-400);
          }
        }
      }
      blockquote {
        color: var(--zinc-200);
      }
    }
  }
}
</style>
