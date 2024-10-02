<script setup lang="ts">
import { X } from 'lucide-vue-next';
import { ref } from 'vue';

const open = ref(true);

function onCloseOffer() {
  open.value = !open.value;
}
</script>

<template>
  <div v-if="open" :class="$style.container">
    <div :class="$style.content">
      <p class="text-xs">Следите за нашими новостями в
        <a href="https://github.com/mnenie/jenda" rel="noreferrer">github</a>
      </p>
    </div>
    <X :size="13" :class="$style.icon" @click="onCloseOffer" />
  </div>
</template>

<style module lang="scss">
@import '@/app/styles/mixins';
.container {
  position: relative;
  background-color: var(--zinc-800);
  color: var(--zinc-200);
  border-radius: 10px;
  padding: 10px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .content {
    display: inline-flex;
    gap: 10px;
    align-items: center;

    & a {
      text-decoration: underline;
    }
  }

  .icon{
    position: absolute;
    top: 50%;
    color: var(--zinc-300);
    transform: translateY(-50%);
    right: 20px;
    cursor: pointer;
    @include transition;

    &:hover{
      color: var(--zinc-200);
    }
  }
}
</style>
