<script setup lang="ts">
import type { Link, SectionItem } from '../model/types'
import { useScroll } from '@/shared/lib/composables'
import { redirect } from '@/shared/lib/helpers'
import { ArrowUpRight, Bookmark, Menu, X } from 'lucide-vue-next'
import { computed, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { items as _items, links as _links } from '../model/fixtures'

const isOpen = ref(false)

watch(isOpen, (newVal) => {
  document.body.style.overflow = newVal ? 'hidden' : ''
})

const { tm } = useI18n()

const items = computed(() => {
  const _arr = tm('welcome.mobile.section_blocks') as Omit<SectionItem[], 'icon' | 'urlPrefix'>
  return _items.map((item, i) => ({
    ...item,
    title: _arr[i].title,
    description: _arr[i].description,
  }))
})

const links = computed(() => {
  const _arr = tm('welcome.mobile.links') as Omit<Link[], 'url'>
  return _links.map((link, i) => ({
    ...link,
    title: _arr[i].title,
  }))
})

const { scrollToEl } = useScroll(items.value.map(i => i.urlPrefix))
</script>

<template>
  <Teleport to="body">
    <div v-if="isOpen" :class="[$style.overlay]" @click="isOpen = false" />
    <div :class="[$style.menu, isOpen ? $style.menu_opened : '']">
      <div :class="$style.container">
        <div v-for="(link, index) in links" :key="index" :class="$style.link" @click="redirect(link.url)">
          <p class="text-lg">
            {{ link.title }}
          </p>
          <ArrowUpRight :class="$style.icon_inside" :size="18" />
        </div>
        <div :class="$style.sections">
          <div
            v-for="(i, index) in items"
            :key="index"
            :class="$style.section_block"
            @click="(isOpen = false), scrollToEl(i.urlPrefix)"
          >
            <div :class="$style.top_part">
              <span class="heading-3">{{ i.icon }}</span>
              <Bookmark :class="$style.icon_inside" :size="18" />
            </div>
            <div :class="$style.about">
              <h4 class="heading-3">
                {{ i.title }}
              </h4>
              <p class="text-base">
                {{ i.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
  <Menu v-show="!isOpen" :class="$style.icon" @click="isOpen = true" />
  <X v-show="isOpen" :class="$style.icon" @click="isOpen = false" />
</template>

<style module lang="scss">
.icon {
  color: var(--zinc-600);
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
  transition: opacity 250ms ease-in-out;
  opacity: 0;
  pointer-events: none;
}

.menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;
  padding: 76px 16px 32px;
  background: #fff;
  z-index: 10;
  transform: translateY(-100%);
  transition:
    transform 300ms,
    opacity 300ms;
  opacity: 0;
  animation-timing-function: cubic-bezier(0.05, 0.7, 0.1, 1);
  pointer-events: none;
  overflow-y: auto;

  .container {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .link {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 16px;
      border-radius: 8px;
      background: var(--zinc-50);
      border: 0.5px solid transparent;
      -webkit-transition: 0.1s ease all;
      transition: 0.1s ease all;
      cursor: pointer;
    }

    .sections {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(calc(33% - 8px), 1fr));
      grid-gap: 10px;
      margin-top: 2px;

      .section_block {
        display: flex;
        flex-direction: column;
        min-height: 160px;
        padding: 16px;
        border-radius: 8px;
        background: var(--zinc-50);

        .top_part {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .about {
          margin-top: auto;

          & > h3 {
            margin-bottom: 3px;
          }

          & > p {
            color: var(--zinc-700);
          }
        }
      }
    }

    .icon_inside {
      color: var(--zinc-300);
    }
  }
}

.menu_opened {
  transform: translateY(0);
  opacity: 1;
  pointer-events: all;
}

.menu_opened + .overlay {
  opacity: 1;
  pointer-events: all;
}

:global(html.dark) {
  .icon {
    color: var(--zinc-200);
  }
  .menu {
    background: var(--zinc-700);
    .link {
      background: var(--zinc-600);
    }
    .sections {
      .section_block {
        background: var(--zinc-600);
        .about {
          & > h3 {
            color: var(--zinc-200);
          }
          & > p {
            color: var(--zinc-300);
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .menu {
    .container {
      .sections {
        grid-template-columns: 100%;
      }
    }
  }
}

@media screen and (max-width: 420px) {
  .menu {
    .container {
      .sections {
        .section_block {
          min-height: 100px;
        }
      }
    }
  }
}
</style>
