<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { LayoutsEnum } from '@/shared/constants/layouts'
import AboutSection from '@/modules/welcome/components/sections/AboutSection.vue'
import ActivitySection from '@/modules/welcome/components/sections/ActivitySection.vue'
import ChatsSection from '@/modules/welcome/components/sections/ChatsSection.vue'
import CollaborativeSection from '@/modules/welcome/components/sections/CollaborativeSection.vue'
import KanbanSection from '@/modules/welcome/components/sections/KanbanSection.vue'
import MarketingCards from '@/modules/welcome/components/MarketingCards.vue'
import MarqueeList from '@/modules/welcome/components/MarqueeList.vue'
import MembersSection from '@/modules/welcome/components/sections/MembersSection.vue'
import ProjectDemo from '@/modules/welcome/components/ProjectDemo.vue'

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
