<script setup lang="ts">
import { ref } from 'vue'
import { createReusableTemplate } from '@vueuse/core'
import {
  UiButton,
  UiDropdownMenu,
  UiDropdownMenuContent,
  UiDropdownMenuGroup,
  UiDropdownMenuItem,
  UiDropdownMenuTrigger,
} from '@/shared/ui'
import HotkeysDialog from '@/modules/common/components/dialogs/HotkeysDialog.vue'
import { useExpandedContext } from '@/shared/composables/expanded'

const { isExpanded } = useExpandedContext()

const modalOpen = ref(false)

const [DifineTemplate, ReuseTemplate] = createReusableTemplate()
</script>

<template>
  <DifineTemplate v-slot="{ title, icon }">
    <UiDropdownMenuItem>
      <span class="text-default" :class="icon" />
      <span class="text-default font-medium">{{ title }}</span>
    </UiDropdownMenuItem>
  </DifineTemplate>
  <UiDropdownMenu direction="right">
    <UiDropdownMenuTrigger as-child>
      <UiButton
        v-tooltip.right="{
          content: $t(`sidebar.help.title`),
          triggers: ['hover'],
          disabled: isExpanded,
        }"
        variant="ghost"
        size="sm"
        class="w-full gap-2 shadow-none py-0 px-2 transition-all duration-200 ease justify-between mb-1"
        :class="[isExpanded ? 'justify-between' : 'justify-center p-0']"
      >
        <div class="flex items-center gap-2">
          <div i-hugeicons-mortarboard-02 class="!w-16px !h-16px 2xl:(!w-4 !h-4) text-neutral-800 dark:text-neutral-300" />
          <span v-show="isExpanded" class="text-default !fw500 text-neutral-900 dark:text-neutral-100">
            {{ $t('sidebar.help.title') }}
          </span>
        </div>
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
