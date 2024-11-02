<template>
  <div :class="$style.item">
    <slot />
  </div>
</template>

<style module lang="scss">
.item {
  cursor: pointer;
  user-select: none;
  padding: 6px 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  font-weight: 500;
  font-size: 12px;

  &:hover {
    background-color: var(--zinc-100);
  }
}

:global(html.dark) {
  .item {
    &:hover {
      background-color: rgba(var(--zinc-rgb-600), 0.4);
    }
  }
}
</style>
