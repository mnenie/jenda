<template>
  <div :class="$style.welcome_layout">
    <router-view />
  </div>
</template>

<style module lang="scss">
.welcome_layout {
  height: 100dvh;
  width: 100%;
}
</style>
