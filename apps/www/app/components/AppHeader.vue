<script setup lang="ts">
const { navigationMenuItems } = useNavigation()
</script>

<template>
  <header class="sticky top-0 z-50 px-4 py-3 bg-white/80 backdrop-blur border-b border-default sticky top-0 z-50">
    <div class="w-full mx-auto px-32 flex items-center justify-between gap-3 h-full ">
      <div class="flex items-center gap-6 relative">
        <a
          href="https://github.com/mnenie/jenda"
          target="_blank"
          class="flex items-center gap-1 cursor-pointer mr-2"
        >
          <NuxtImg src="/jenda-logo.png" class="w-24px h-24px" />
          <h3 class="text-2xl fw-600">Jenda Labs</h3>
        </a>
        <UnaNavigationMenu
          :_navigation-menu-trigger="{
            class: '!navigation-menu-trigger-extended',
          }"
          :items="navigationMenuItems"
        />
        <!-- </div> -->
      </div>
      <!-- <div class="flex items-center relative">
        <UnaNavigationMenu
          :_navigation-menu-trigger="{
            class: '!navigation-menu-trigger-extended',
          }"
          :items="navigationMenuItems"
        />
        <CommonLanguageSwitcher />
      </div> -->
      <div class="relative flex items-center gap-2">
        <CommonLanguageSwitcher />
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
