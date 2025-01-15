<script setup lang="ts">
import { useSection } from '../../composables/sections'
import ReviewWrapper from '../reviews/ReviewWrapper.vue'
import SectionWrapper from './SectionWrapper.vue'

const { section } = useSection(
  'kanban',
  'dev-card',
  'https://avatars.githubusercontent.com/u/121057011?v=4',
)
</script>

<template>
  <SectionWrapper id="kanban" :section>
    <template #icon="{ size }">
      <span
        i-hugeicons-trello
        :style="{ fontSize: `${size}px` }"
      />
    </template>
  </SectionWrapper>
  <ReviewWrapper :review="section.review" />
</template>
