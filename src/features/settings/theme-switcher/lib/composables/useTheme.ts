import { ref } from 'vue';
import type { Ref } from 'vue';
import { useColorMode } from '@vueuse/core';
import type { ThemeBlock } from '../../model';

export default function useTheme(themeBlocks: Ref<ThemeBlock[]>) {
  const { store } = useColorMode();

  const selectedThemeId = ref(themeBlocks.value.find((item) => item.active)?.id || 0);

  const changeActiveTheme = (id: number) => {
    themeBlocks.value = themeBlocks.value.map((theme, index) => ({
      ...theme,
      active: index === id
    }));
    selectedThemeId.value = id;
  };

  const onNewPreferences = () => {
    const selectedTheme = themeBlocks.value.find((item) => item.id === selectedThemeId.value);
    if (selectedTheme) {
      store.value = selectedTheme.value;
    }
    console.log(store.value);
  };

  return {
    changeActiveTheme,
    onNewPreferences
  };
}
