<script setup lang="ts">
import { useBoardMenuContext, useImages } from '../../composables/menu'
import { UiAlert } from '@/shared/ui'

const { selectImage, images } = useImages()

const { imagesPopover } = useBoardMenuContext()
</script>

<template>
  <UiAlert v-model:open="imagesPopover" with-animation rp="0" closable variant="default" class="absolute mb-0 bottom-2.5 left-1/2 translate-x--1/2 p-2 rounded-lg border-none flex flex-col gap-2" @close="imagesPopover = false">
    <div class="flex items-start gap-1 flex-col w-full">
      Доступные изображения
      <span class="text-sm text-neutral-500">
        Выберите одно из изображений для вашего борда
      </span>
    </div>
    <div class="picker gap-2 mt-auto">
      <img
        v-for="(image, index) in Object.values(images)"
        :key="index"
        :src="image"
        :alt="`image-${index}`"
        class="w-24 h-14 rounded-md border border-neutral-700 cursor-pointer"
        @click="selectImage(image)"
      />
      <div class="flex cursor-pointer items-center justify-center w-24 h-14 rounded-md bg-neutral-200 dark:bg-neutral-700/40" @click="selectImage(undefined)">
        <div i-hugeicons-image-delete-01 />
      </div>
    </div>
  </UiAlert>
</template>
