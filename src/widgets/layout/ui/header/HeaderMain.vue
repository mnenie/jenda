<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { UiButton } from '@/shared/ui';
import { Link } from 'lucide-vue-next';
import UserMenu from './UserMenu.vue';

const { t } = useI18n();
</script>

<template>
  <div :class="$style.header">
    <div :class="$style.about">
      <div :class="$style.workspace_part">
        <div :class="$style.box">
          <span>1a</span>
        </div>
        <div :class="$style.name">
          <p class="text-base" style="font-weight: 500; line-height: 22px">My Workspace</p>
          <span class="text-xs">1alexpeshkov@gmail.com</span>
        </div>
      </div>
    </div>
    <div />
    <div :class="$style.user_section">
      <UiButton :variant="'secondary'" :class="$style.upgrade"> {{ t('header.upgrade') }} </UiButton>
      <UiButton :variant="'secondary'">
        <Link :size="18" style="margin-right: 8px" />
        <span>{{ t('header.collaboration') }}</span>
      </UiButton>
      <UserMenu />
    </div>
  </div>
</template>

<style module lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 15px;
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

        & > span {
          color: var(--zinc-900);
        }
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

:global(html.dark) {
  .header {
    border-color: var(--dark-border);

    .about {
      .workspace_part {
        .box {
          background: rgba(var(--zinc-rgb-600), 0.8);
          & > span {
            color: var(--zicn-600);
          }
        }
      }
    }

    .user_section {
      .upgrade {
        color: var(--zinc-100);
      }
    }
  }
}
</style>
