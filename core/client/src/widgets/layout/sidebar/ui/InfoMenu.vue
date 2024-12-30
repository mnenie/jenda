<script setup lang="ts">
import { ref } from 'vue'
import { createReusableTemplate } from '@vueuse/core'
import { useExpanded } from '@/shared/composables'
import {
  UiBadge,
  UiButton,
  UiDropdownMenu,
  UiDropdownMenuContent,
  UiDropdownMenuGroup,
  UiDropdownMenuItem,
  UiDropdownMenuTrigger,
} from '@/shared/ui'
import { HotkeysDialog } from '@/widgets/dialogs'

defineProps<{
  isShowPlan?: boolean
}>()

const expanded = useExpanded()
const { isExpanded } = expanded.getExpanded()

const modalOpen = ref(false)

const [DifineTemplate, ReuseTemplate] = createReusableTemplate()
</script>

<template>
  <DifineTemplate v-slot="{ title, icon }">
    <UiDropdownMenuItem>
      <span class="text-sm" :class="icon" />
      <span class="2xl:text-13px text-sm font-medium">{{ title }}</span>
    </UiDropdownMenuItem>
  </DifineTemplate>
  <UiDropdownMenu direction="right">
    <UiDropdownMenuTrigger as-child>
      <UiButton
        v-tooltip.right="{
          content: $t(`sidebar.help.title'`),
          triggers: ['hover'],
          disabled: isExpanded,
        }"
        variant="ghost"
        class="w-full gap-2 shadow-none py-0 px-2 transition-all duration-200 ease justify-between mb-1"
        :class="[isExpanded ? 'justify-between' : 'justify-center p-0']"
      >
        <div class="flex items-center gap-2">
          <div i-hugeicons-mortarboard-02 class="!w-15px !h-15px 2xl:(!w-4 !h-4) text-neutral-800 dark:text-neutral-300" />
          <span v-show="isExpanded" class="text-13px 2xl:text-sm !fw500 text-neutral-900 dark:text-neutral-100">
            {{ $t('sidebar.help.title') }}
          </span>
        </div>
        <UiBadge v-if="isShowPlan" variant="soft" class="w-10 px-1">
          <div class="flex items-center gap-0.5">
            <div i-lucide-stars />
            <span class="!text-10px !fw500">1/3</span>
          </div>
        </UiBadge>
      </UiButton>
    </UiDropdownMenuTrigger>
    <UiDropdownMenuContent align="center" side="right" class="w-102%">
      <UiDropdownMenuGroup>
        <ReuseTemplate
          :title="$t('sidebar.help.items', 0)"
          icon="i-hugeicons-agreement-01"
        />
        <ReuseTemplate
          :title="$t('sidebar.help.items', 1)"
          icon="i-hugeicons-book-open-01"
          @click="modalOpen = true"
        />
        <ReuseTemplate
          :title="$t('sidebar.help.items', 2)"
          icon="i-hugeicons-link-forward"
        />
      </UiDropdownMenuGroup>
    </UiDropdownMenuContent>
  </UiDropdownMenu>
  <HotkeysDialog v-model:open="modalOpen" />
</template>
