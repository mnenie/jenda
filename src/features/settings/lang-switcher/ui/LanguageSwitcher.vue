<script setup lang="ts">
import { UiSelect } from '@/shared/ui';
import { ref, shallowReactive, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useCookies } from '@vueuse/integrations/useCookies';
import type { Options } from '@/shared/ui/select/types';

const { locale } = useI18n();

const options = shallowReactive<Options[]>([
  { name: 'English', value: 'en-US' },
  { name: 'Русский', value: 'ru-RU' },
  { name: '简体中文', value: 'zh-CN' }
]);

const cookies = useCookies();

const language = ref('');

// TODO: think to way of computed property intead
watch(
  () => locale.value,
  () => {
    const selectedOptionByValue = options.find((option) => option.value === locale.value);
    selectedOptionByValue ? (language.value = selectedOptionByValue.name) : '';

    watch(
      () => language.value,
      (name) => {
        const selectedOptionByName = options.find((option) => option.name === name);
        if (selectedOptionByName) {
          locale.value = selectedOptionByName.value;
          cookies.set('i18n', selectedOptionByName.value);
        }
      }
    );
  },
  { immediate: true }
);
</script>

<template>
  <UiSelect v-model="language" :options />
</template>
