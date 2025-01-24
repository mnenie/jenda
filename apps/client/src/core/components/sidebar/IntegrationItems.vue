<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js'
import type { IntegrationItem } from '../../types'
import { redirect } from '@/shared/helpers/redirectBlank'
import { UiBadge, UiButton } from '@/shared/ui'
import { useExpandedContext } from '@/shared/composables/expanded'

const items = [
  { name: 'GitLab', icon: 'devicon:gitlab', link: 'https://gitlab.com/' },
  { name: 'Notion', icon: 'devicon:notion', link: 'https://notion.so/' },
  { name: 'Yandex Kassa', icon: 'brandico:yandex', link: 'https://yookassa.ru/' },
] satisfies IntegrationItem[]

const { isExpanded } = useExpandedContext()
</script>

<template>
  <div
    class="flex items-center justify-between w-full pt-0 pb-3"
    :class="[isExpanded ? 'px-2' : 'px-1']"
  >
    <p
      class="text-neutral-500 dark:text-neutral-400 text-small capitalize text-ellipsis
        whitespace-nowrap overflow-hidden"
    >
      {{ $t('sidebar.integrations') }}
    </p>
  </div>
  <div class="flex flex-col gap-5px justify-start mb-20px">
    <UiButton
      v-for="{ name, icon, link }, idx in items"
      :key="idx"
      variant="ghost"
      size="sm"
      :disabled="name === 'Notion'"
      class="w-full gap-2 shadow-none py-0 px-2 transition-all duration-200 ease"
      :class="[isExpanded ? 'justify-between' : 'justify-center']"
      :style="{ padding: !isExpanded ? '0px' : '' }"
      @click="redirect(link)"
    >
      <div class="flex items-center gap-2">
        <Icon
          :inline="true"
          :icon="icon"
          class="!w-16px !h-16px 2xl:(!w-4 !h-4) text-neutral-800 dark:text-neutral-200"
          :class="[idx === 2 && '!w-3.6 !h-3.6 !text-#fc4714']"
        />
        <span v-show="isExpanded" class="text-default !fw500 text-neutral-900 dark:text-neutral-100">{{ name }}</span>
      </div>
      <UiBadge v-if="name === 'Notion' && isExpanded" variant="outline" class="px-1 py-0 text-11px shadow-none">
        {{ $t('sidebar.soon') }}
      </UiBadge>
    </UiButton>
  </div>
</template>
