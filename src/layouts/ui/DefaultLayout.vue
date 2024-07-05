<template>
  <div :class="$style.default_layout">
    <slot />
  </div>
</template>

<style module lang="scss">
.default_layout {
  height: 100dvh;
  width: 100%;
}
</style>
