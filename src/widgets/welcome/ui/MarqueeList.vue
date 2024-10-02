<template>
  <div :class="$style.container">
    <Vue3Marquee>
      <div v-for="(s, index) in $tm('welcome.marquee')" :key="index" :class="$style.items">
        <p class="text-lg">{{ s }}</p>
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

  & > p {
    font-weight: 600 !important;
    line-height: 1.25;
  }
}
</style>
