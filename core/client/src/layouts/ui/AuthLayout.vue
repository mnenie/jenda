<template>
  <div :class="$style.auth_layout">
    <slot />
  </div>
</template>

<style module lang="scss">
.auth_layout {
  height: 100dvh;
  width: 100%;
}
</style>
