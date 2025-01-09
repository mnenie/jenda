<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { UiInput, UiPopover, UiPopoverContent, UiPopoverTrigger, UiTabs, UiTabsContent, UiTabsList, UiTabsTrigger } from '@/shared/ui'
import { formatLabelColor } from '@/shared/helpers'

const background = defineModel<string>('color', { required: true })

const solids = ['#E2E2E2', '#ff75c3', '#ffa647', '#ffe83f', '#9fff5b', '#70e2ff', '#cd93ff', '#09203f', '#f54242', '#42f54b', '#4257f5', '#f5a142', '#b142f5', '#42f5e9', '#f542aa', '#42f57d', '#747c7c', '#fb6e00', '#c7fb00', '#0082fb', '#b600fb', '#fb007e', '#00fb75', '#fbdf00', '#e55d87', '#cac531', '#96deda', '#5f72bd', '#e6ae8c', '#00c3ff', '#fc354c', '#215f00']

const gradients = [
  'linear-gradient(to right, #ff75c3, #ffa647)',
  'linear-gradient(to right, #ffa647, #9fff5b)',
  'linear-gradient(to right, #9fff5b, #70e2ff)',
  'linear-gradient(to right, #70e2ff, #cd93ff)',
  'linear-gradient(to right, #cd93ff, #09203f)',
  'linear-gradient(to right, #09203f, #ff75c3)',
  'linear-gradient(to right, #f54242, #42f54b)',
]
</script>

<template>
  <UiPopover>
    <UiPopoverTrigger as-child>
      <Icon
        icon="solar:menu-dots-bold-duotone"
        class="h-3.5 w-3.5 rounded object-cover transition-all mr-px cursor-pointer text-neutral-800 dark:text-neutral-100"
        :style="{ color: formatLabelColor(background || '', 80) }"
      />
    </UiPopoverTrigger>
    <UiPopoverContent class="w-64">
      <UiTabs default-value="solid" class="w-full">
        <UiTabsList class="w-full mb-4">
          <UiTabsTrigger class="flex-1" value="solid">
            {{ $t('picker.tabs', 1) }}
          </UiTabsTrigger>
          <UiTabsTrigger class="flex-1" value="gradient">
            {{ $t('picker.tabs', 2) }}
          </UiTabsTrigger>
        </UiTabsList>

        <UiTabsContent value="solid" class="flex flex-wrap gap-1 mt-0">
          <div
            v-for="solid in solids"
            :key="solid"
            :style="{ background: solid }"
            class="rounded-md h-6 w-6 cursor-pointer active:scale-105"
            @click="background = solid"
          />
        </UiTabsContent>

        <UiTabsContent value="gradient" class="mt-0 flex flex-wrap gap-1 mt-0">
          <div
            v-for="gradient in gradients"
            :key="gradient"
            :style="{ background: gradient }"
            class="rounded-md h-6 w-6 cursor-pointer active:scale-105"
            @click="background = gradient"
          />
        </UiTabsContent>
      </UiTabs>

      <UiInput
        v-model="background"
        :placeholder="$t('picker.placeholder')"
        class="col-span-2 h-8 mt-4 focus:ring-0"
      />
    </UiPopoverContent>
  </UiPopover>
</template>
