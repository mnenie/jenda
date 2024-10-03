<script setup lang="ts">
import { useSection } from '../../model/composables';
import SectionWrapper from './SectionWrapper.vue';
import { ReviewWrapper } from '../reviews';
import { Check } from 'lucide-vue-next';

const { section } = useSection(
  'kanban',
  'dev-card',
  'https://avatars.githubusercontent.com/u/121057011?v=4'
);
</script>

<template>
  <SectionWrapper :section>
    <template #icon="{ size, color }">
      <Check :size :color />
    </template>
  </SectionWrapper>
  <ReviewWrapper :review="section.review" />
</template>
