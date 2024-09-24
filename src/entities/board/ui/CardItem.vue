<script setup lang="ts">
import { computed } from 'vue';
import { UserAvatar } from '@/entities/user';
import { UiBadge, UiCard } from '@/shared/ui';
import { MessagesSquare } from 'lucide-vue-next';
import type { Card } from '../model';

const props = defineProps<{
  card: Card;
}>();

const colors = ['low', 'medium', 'high', 'none'] as const

const priority = computed(() => {
  const index = colors.indexOf(props.card.priority)
  return index !== -1 && index !== 3 ? `var(--${colors[index]}-color)` : 'white'
});
</script>

<template>
  <UiCard :style="{ backgroundColor: `rgba(${priority}, 0.2)` }" :class="$style.card">
    <div :class="$style.top">
      <div :class="$style.name">
        <span>{{ card.title }}</span>
      </div>
      <div v-if="card.tags?.length !== 0" :class="$style.tags">
        <UiBadge v-for="tag in card.tags" :key="tag._id" variant="secondary" style="width: fit-content">
          {{ tag.name }}
        </UiBadge>
      </div>
    </div>
    <div :class="$style.bottom">
      <div :class="$style.left_container">
        <span> #{{ card._id }}</span>
        <div v-if="card.chat" :class="$style.messages">
          <MessagesSquare :size="14" />
          <span>{{ card.chatCount }}</span>
        </div>
      </div>
      <div :class="$style.right_container">
        <div :class="$style.user_container">
          <UserAvatar v-for="user in card.users" :key="user._id" :class="$style.user">
            <img :src="user.photoUrl" :alt="user.email" style="width: 100%" />
          </UserAvatar>
        </div>
      </div>
    </div>
    <div
      v-if="card.priority !== 'none'"
      :style="{ backgroundColor: `rgb(${priority})` }"
      :class="$style.indicator"
    />
  </UiCard>
</template>

<style module lang="scss">
@import '@/app/styles/mixins';

.card {
  cursor: pointer;
  @include transition;
  @include on-hover {
    background-color: var(--zinc-50);
  }

  .top {
    display: flex;
    flex-direction: column;
    gap: 8px;

    .tags {
      display: flex;
      align-items: center;
      gap: 4px;
    }
  }

  .name {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > span {
      max-width: 200px;
    }
  }

  .user_container {
    display: flex;
    align-items: center;
    gap: 4px;
    height: 21px;

    .user {
      width: 21px;
      height: 21px;
    }
  }

  .indicator {
    width: 20px;
    height: 4px;
    position: absolute;
    top: 0;
    right: 10px;
    border-radius: 0px 0px 4px 4px;
  }

  .bottom {
    margin-top: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .left_container {
      display: flex;
      align-items: center;
      gap: 8px;

      & > span {
        color: var(--zinc-400);
      }

      .messages {
        display: flex;
        align-items: center;
        gap: 1px;
        color: var(--zinc-400);

        & > span {
          font-size: 11px;
        }
      }
    }

    .right_container {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
}

:global(html.dark) {
  .card {
    background-color: rgba(var(--zinc-rgb-600), 0.4);
    border-color: var(--zinc-600);
    color: var(--zinc-100);
    .bottom {
      .left_container {
        & > span {
          color: var(--zinc-300);
        }
        .messages {
          color: var(--zinc-300);
        }
      }
    }
  }
}
</style>
