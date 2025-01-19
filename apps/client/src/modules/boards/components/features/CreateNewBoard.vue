<script setup lang="ts">
import { useRouter } from 'vue-router/auto'
import AddBoard from './handlers/AddBoard.vue'
import type { ButtonVariants } from '@/shared/ui'

defineOptions({
  inheritAttrs: false,
})

defineProps<{
  variant: ButtonVariants['variant']
  plural: number
}>()

const router = useRouter()
</script>

<template>
  <AddBoard
    :variant
    :plural
    @add="router.push({ name: 'boards-new' })"
  />
</template>
