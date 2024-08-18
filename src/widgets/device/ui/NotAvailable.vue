<script setup lang="ts">
import { useDark } from '@vueuse/core';
import { UiBadge, UiButton } from '@/shared/ui';
import { redirect } from '@/shared/lib/helpers';
import { TriangleAlert } from 'lucide-vue-next';

const isDark = useDark();
</script>

<template>
  <div class="container">
    <div :class="$style.items">
      <div :class="$style.name">
        <TriangleAlert
          :class="$style.icon"
          :color="!isDark ? 'rgb(39 39 42)' : 'rgb(212 212 216)'"
          :stroke-width="1"
        />
        <UiBadge variant="secondary" :class="$style.badge">dev 🔧</UiBadge>
      </div>
      <h2 class="heading-2">Jenda is not available for your device type :/</h2>

      <p class="text-sm">
        Please use our application on devices such as laptops or computers. For more information contact with
        us.
      </p>
      <div :class="$style.btns">
        <UiButton variant="outline" :class="$style.btn" @click="redirect('https://github.com/mnenie/jenda')">
          <img :src="!isDark ? '/icons/github.png' : '/icons/github-d.png'" />
          GitHub
        </UiButton>
        <UiButton variant="outline" :class="$style.btn" @click="redirect('https://t.me/youngjuicycashrussia')">
          <img src="/icons/telegram.webp" />
          Telegram
        </UiButton>
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.items {
  position: relative;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  .icon {
    position: relative;
    margin-bottom: -4px;
    height: 180px;
    width: 180px;
    margin-top: -32px;
  }

  & > img {
    width: 200px;
  }

  .name {
    position: relative;
  }

  & >  h2{
    margin-bottom: 4px;
  }

  & > p {
    margin-bottom: 16px;
    color: var(--zinc-500);
  }

  .btns {
    display: flex;
    align-items: center;
    gap: 16px;

    .btn {
      & > img {
        width: 16px;
        height: 16px;
        margin-right: 6px;
      }
    }
  }

  .badge {
    position: absolute;
    bottom: 40px;
    right: 0;
  }
}

:global(html.dark){
  .items {
    & > p {
      color: var(--zinc-300);
    }
  }
}
</style>
