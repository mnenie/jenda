<template>
  <div :class="[$style.avatar, 'text-sm']">
    <slot />
  </div>
</template>

<style module lang="scss">
.avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 20;
  width: 20;
  user-select: none;
  overflow: hidden;
  background-color: var(--zinc-200);
  color: var(--zinc-950);
}
</style>
