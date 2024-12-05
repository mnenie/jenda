<script setup lang="ts">
import {
  AboutSection,
  ActivitySection,
  ChatsSection,
  CollaborativeSection,
  KanbanSection,
  MarketingCards,
  MarqueeList,
  MembersSection,
  ProjectDemo,
} from '@/widgets/welcome'
import { useHead } from '@unhead/vue'

useHead({
  title: 'Jenda - cloud program for project and task management',
})
</script>

<template>
  <div class="container pt-[170px] max-[1152px]:pt-[130px] max-[890px]:pt-[130px] max-[520px]:!pt-[120px]">
    <AboutSection />
    <ProjectDemo />
    <div class="flex flex-col items-center py-0 px-8 max-[890px]:px-0">
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
