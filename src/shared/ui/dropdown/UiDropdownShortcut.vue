<template>
  <div :class="$style.shortcut">
    <slot />
  </div>
</template>

<style module lang="scss">
.shortcut {
  font-size: 11px;
}
</style>
