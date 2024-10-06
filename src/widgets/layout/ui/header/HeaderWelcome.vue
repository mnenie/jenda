<script setup lang="ts">
import { computed, ref, shallowReactive } from 'vue';
import { useDark, useToggle, useWindowSize } from '@vueuse/core';
import { useLanguage, useScroll } from '@/shared/lib/composables';
import { useI18n } from 'vue-i18n';
import { UiButton, UiSelect } from '@/shared/ui';
import { redirect } from '@/shared/lib/helpers';
import { RouteNames } from '@/shared/config/consts';
import { Globe, Moon, Sun } from 'lucide-vue-next';
import type { Options } from '@/shared/ui/select/types';
import { headerLinks } from '../../model';
import type { HeaderNavLink } from '../../model';
import { BurgerMenu } from '@/features/menu';

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
const { scrollToEl } = useScroll(links.value.map((link) => link.pagePrefix));
const { width } = useWindowSize();
</script>

<template>
  <header :class="$style.header_welcome">
    <slot name="offer" />
    <section :class="$style.containers">
      <div :class="$style.left_container">
        <div v-if="width >= 1152" :class="$style.box">
          <div :class="$style.inside">
            <div :class="$style.name_container" @click="redirect('https://github.com/mnenie/jenda')">
              <img :src="iconUrl" />
              <h3 class="text-xl">Jenda</h3>
            </div>
            <UiButton
              v-for="link in links"
              :key="link.id"
              variant="ghost"
              size="sm"
              :class="$style.item"
              @click="scrollToEl(link.pagePrefix)"
            >
              {{ link.name }}
            </UiButton>
          </div>
        </div>
        <div v-else :class="$style.name_container" @click="redirect('https://github.com/mnenie/jenda')">
          <img :src="iconUrl" />
          <h3 class="heading-3">Jenda</h3>
        </div>
        <div :class="$style.additional">
          <UiSelect v-model="language" :options="languages" as="btn">
            <Globe :size="16" />
          </UiSelect>
          <div :class="$style.separator" />
          <UiButton
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
      <div v-if="width >= 1152" :class="$style.btns">
        <UiButton variant="ghost" style="font-weight: 500" @click="$router.push({ name: RouteNames.login })">
          {{ t('welcome.header.login') }}
        </UiButton>
        <UiButton @click="$router.push({ name: RouteNames.registration })">
          {{ t('welcome.header.reg') }}
        </UiButton>
      </div>
      <BurgerMenu v-else />
    </section>
  </header>
</template>

<style module lang="scss">
@import '@/app/styles/mixins';

.header_welcome {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  display: flex;
  justify-self: center;
  flex-direction: column;
  gap: 10px;
  max-width: 1800px;
  width: 100%;
  padding: 12px 16px;

  .containers {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

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
    user-select: none;

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
    background-color: #313131;
    border-color: var(--zinc-600);
    box-shadow: 0 3px 2px 0 rgb(0 0 0 / 0.05);
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

@media screen and (max-width: 1152px) {
  .header_welcome{
    max-width: 1064px;
  }
}

@media screen and (max-width: 992px) {
  .header_welcome{
    max-width: 900px;
  }
}
</style>
