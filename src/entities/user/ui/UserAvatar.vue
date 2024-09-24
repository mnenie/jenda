<template>
  <div :class="[$style.avatar, 'text-sm']">
    <slot />
  </div>
</template>

<style module lang="scss">
.avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  user-select: none;
  overflow: hidden;
  background-color: var(--zinc-100);
  color: var(--zinc-950);
  border-radius: 50%;
  cursor: pointer;
}
</style>
