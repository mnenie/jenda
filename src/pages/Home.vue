<script setup lang="ts">
import { HeaderWelcome } from '@/widgets/layout';
import { AboutSection, MarketingCards } from '@/widgets/welcome';
</script>

<template>
  <HeaderWelcome />
  <div class="container" style="padding-top: 152px;">
    <AboutSection />
    <MarketingCards />
  </div>
</template>
