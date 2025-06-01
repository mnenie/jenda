<script setup lang="ts">
const technologies = [
  { src: '/stack/vue.png', class: 'w-40', alt: 'vue' },
  { src: '/stack/ts.png', class: 'w-40 mt-1', alt: 'typescript' },
  { src: '/stack/go.png', class: 'w-26', alt: 'go' },
  { src: '/stack/postgre.png', class: 'w-64', alt: 'postgres' },
  { src: '/stack/docker.png', class: 'w-44', alt: 'docker' },
  { src: '/stack/github.png', class: 'w-30', alt: 'github' },
]
</script>

<template>
  <div class="relative overflow-hidden px-36 pt-6">
    <h2 class="text-left text-muted font-medium text-lg">
      {{ $t('hero.stack') }}
    </h2>
    <div class="flex items-center shrink-0 justify-start gap-10 mt-8">
      <Motion
        v-for="(technology, index) in technologies"
        :key="technology.alt"
        as-child
        :initial="{ opacity: 0, transform: 'translateY(20px)' }"
        :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
        :transition="{ delay: 0.2 * index }"
        :in-view-options="{ once: true }"
      >
        <div class="opacity-0">
          <NuxtImg
            :src="technology.src"
            :alt="technology.alt"
            loading="lazy"
            :class="technology.class"
            class="img"
          />
        </div>
      </Motion>
    </div>
  </div>
</template>

<style scoped>
.img {
  filter: grayscale(100%);
  opacity: 0.5;
}
</style>
