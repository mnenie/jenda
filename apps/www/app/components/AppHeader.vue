<script setup lang="ts">
const { navigationMenuItems } = useNavigation()
</script>

<template>
  <header class="sticky top-0 z-50 px-4 py-4">
    <div class="w-full mx-auto px-4 flex items-center justify-between gap-3 h-full">
      <div class="flex items-center gap-6">
        <a
          href="https://github.com/mnenie/jenda"
          target="_blank"
          class="flex items-center gap-1 cursor-pointer mr-2"
        >
          <NuxtImg src="/jenda-logo.png" class="w-24px h-24px" />
          <h3 class="text-2xl fw-600">Jenda Labs</h3>
        </a>
      </div>
      <div class="flex items-center relative">
        <div
          class="relative z-10 box bg-white border border-solid border-#e3e4e8 flex items-center py-0 pl-2.5 pr-3.5 h-40px rounded-lg
          dark:shadow-sm dark:bg-#313131 dark:border-neutral-700"
        >
          <UnaNavigationMenu
            :_navigation-menu-trigger="{
              class: '!navigation-menu-trigger-extended',
            }"
            :items="navigationMenuItems"
          />
        </div>
        <CommonLanguageSwitcher />
      </div>
      <div class="flex items-center gap-2">
        <UnaButton label="Войти" btn="solid-white" />
        <UnaButton
          btn="solid-black"
          label="Зарегистрироваться"
        />
      </div>
    </div>
  </header>
</template>

<style scoped>
.box {
  box-shadow:
    0 12px 40px 0 rgba(0, 0, 0, 0.06),
    0 1px 0 0 rgba(0, 0, 0, 0.04);
}
</style>
