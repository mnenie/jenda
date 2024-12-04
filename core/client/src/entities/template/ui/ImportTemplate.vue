\<template>
  <div :class="$style.container">
    <span i-jenda-custom-file-import :class="$style.icon" />
    <p class="text-sm">
      {{ $t('templates.import') }}
      <span>.json</span>
    </p>
  </div>
</template>

<style module lang="scss">
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 14px;
  width: 100%;
  height: 240px;
  background-color: var(--zinc-50);
  border: 1px dashed var(--zinc-200);
  border-radius: 6px;
  margin-bottom: 25px;
  cursor: pointer;

  .icon {
    font-size: 30px;
    color: var(--zinc-600);
  }

  & > p {
    color: var(--zinc-600);

    & > span {
      color: var(--blue-basic);
    }
  }
}

:global(html.dark) {
  .container {
    background-color: rgba(var(--zinc-rgb-600), 0.6);
    border-color: var(--zinc-500);

    .icon, p {
        color: var(--zinc-200);
    }
  }
}
</style>
