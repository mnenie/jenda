<script setup lang="ts" generic="T extends Board">
import { computed, shallowReactive, toRef } from 'vue';
import { useLayoutPaths } from '@/shared/lib/composables';
import UserMenu from './UserMenu.vue';
import { Project, Plus } from '@/shared/assets/icons';
import { UserAvatar, type User } from '@/entities/user';
import { links } from '../../model';
import type { Board } from '@/entities/board';
import type { ProjectLink } from '@/shared/config/types-shared';

const props = defineProps<{
  projects: Board[];
}>();

const userPosition = computed(() => {
  return (users: User[], u: User) => {
    return (users.length - 1 - +u._id!) * 18;
  };
});

const users = shallowReactive<User[]>([
  {
    _id: '0',
    email: 'alex@gmail.com',
    photoUrl: 'https://avatars.githubusercontent.com/u/121057011?v=4'
  },
  {
    _id: '1',
    email: 'airat@gmail.com',
    photoUrl: 'https://avatars.githubusercontent.com/u/95149637?s=100&v=4'
  }
]);

const _projects = toRef(props, 'projects') as unknown as ProjectLink[];

const { active } = useLayoutPaths(links, _projects);
</script>

<template>
  <header :class="$style.header">
    <div :class="$style.about">
      <component :is="active?.icon" :class="$style.icon_main" />
      <Project v-if="active.color" :style="{ color: active.color, fontSize: '20px' }" />
      <p v-if="active" class="text-lg">{{ active.name }}</p>
    </div>
    <div />
    <div :class="$style.right_section">
      <div :class="$style.users_container">
        <template v-for="user in users" :key="user._id">
          <UserAvatar
            :style="{
              right: userPosition(users, user) + 'px',
              zIndex: userPosition(users, user),
              border: `1px solid ${user._id === '0' ? 'var(--blue-secondary)' : 'var(--zinc-300)'}`
            }"
            :class="$style.user"
          >
            <img :src="user.photoUrl" width="100%" />
          </UserAvatar>
        </template>
      </div>
      <div :class="$style.add_user">
        <Plus :class="$style.icon" />
      </div>
      <UserMenu />
    </div>
  </header>
</template>

<style module lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--main-slotted);
  padding: 10px 15px;
  height: 48px;
  border-bottom: 1px solid var(--zinc-200);
  width: 100%;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

  .icon_main {
    color: var(--zinc-800);
    font-size: 20px;
  }

  .about {
    display: inline-flex;
    align-items: center;
    gap: 12px;

    & > p {
      margin-top: 1.5px;
      font-weight: 600;
    }
  }

  .right_section {
    display: flex;
    align-items: center;
    height: 100%;
    gap: 10px;

    .users_container {
      position: relative;
      display: flex;
      align-items: center;
      height: 20px;
      width: 20px;

      .user {
        height: 28px;
        width: 28px;
        position: absolute;
      }
    }

    .add_user {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      padding: 5.8px;
      box-shadow: 0 0 3.5px rgba(0, 0, 0, 0.12);
      margin-right: 6px;

      .icon {
        font-size: 17px;
        color: var(--zinc-600);
        cursor: pointer;
      }
    }
  }
}

:global(html.dark) {
  .header {
    border-color: var(--dark-border);
    .icon_main{
      color: var(--zinc-200);
    }
    .about {
      & > p {
        color: var(--zinc-100);
      }
    }

    .right_section {
      .add_user {
        box-shadow: 0 0 3.5px rgba(255, 255, 255, 0.12);
        .icon {
          color: var(--zinc-300);
        }
      }
    }
  }
}
</style>
