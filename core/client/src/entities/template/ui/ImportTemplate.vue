<template>
  <div
    class="flex items-center justify-center flex-col gap-14px mb-25px w-full h-240px bg-neutral-50 border border-dashed border-neutral-200 rounded-md cursor-pointer
    dark:bg-neutral-700/40 dark:border-neutral-600"
  >
    <span i-jenda-custom-file-import class="text-30px text-neutral-600 dark:text-neutral-400" />
    <p class="text-sm text-neutral-700 dark:text-neutral-200">
      {{ $t('templates.import') }}
      <span class="text-blue-400">.json</span>
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
