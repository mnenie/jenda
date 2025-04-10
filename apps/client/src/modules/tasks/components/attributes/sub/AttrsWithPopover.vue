<script setup lang="ts" generic="T, I extends keyof T">
import { shallowRef, watch } from 'vue'
import { Icon } from '@iconify/vue'
import { UiCommand, UiCommandGroup, UiCommandInput, UiCommandItem, UiCommandList, UiPopover, UiPopoverContent, UiPopoverTrigger } from '@/shared/ui'

defineProps<{
  itemsInBoard: T[]
  itemId: I
  itemValue: keyof T
  inputPlaceholder: string
}>()

const emits = defineEmits<{
  (e: 'add', item: T): void
  (e: 'remove', item: T): void
}>()

const items = defineModel<T[]>('items')

const open = shallowRef(false)
const searchQuery = shallowRef('')

watch(items, () => {
  searchQuery.value = ''
}, { deep: true })
</script>

<template>
  <slot name="itemBadge" />
  <UiPopover v-model:open="open">
    <UiPopoverTrigger class="bg-transparent">
      <div class="flex items-center justify-center cursor-pointer rounded-1/2 w-5.5 h-5.5 bg-neutral-100 dark:bg-neutral-700">
        <Icon icon="hugeicons:plus-sign" class="text-gray-500" />
      </div>
    </UiPopoverTrigger>
    <UiPopoverContent class="p-0">
      <UiCommand v-model="searchQuery">
        <UiCommandInput :placeholder="inputPlaceholder" />
        <UiCommandList>
          <UiCommandGroup>
            <UiCommandItem
              v-for="item in itemsInBoard"
              :key="item[itemId] as string"
              :value="item[itemValue] as string"
              class="flex items-center gap-2 p-2 cursor-pointer"
              @select="emits('add', item)"
            >
              <slot name="itemInList" :item="item" />
              <Icon v-if="items?.some(i => i[itemId] === item[itemId])" icon="lucide:check" class="text-gray-500 ml-auto" />
            </UiCommandItem>
          </UiCommandGroup>
        </UiCommandList>
      </UiCommand>
    </UiPopoverContent>
  </UiPopover>
</template>
