<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import { createReusableTemplate } from '@vueuse/core'
import { UiInput, UiPopover, UiPopoverContent, UiPopoverTrigger, UiTabs, UiTabsContent, UiTabsList, UiTabsTrigger } from '@/shared/ui'
import { formatLabelColor } from '@/shared/helpers/helperColor'

const { withTabs = true } = defineProps<{
  withTabs?: boolean
}>()

const background = defineModel<string>('color', {
  required: true,
})
const popoverModel = defineModel<boolean>('open')

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

const align = computed(() => withTabs ? 'center' : 'start')

const [DefineTemplate, ReuseTemplate] = createReusableTemplate()
</script>

<template>
  <DefineTemplate v-slot="{ data, value }">
    <UiTabsContent :value="value" class="picker">
      <div
        v-for="item, idx in data"
        :key="idx"
        :style="{ background: item }"
        class="picker-item"
        @click="background = item"
      />
    </UiTabsContent>
  </DefineTemplate>
  <UiPopover v-bind="$attrs" v-model:open="popoverModel">
    <UiPopoverTrigger as-child>
      <slot>
        <Icon
          icon="solar:menu-dots-bold-duotone"
          class="picker-icon"
          :style="{ color: formatLabelColor(background || '', 80) }"
        />
      </slot>
    </UiPopoverTrigger>
    <UiPopoverContent :align class="w-64">
      <UiTabs v-if="withTabs" default-value="solid" class="picker-tabs">
        <UiTabsList class="w-full mb-4">
          <UiTabsTrigger class="flex-1" value="solid">
            {{ $t('picker.tabs', 1) }}
          </UiTabsTrigger>
          <UiTabsTrigger class="flex-1" value="gradient">
            {{ $t('picker.tabs', 2) }}
          </UiTabsTrigger>
        </UiTabsList>
        <ReuseTemplate :data="solids" value="solid" />
        <ReuseTemplate :data="gradients" value="gradient" />
      </UiTabs>
      <div v-else class="picker mt-2">
        <div
          v-for="item, idx in solids"
          :key="idx"
          :style="{ background: item }"
          class="picker-item"
          @click="background = item"
        />
      </div>
      <UiInput
        v-model="background"
        :placeholder="$t('picker.placeholder')"
        class="picker-input"
      />
    </UiPopoverContent>
  </UiPopover>
</template>
