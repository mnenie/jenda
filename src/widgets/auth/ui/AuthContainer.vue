<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useDark, useWindowSize } from '@vueuse/core';
import { useI18n } from 'vue-i18n';
import { GoogleOauth, PrivacyPolicy } from '@/features/auth';
import { RouteNames } from '@/shared/config/consts';
import { ChevronLeft } from 'lucide-vue-next';
import { UiAlert } from '@/shared/ui';

const route = useRoute();
const { t } = useI18n();
const { width } = useWindowSize();

const isDark = useDark();

const isWarningOpen = ref(true);

const title = computed(() => {
  return route.name === RouteNames.login
    ? t('authentication.login.title')
    : t('authentication.registration.title');
});
const info = computed(() => {
  return route.name === RouteNames.login
    ? t('authentication.login.description')
    : t('authentication.registration.description');
});
</script>

<template>
  <div :class="$style.container">
    <div :class="$style.container_inside">
      <div v-if="width > 1100" :class="$style.top_part" @click="$router.push({ name: RouteNames.welcome })">
        <img :src="isDark ? '/icons/kanban-dark.png' : '/icons/kanban.png'" />
        <h3 class="text-xl">Jenda</h3>
      </div>
      <div v-else :class="$style.mobile_navigation">
        <div :class="$style.arrow_container" @click="$router.push({ name: RouteNames.welcome })">
          <ChevronLeft :class="$style.icon" :size="20" />
          <span class="text-sm">{{ t('authentication.back') }}</span>
        </div>
      </div>
      <div :class="$style.form_wrapper">
        <UiAlert
          v-if="isWarningOpen"
          variant="warning"
          closable
          :class="$style.warning"
          @close="isWarningOpen = false"
        >
          <span class="text-sm"
            >aвторизация через <span style="font-weight: 600">google</span> будет заменена на
            <span style="font-weight: 600">gitlab</span> после 10.11.2024</span
          >
        </UiAlert>
        <h2 class="heading-2">{{ title }}</h2>
        <p :class="[$style.info_text, 'text-sm']">{{ info }}</p>

        <slot />

        <div :class="[$style.line_container, 'text-xs']">
          <div :class="$style.line" />
          <span>{{ t('authentication.line') }}</span>
          <div :class="$style.line" />
        </div>
        <GoogleOauth />
        <PrivacyPolicy />
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.container {
  position: relative;
  height: 100%;
  width: 68%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 2rem;
  padding-left: 2rem;

  .container_inside {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    flex-direction: column;

    .top_part {
      position: absolute;
      left: 32px;
      top: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      cursor: pointer;

      & img {
        width: 28px;
        height: 28px;
      }

      & h1 {
        font-weight: 500 !important;
      }
    }

    .mobile_navigation {
      position: absolute;
      left: 150px;
      top: 30px;
      display: flex;
      align-items: center;
      gap: 6px;
      cursor: pointer;
      max-width: 700px;

      .arrow_container {
        display: flex;
        align-items: center;
        gap: 4px;

        & span {
          margin-top: 1px;
          font-weight: 500 !important;
        }
        .icon {
          color: var(--zinc-600);
        }
      }
    }

    .form_wrapper {
      position: relative;
      display: flex;
      width: 460px;
      flex-direction: column;
      gap: 8px;

      .info_text {
        padding-bottom: 20px;
        color: #72717a;
        margin-top: -6px;
      }

      .line_container {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        text-transform: uppercase;
        padding: 18px 0;

        .line {
          width: 100%;
          height: 1px;
          background-color: var(--zinc-200);
        }

        & span {
          padding: 0 8px;
          color: #72717a;
          white-space: nowrap;
        }
      }
    }
  }
}

:global(html.dark) {
  .container {
    background-color: var(--zinc-800);
    .container_inside {
      .mobile_navigation {
        & span,
        .icon {
          color: var(--zinc-200);
        }
      }
      .form_wrapper {
        .info_text {
          color: var(--zinc-300);
        }
        .line_container {
          .line {
            background-color: var(--zinc-600);
          }
          & span {
            color: var(--zinc-300);
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1440px) {
  .container {
    width: 80%;
  }
}

@media screen and (max-width: 1200px) {
  .container {
    .container_inside {
      .form_wrapper {
        width: 360px;
      }
    }
  }
}

@media screen and (max-width: 1100px) {
  .container {
    width: 100%;
    .container_inside {
      .form_wrapper {
        width: 460px;
      }
    }
  }
}

@media screen and (max-width: 890px) {
  .container {
    .container_inside {
      .mobile_navigation {
        left: 80px;
      }
      .form_wrapper {
        width: 380px;
      }
    }
  }
}

@media screen and (max-width: 580px) {
  .container {
    .container_inside {
      .mobile_navigation {
        left: 20px;
      }
    }
  }
}

@media screen and (max-width: 520px) {
  .container {
    .container_inside {
      .mobile_navigation {
        left: 15px;
        top: 15px;
      }
      .form_wrapper {
        width: 100%;
      }
    }
  }
  .warning {
    margin-bottom: 6px;
  }
}

@media screen and (max-width: 420px) {
  .container {
    .container_inside {
      .mobile_navigation {
        left: 15px;
        top: 15px;
      }
      .form_wrapper {
        width: 100%;
      }
    }
  }
}
</style>
