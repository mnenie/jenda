<script setup lang="ts">
import { useHead } from '@unhead/vue';
import { AboutSection, MarketingCards, ProjectDemo } from '@/widgets/welcome';

useHead({
  title: 'Jenda - cloud program for project and task management'
});
</script>

<template>
  <div :class="[$style.page, 'container']">
    <AboutSection />
    <ProjectDemo />
    <MarketingCards />
  </div>
</template>

<style module lang="scss">
.page{
  padding-top: 170px;
}
</style>
