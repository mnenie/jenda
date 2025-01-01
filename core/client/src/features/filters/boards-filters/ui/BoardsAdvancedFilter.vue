<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { createReusableTemplate } from '@vueuse/core'
import { UiBadge, UiButton, UiCommand, UiCommandEmpty, UiCommandGroup, UiCommandInput, UiCommandItem, UiCommandList, UiPopover, UiPopoverContent, UiPopoverTrigger } from '@/shared/ui'
import { cn } from '@/shared/libs/shadcn/utils'

interface Option {
  value: string
  label: string
  color?: string
}

const { t, tm } = useI18n()

const statuses = tm('boards.filters.advanced.statuses.arr') as Readonly<Option[]>

// Data from backend
const labels = [
  {
    color: 'bg-purple-500 dark:bg-purple-400',
    value: 'company',
    label: 'feat: company',
  },
  {
    color: 'bg-green-500 dark:bg-green-400',
    value: 'renovate',
    label: 'cd: renovate',
  },
] satisfies Option[]

const selectedValues = ref<string[]>([])

function onSelected(option: Option) {
  const index = selectedValues.value.indexOf(option.value)
  if (index > -1) {
    selectedValues.value.splice(index, 1)
  }
  else {
    selectedValues.value.push(option.value)
  }
}

const [DefineTemplate, ReuseTemplate] = createReusableTemplate()
</script>

<template>
  <DefineTemplate v-slot="{ data, prefix }">
    <UiCommandGroup :heading="t(`boards.filters.advanced.${prefix}.title`)">
      <UiCommandItem
        v-for="i in data"
        :key="i.value"
        class="flex items-center justify-between"
        :value="i.value"
        @select="onSelected(i)"
      >
        <span v-if="prefix === 'statuses'">{{ i.label }}</span>
        <div v-else class="flex items-center gap-2">
          <UiBadge :class="cn(i.color, 'shadow-none px-1 py-0.5')" />
          <span>{{ i.label }}</span>
        </div>
        <div class="flex h-4 w-4 items-center justify-center">
          <div
            v-if="selectedValues.includes(i.value)"
            i-lucide-check
            class="h-4 w-4"
          />
        </div>
      </UiCommandItem>
    </UiCommandGroup>
  </DefineTemplate>
  <UiPopover>
    <UiPopoverTrigger as-child>
      <UiButton size="sm" variant="outline" class="px-2">
        <span>{{ t('boards.filters.advanced.title') }}</span>
        <div class="w-4 h-4 flex items-center justify-center text-neutral-600 dark:text-neutral-300 text-xs bg-neutral-100 dark:bg-neutral-700 rounded-full">
          {{ selectedValues.length }}
        </div>
        <div class="w-px h-4 bg-neutral-200 dark:bg-neutral-700" />
        <span i-lucide-chevron-down class="w-4 h-4 text-neutral-500" />
      </UiButton>
    </UiPopoverTrigger>
    <UiPopoverContent align="start" class="w-57 p-0">
      <UiCommand>
        <UiCommandInput :placeholder="t('sidebar.input')" />
        <UiCommandList>
          <UiCommandEmpty class="p-2">
            {{ t('boards.filters.advanced.empty') }}
          </UiCommandEmpty>
          <ReuseTemplate :data="statuses" prefix="statuses" />
          <ReuseTemplate :data="labels" prefix="labels" />
        </UiCommandList>
      </UiCommand>
    </UiPopoverContent>
  </UiPopover>
</template>
