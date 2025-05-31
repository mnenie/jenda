<template>
  <div class="relative min-h-dvh w-full flex flex-col">
    <BannerAlert />
    <AppHeader />
    <div class="flex-1">
      <slot />
    </div>
  </div>
</template>
