<script setup lang="ts">
import { useSection } from '../../composables/sections'
import ReviewWrapper from '../reviews/ReviewWrapper.vue'
import SectionWrapper from './SectionWrapper.vue'

const { section } = useSection(
  'chats',
  'dev-card',
  'https://avatars.githubusercontent.com/u/95149637?v=4',
)
</script>

<template>
  <SectionWrapper id="chats" :section direction="reverse">
    <template #icon="{ size }">
      <span
        i-hugeicons-message-multiple-02
        :style="{ fontSize: `${size}px` }"
      />
    </template>
  </SectionWrapper>
  <ReviewWrapper :review="section.review" />
</template>
