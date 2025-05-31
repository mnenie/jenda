<template>
  <HeroSvgEffect />
  <div class="relative pt-20">
    <slot name="preview">
      <HeroPreview />
      <HeroStackMotionList />
    </slot>
  </div>
</template>
