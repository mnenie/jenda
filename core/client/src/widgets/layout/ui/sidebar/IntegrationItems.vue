<script setup lang="ts">
import { UiBadge, UiButton } from '@/shared/ui'
import { Icon } from '@iconify/vue/dist/iconify.js'

defineProps<{
  isExpanded: boolean
}>()

interface Integration {
  name: string
  icon: string
}
const items = [
  { name: 'GitLab', icon: 'devicon:gitlab' },
  { name: 'Notion', icon: 'devicon:notion' },
  { name: 'Yandex Kassa', icon: 'brandico:yandex' },
] satisfies Integration[]
</script>

<template>
  <div
    class="flex items-center justify-between w-full pt-0 pb-3"
    :class="[isExpanded ? 'px-2' : 'px-1']"
  >
    <p
      class="text-neutral-500 dark:text-neutral-400 text-xs capitalize text-ellipsis
        whitespace-nowrap overflow-hidden"
    >
      {{ $t('sidebar.integrations') }}
    </p>
  </div>
  <div class="flex flex-col gap-5px justify-start mb-20px">
    <UiButton
      v-for="{ name, icon }, idx in items"
      :key="idx"
      variant="ghost"
      :disabled="name === 'Notion'"
      class="w-full gap-2 shadow-none py-0 px-2 transition-all duration-200 ease"
      :class="[isExpanded ? 'justify-between' : 'justify-center']"
      :style="{ padding: !isExpanded ? '0px' : '' }"
    >
      <div class="flex items-center gap-2">
        <Icon
          :inline="true"
          :icon="icon"
          class="text-17px text-neutral-800 dark:text-neutral-200"
          :class="[idx === 2 && '!w-3.6 !h-3.6 !text-#fc4714']"
        />
        <span v-show="isExpanded" class="text-sm !fw500 text-neutral-900 dark:text-neutral-100">{{ name }}</span>
      </div>
      <UiBadge v-if="name === 'Notion' && isExpanded" variant="outline" class="px-1 py-0 text-11px shadow-none">
        {{ $t('sidebar.soon') }}
      </UiBadge>
    </UiButton>
  </div>
</template>
