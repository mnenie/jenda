<script setup lang="ts"></script>

<template>
  <div :class="$style.creation">
    <span>+ Create new board</span>
  </div>
</template>

<style module lang="scss">
.creation {
  background-color: var(--zinc-100);
  border: 1px solid var(--zinc-200);
  min-width: 220px;
  height: 120px;
  border-radius: 15px;
  color: var(--purple-main);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
