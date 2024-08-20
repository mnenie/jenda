<script setup lang="ts">
import { useHead } from '@unhead/vue';
import { AboutSection, MarketingCards } from '@/widgets/welcome';

useHead({
  title: 'Jenda - cloud program for project and task management'
});
</script>

<template>
  <div class="container" style="padding-top: 152px">
    <AboutSection />
    <MarketingCards />
  </div>
</template>
