<script setup lang="ts">
import { useEmitAsProps } from 'radix-vue'
import { UiTabs, UiTabsContent, UiTabsList, UiTabsTrigger } from '..'
import type { TabsRootEmits, TabsRootProps } from 'radix-vue'

const { defaultValue = 'test1', ...props } = defineProps<TabsRootProps>()
const emits = defineEmits<TabsRootEmits>()
</script>

<template>
  <UiTabs
    v-bind="{ ...props, ...useEmitAsProps(emits) }"
    :default-value="defaultValue"
    class="w-[600px]"
  >
    <UiTabsList>
      <UiTabsTrigger value="test1">
        Test 1
      </UiTabsTrigger>
      <UiTabsTrigger value="test2">
        Test 2
      </UiTabsTrigger>
    </UiTabsList>
    <UiTabsContent value="test1">
      test 1 content
    </UiTabsContent>
    <UiTabsContent value="test2">
      test 2 content
    </UiTabsContent>
  </UiTabs>
</template>
