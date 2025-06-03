<script lang="ts">
export interface CardItem {
  title: string
  description: string
  src: string
  imgClass?: HTMLAttributes['class']
  width?: string
  height?: string
}
</script>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

defineProps<{
  card: CardItem
}>()
</script>

<template>
  <UnaCard
    :title="card.title"
    :description="card.description"
    card="soft-gray"
    class="shadow-none w-full min-h-260px h-full relative overflow-hidden grow flex flex-col"
    :una="{
      cardTitle: 'text-2xl font-semibold',
      cardDescription: 'text-md text-neutral-500',
      cardContent: 'flex flex-col justify-between h-full',
    }"
  >
    <NuxtImg
      :src="card.src"
      :class="card.imgClass"
      :width="card.width"
      :height="card.height"
      rounded="xl"
      class="mt-auto max-w-unset object-center object-cover"
    />
  </UnaCard>
</template>
