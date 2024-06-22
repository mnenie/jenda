<template>
  <div :class="$style.sidebar_layout">
    <router-view />
  </div>
</template>

<style module lang="scss">
.sidebar_layout {
  height: 100dvh;
  width: 100%;
}
</style>
