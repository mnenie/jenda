<script setup lang="ts">
import { useSection } from '../../model/composables';
import { MessageCircle } from 'lucide-vue-next';
import SectionWrapper from './SectionWrapper.vue';
import { ReviewWrapper } from '../reviews';

const { section } = useSection(
  'chats',
  'dev-card',
  'https://avatars.githubusercontent.com/u/95149637?v=4'
);
</script>

<template>
  <SectionWrapper id="chats" :section direction="reverse">
    <template #icon="{ size, color }">
      <MessageCircle :size :color />
    </template>
  </SectionWrapper>
  <ReviewWrapper :review="section.review" />
</template>
