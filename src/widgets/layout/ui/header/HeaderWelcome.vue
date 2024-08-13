<script setup lang="ts">
import { computed, ref, shallowReactive } from 'vue';
import { useDark, useToggle } from '@vueuse/core';
import { useLanguage } from '@/shared/lib/composables';
import { useI18n } from 'vue-i18n';
import { UiButton, UiSelect } from '@/shared/ui';
import { redirect } from '@/shared/lib/helpers';
import { RouteNames } from '@/shared/config/consts';
import { Globe, Moon, Sun } from 'lucide-vue-next';
import type { Options } from '@/shared/ui/select/types';
import { headerLinks } from '../../config/headerNavs';
import type { HeaderNavLink } from '../../types';

const isDark = useDark();
const toggleDark = useToggle(isDark);

const { tm, t } = useI18n();

const iconUrl = computed(() => {
  return isDark.value ? '/icons/kanban-dark.png' : '/icons/kanban.png';
});

const languages = shallowReactive<Options[]>([
  { name: 'EN', value: 'en-US' },
  { name: 'RU', value: 'ru-RU' },
  { name: 'ZH', value: 'zh-CN' }
]);
const language = ref('');

useLanguage(languages, language);

const links = computed(() => {
  const localeArr = tm('welcome.header.links') as HeaderNavLink[];
  return headerLinks.map((link, index) => ({
    ...link,
    name: localeArr[index]
  }));
});
</script>

<template>
  <div :class="$style.header_welcome">
    <div :class="$style.left_container">
      <div :class="$style.box">
        <div :class="$style.inside">
          <div :class="$style.name_container" @click="redirect('https://github.com/mnenie/jenda')">
            <img :src="iconUrl" />
            <h3 class="text-xl">Jenda</h3>
          </div>
          <UiButton v-for="link in links" :key="link.id" variant="ghost" size="sm" :class="$style.item">
            {{ link.name }}
          </UiButton>
        </div>
      </div>
      <div :class="$style.additional">
        <UiSelect v-model="language" :options="languages" as="btn">
          <Globe :size="16" />
        </UiSelect>
        <div :class="$style.separator" />
        <UiButton
          v-tooltip="'Change theme'"
          variant="ghost"
          size="sm"
          :class="$style.btn"
          @click="toggleDark()"
        >
          <Moon v-if="!isDark" :size="17" />
          <Sun v-else :size="17" />
        </UiButton>
      </div>
    </div>
    <div :class="$style.btns">
      <UiButton variant="ghost" style="font-weight: 500" @click="$router.push({ name: RouteNames.login })">
        {{ t('welcome.header.login') }}
      </UiButton>
      <UiButton @click="$router.push({ name: RouteNames.registration })">
        {{ t('welcome.header.reg') }}
      </UiButton>
    </div>
  </div>
</template>

<style module lang="scss">
@import '@/app/styles/mixins';

.header_welcome {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1040;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 16px;

  .name_container {
    display: flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;
    margin-right: 8px;

    & > img {
      width: 22px;
      height: 22px;
    }
  }

  .btns {
    display: flex;
    align-items: center;
    gap: 6px;

    .ghost_exception {
      font-weight: 500;
    }
  }

  .inside {
    display: flex;
    align-items: center;
    gap: 2px;

    .item {
      color: var(--zinc-400);
      font-weight: 500;
      cursor: pointer;

      @include on-hover {
        color: var(--zinc-700);
      }
    }
  }

  .left_container {
    display: inline-flex;
    align-items: center;
    gap: 8px;

    .additional {
      display: flex;
      align-items: center;
      gap: 4px;

      .btn {
        padding: 8px;
        gap: 4px;
        color: var(--zinc-300);

        @include on-hover {
          color: var(--zinc-600);
        }
      }
    }
  }
}

.separator {
  width: 1px;
  height: 16px;
  background-color: var(--zinc-200);
}

.box {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  padding: 0px 10px 0px 15px;
  height: 40px;
  border-radius: 8px;
  border: 0.5px solid #e3e4e8;
  background: #fff;
  box-shadow:
    0 12px 40px 0 rgba(0, 0, 0, 0.06),
    0 1px 0 0 rgba(0, 0, 0, 0.04);
}

:global(html.dark) {
  .box {
    background-color: rgba(var(--zinc-rgb-600), 0.4);
    border-color: var(--zinc-600);
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  }
  .separator {
    background-color: var(--zinc-600);
  }
  .header_welcome {
    .inside {
      .item {
        color: var(--zinc-300);
        @include on-hover {
          color: var(--zinc-200);
          background-color: var(--zinc-600);
        }
      }
    }
    .left_container {
      .additional {
        .btn {
          @include on-hover {
            color: var(--zinc-200);
          }
        }
      }
    }
  }
}
</style>
