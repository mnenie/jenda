<script setup lang="ts">
import { computed, ref } from 'vue';
import { useDark } from '@vueuse/core';
import { UiButton } from '@/shared/ui';
import { ChevronRight } from 'lucide-vue-next';
import { RouteNames } from '@/shared/config/consts';
import { redirect } from '@/shared/lib/helpers';

const isDark = useDark();

const isHovered = ref(false);

function onMouseEnter() {
  isHovered.value = true;
}

function onMouseLeave() {
  isHovered.value = false;
}

const arrowMargin = computed(() => {
  return isHovered.value ? '4px' : '0px';
});
</script>

<template>
  <section id="about" :class="$style.container">
    <div
      :class="$style.badge"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
      @click="redirect('https://github.com/mnenie/jenda')"
    >
      <span style="margin-right: 3px">✨</span>
      <span class="text-sm">{{ $t('welcome.about.badge') }}</span>
      <ChevronRight :size="14" :class="$style.arrow" :style="{ marginLeft: arrowMargin }" />
    </div>
    <h1>{{ $t('welcome.about.tagline') }}</h1>
    <p class="text-lg">
      {{ $t('welcome.about.description') }}
    </p>
    <div :class="$style.btns">
      <UiButton @click="$router.push({ name: RouteNames.registration })">
        {{ $t('welcome.about.btn') }}
      </UiButton>
      <UiButton
        variant="outline"
        :class="$style.btn_git"
        @click="redirect('https://github.com/mnenie/jenda')"
      >
        <img :src="!isDark ? '/icons/github.png' : '/icons/github-d.png'" />
        GitHub
      </UiButton>
    </div>
  </section>
</template>

<style module lang="scss">
.container {
  display: flex;
  margin: 0 auto;
  max-width: 980px;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 0 16px;

  & > h1 {
    margin-bottom: 2px;
    text-align: center;
    font-size: 76px;
    font-weight: 600;
    line-height: 1.25;
    letter-spacing: -0.05em;
  }

  & > p {
    max-width: 600px;
    text-align: center;
    color: var(--zinc-500);
  }

  .badge {
    background-color: var(--zinc-100);
    padding: 2px 10px;
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    border-radius: 8px;
    color: var(--zinc-500);

    .arrow {
      transition: 0.2s ease-in;
    }
  }

  .btns {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 16px;
    padding: 12px 0;

    .btn_git {
      & > img {
        width: 16px;
        height: 16px;
        margin-right: 6px;
      }
    }
  }
}

:global(html.dark) {
  .container {
    .badge {
      background-color: var(--zinc-600);
      color: var(--zinc-300);
    }
    & > p {
      color: var(--zinc-300);
    }
  }
}

@media screen and (max-width: 1220px) {
  .container {
    & > h1 {
      font-size: 68px;
    }
  }
}

@media screen and (max-width: 1152px) {
  .container {
    & > h1 {
      font-size: 64px;
    }
  }
}

@media screen and (max-width: 1100px) {
  .container {
    & > h1 {
      font-size: 62px;
    }
  }
}

@media screen and (max-width: 890px) {
  .container {
    & > h1 {
      font-size: 54px;
    }
  }
}

@media screen and (max-width: 680px) {
  .container {
    & > h1 {
      font-size: 44px;
    }
    & > p {
      max-width: 480px;
    }
  }
}

@media screen and (max-width: 520px) {
  .container {
    gap: 8px;
    .badge{
      margin-bottom: 10px;
      justify-content: center;

      & span {
        text-align: center
      }
    }
  }
}
</style>
