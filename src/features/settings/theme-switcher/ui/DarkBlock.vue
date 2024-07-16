<template>
  <div :class="$style.main_container">
    <div :class="$style.main_content">
      <div :class="$style.item">
        <div :class="[$style.item_line, $style.short]" />
        <div :class="[$style.item_line, $style.long]" />
      </div>
      <div :class="[$style.item, $style.flex]">
        <div :class="$style.item_circle" />
        <div :class="[$style.item_line, $style.long]" />
      </div>
      <div :class="[$style.item, $style.flex]">
        <div :class="$style.item_circle" />
        <div :class="[$style.item_line, $style.long]" />
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.main_container {
  display: flex;
  align-items: center;
  border-radius: 6px;
  border: 2px solid var(--zinc-300);
  padding: 4px;
  transition: border-color 0.2s;
  cursor: pointer;

  &:hover {
    border-color: var(--zinc-400);
  }

  .main_content {
    display: flex;
    flex-direction: column;
    gap: 8px;
    border-radius: 4px;
    background-color: var(--zinc-700);
    padding: 8px;

    .item {
      display: flex;
      flex-direction: column;
      gap: 8px;
      border-radius: 6px;
      background-color: var(--zinc-600);
      padding: 6px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

      &.flex {
        flex-direction: row;
        align-items: center;
        gap: 8px;
      }

      .item_line {
        border-radius: 6px;
        background-color: var(--zinc-100);

        &.short {
          height: 0.5rem;
          width: 6rem;
        }

        &.long {
          height: 0.5rem;
          width: 8.25rem;
        }
      }

      .item_circle {
        height: 16px;
        width: 16px;
        border-radius: 50%;
        background-color: var(--zinc-100);
      }
    }
  }
}

:global(html.dark) {
  .main_container {
    border-color: var(--zinc-500);
    &:hover {
      border-color: var(--zinc-400);
    }
  }
}
</style>
