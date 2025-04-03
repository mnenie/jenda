<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import { useBoardMenuContext } from '../../composables/menu'
import { useBoardsStore } from '../../stores/boards'
import { UiAlert } from '@/shared/ui'

const images = ref<{ [key: string]: any }>({})

const boardStore = useBoardsStore()
const { imagesPopover } = useBoardMenuContext()

onBeforeMount(async () => {
  // @ts-ignore
  const modules = import.meta.glob('@/shared/assets/imgs/menu/*.{jpeg,jpg,png,svg}')
  for (const path in modules) {
    const module = await modules[path]()
    images.value[path] = (module as unknown as Record<string, any>).default
  }
})
</script>

<template>
  <UiAlert v-model:open="imagesPopover" with-animation rp="0" closable variant="default" class="sticky w-fit mb-0 bottom-2.5 left-1/2 translate-x--1/2 p-2 rounded-lg border-none flex flex-col gap-2" @close="imagesPopover = false">
    <div class="flex items-start gap-1 flex-col w-full text-default">
      {{ $t('board.alerts.image.title') }}
      <span class="text-sm text-neutral-500">
        {{ $t('board.alerts.image.description') }}
      </span>
    </div>
    <div class="picker gap-2 mt-auto">
      <img
        v-for="(image, index) in Object.values(images)"
        :key="index"
        :src="image"
        :alt="`image-${index}`"
        class="w-24 h-14 rounded-md border border-neutral-700 cursor-pointer"
        @click="boardStore.selectBoardImage(image)"
      />
      <div class="flex cursor-pointer items-center justify-center w-24 h-14 rounded-md bg-neutral-200 dark:bg-neutral-700/40" @click="boardStore.selectBoardImage(undefined)">
        <div i-hugeicons-image-delete-01 />
      </div>
    </div>
  </UiAlert>
</template>
