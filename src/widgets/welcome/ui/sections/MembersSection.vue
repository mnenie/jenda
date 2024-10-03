<script setup lang="ts">
import { useSection } from '../../model/composables';
import SectionWrapper from './SectionWrapper.vue';
import { ReviewWrapper } from '../reviews';
import { SmilePlus } from 'lucide-vue-next';

const { section } = useSection(
  'members',
  'dev-card',
  'https://avatars.githubusercontent.com/u/121057011?v=4'
);
</script>

<template>
  <SectionWrapper id="members" :section>
    <template #icon="{ size, color }">
      <SmilePlus :size :color />
    </template>
  </SectionWrapper>
  <ReviewWrapper :review="section.review" />
</template>
