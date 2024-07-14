<script setup lang="ts">
import { UiSelect } from '@/shared/ui';
import { ref, shallowReactive } from 'vue';

// after -> locales instead
const options = shallowReactive(['English', 'Русский', '简体中文']);

const selectLang = ref('English');
</script>

<template>
  <UiSelect v-model="selectLang" :options />
</template>
