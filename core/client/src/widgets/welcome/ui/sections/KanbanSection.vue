<script setup lang="ts">
import { Check } from 'lucide-vue-next'
import { useSection } from '../../model/composables'
import { ReviewWrapper } from '../reviews'
import SectionWrapper from './SectionWrapper.vue'

const { section } = useSection(
  'kanban',
  'dev-card',
  'https://avatars.githubusercontent.com/u/121057011?v=4',
)
</script>

<template>
  <SectionWrapper id="kanban" :section>
    <template #icon="{ size, color }">
      <Check :size :color />
    </template>
  </SectionWrapper>
  <ReviewWrapper :review="section.review" />
</template>
