<script setup lang="ts">
import { useHead } from '@unhead/vue';
import {
  AboutSection,
  MarketingCards,
  ProjectDemo,
  MarqueeList,
  KanbanSection,
  CollaborativeSection,
  ActivitySection,
  MembersSection,
  ChatsSection
} from '@/widgets/welcome';

useHead({
  title: 'Jenda - cloud program for project and task management'
});
</script>

<template>
  <div :class="[$style.wrapper, 'container']">
    <AboutSection />
    <ProjectDemo />
    <div :class="$style.inside_container">
      <MarqueeList />
      <MarketingCards />
      <KanbanSection />
      <CollaborativeSection />
      <ActivitySection />
      <MembersSection />
      <ChatsSection />
    </div>
  </div>
</template>

<style module lang="scss">
.wrapper {
  padding: 170px 60px 0 60px;

  .inside_container {
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
