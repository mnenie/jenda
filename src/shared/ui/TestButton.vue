<template>
  <button :class="$style.test">
    <slot />
  </button>
</template>

<style lang="scss" module>
.test {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: aqua;
  border-radius: 14px;

  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    transform 0.15s ease;

  &:active {
    transform: scale(0.9);
  }
}
</style>
