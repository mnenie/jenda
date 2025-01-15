<template>
  <div
    class="flex items-center justify-center flex-col gap-14px mb-25px w-full h-240px bg-neutral-50 border border-dashed border-neutral-200 rounded-md cursor-pointer
    dark:bg-neutral-700/40 dark:border-neutral-600"
  >
    <span i-jenda-import class="text-30px text-neutral-600 dark:text-neutral-400" />
    <p class="text-sm text-neutral-700 dark:text-neutral-200">
      {{ $t('templates.import') }}
      <span class="text-blue-400">.json</span>
    </p>
  </div>
</template>
