<script setup lang="ts">
import { UserAvatar } from '@/entities/user';
import { UiButton } from '@/shared/ui';
import { Link } from 'lucide-vue-next';
</script>

<template>
  <div :class="$style.header">
    <div :class="$style.about">
      <div :class="$style.workspace_part">
        <div :class="$style.box">
          <span style="color: var(--zinc-900)">T</span>
        </div>
        <div :class="$style.name">
          <p class="text-base" style="font-weight: 500; line-height: 22px;">Test Workspace</p>
          <span class="text-xs">Boards</span>
        </div>
      </div>
    </div>
    <div :class="$style.user_section">
      <UiButton :size="'lg'" style="background-color: var(--purple-main)"> Upgrade "Pro" </UiButton>
      <UiButton :size="'lg'" :variant="'secondary'">
        <Link :size="18" style="margin-right: 8px" />
        <span>Invite members</span>
      </UiButton>
      <UserAvatar>
        <img src="https://www.shadcn-vue.com/avatars/02.png" style="width: 100%" />
      </UserAvatar>
    </div>
  </div>
</template>

<style module lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 15px;
  border-bottom: 1px solid var(--zinc-200);
  width: 100%;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

  .about {
    display: flex;
    align-items: center;
    gap: 14px;

    .workspace_part {
      display: flex;
      align-items: center;
      gap: 6px;
      cursor: default;

      .box {
        background: rgba(228, 228, 231, 0.6);
        width: 38px;
        height: 38px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 6px;
      }

      .name {
        display: flex;
        flex-direction: column;
      }
    }
  }

  .user_section {
    display: flex;
    align-items: center;
    height: 100%;
    gap: 10px;
  }
}
</style>
