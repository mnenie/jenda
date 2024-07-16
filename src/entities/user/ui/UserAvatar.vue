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
  height: 29px;
  width: 29px;
  user-select: none;
  overflow: hidden;
  background-color: var(--zinc-100);
  color: var(--zinc-950);
  border-radius: 50%;
}
</style>
