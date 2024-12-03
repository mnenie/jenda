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
  <div class="container" :class="[$style.wrapper]">
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

@media screen and (max-width: 1152px) {
  .wrapper{
    padding-top: 130px;
  }
}

@media screen and (max-width: 890px) {
  .wrapper{
    padding: 130px 0px 0 0px;
  }
}

@media screen and (max-width: 520px) {
  .wrapper{
    padding-top: 120px;
    .inside_container{
      padding: 0 20px;
    }
  }
}
</style>
