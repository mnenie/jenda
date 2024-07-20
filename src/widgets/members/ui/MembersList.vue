<script setup lang="ts">
import { UserAvatar } from '@/entities/user';
import type { UserType } from '@/entities/user/model';
import { UiBadge } from '@/shared/ui';
import { useI18n } from 'vue-i18n';

defineProps<{
  members: UserType[];
}>();

const { t } = useI18n();
</script>

<template>
  <ul :class="$style.list">
    <li v-for="member in members" :key="member._id">
      <div :class="$style.info">
        <UserAvatar>
          <img :src="member.photoUrl" alt="member" loading="lazy" />
        </UserAvatar>
        <p class="text-sm">{{ member.email }}</p>
      </div>
      <UiBadge :variant="'secondary'">{{ t(`members.role.${member.role}`) }}</UiBadge>
    </li>
  </ul>
</template>

<style module lang="scss">
.list {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 400px;

  .info {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  & li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4px;
  }

  & img {
    width: 100%;
  }
}
</style>
