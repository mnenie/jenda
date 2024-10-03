<script setup lang="ts">
import { useSection } from '../../model/composables';
import { Earth } from 'lucide-vue-next';
import SectionWrapper from './SectionWrapper.vue';
import { ReviewWrapper } from '../reviews';

const { section } = useSection(
  'collaborative',
  'dev-card',
  'https://avatars.githubusercontent.com/u/95149637?v=4'
);
</script>

<template>
  <SectionWrapper id="collaborative" :section direction="reverse">
    <template #icon="{ size, color }">
      <Earth :size :color />
    </template>
  </SectionWrapper>
  <ReviewWrapper :review="section.review" />
</template>
