<script setup lang="ts">
import { LayoutsEnum } from '@/layouts/model'
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

definePage({
  meta: {
    layout: LayoutsEnum.welcome,
    requiresAuth: false,
  },
  name: 'welcome',
})

useHead({
  title: 'Jenda - cloud program for project and task management',
})
</script>

<template>
  <div class="ui-container pt-[106px] max-[1152px]:pt-[80px] max-[890px]:pt-[70px] max-[520px]:!pt-[50px]">
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
