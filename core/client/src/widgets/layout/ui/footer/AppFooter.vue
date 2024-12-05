<template>
  <footer
    class="border-t border-t-solid border-[rgba(228,228,231,0.4)] bg-transparent w-full px-10 py-4 dark:border-neutral-700/50 max-[992px]:px-5"
  >
    <div
      class="max-w-1700px mx-auto flex items-start justify-between gap-4 max-[1152px]:max-w-1064px"
    >
      <p class="text-sm text-neutral-500 dark:text-neutral-300">
        <span class="font-medium">Jenda</span> - {{ $t('welcome.footer') }}
        <a
          class="cursor-pointer font-medium underline underline-offset-4"
          href="https://github.com/mnenie/jenda"
        >
          Github
        </a>
      </p>
    </div>
  </footer>
</template>
