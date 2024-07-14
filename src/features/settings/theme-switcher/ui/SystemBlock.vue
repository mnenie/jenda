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
  border-radius: 0.375rem;
  border: 2px solid var(--zinc-300);
  padding: 0.15rem;
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
    background-color: #64748b;
    padding: 8px;
  }
}

.item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-radius: 0.375rem;
  background-color: #94a3b8;
  padding: 0.5rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.flex {
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 8px;
}

.item_line {
  border-radius: 0.375rem;
  background-color: #e2e8f0;

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
  background-color: #e2e8f0;
}
</style>
