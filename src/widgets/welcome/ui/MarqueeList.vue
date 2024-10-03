<template>
  <div :class="$style.container">
    <Vue3Marquee>
      <div v-for="(s, index) in $tm('welcome.marquee')" :key="index" :class="$style.items">
        <p :class="[$style.tag, 'text-lg']">{{ s }}</p>
      </div>
    </Vue3Marquee>
  </div>
</template>

<style module lang="scss">
.container {
  margin: 80px 0 150px 0;
  width: 100%;
  height: 60px;

  .items {
    display: flex;
    align-items: center;
    margin-right: 60px;
  }
}

:global(html.dark) {
  .container {
    .tag {
      color: var(--zinc-100) !important;
    }
  }
}
</style>
