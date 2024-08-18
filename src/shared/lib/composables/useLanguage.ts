import { effectScope, onUnmounted, watch } from 'vue';
import type { Ref } from 'vue';
import type { Options } from '@/shared/ui/select/types';
import { useCookies } from '@vueuse/integrations/useCookies';
import { useI18n } from 'vue-i18n';

export function useLanguage(options: Options[], language: Ref<string>) {
  const scope = effectScope();

  const cookies = useCookies();
  const { locale } = useI18n();

  scope.run(() => {
    // TODO: think to way of computed property instead
    // So anyway the problem in nested watchers is solved, issue #11
    watch(
      () => locale.value,
      (newLocale) => {
        const selectedOption = options.find((option) => option.value === newLocale);
        if (selectedOption) {
          language.value = selectedOption.name;
        }
      },
      { immediate: true }
    );
    watch(
      () => language.value,
      (newLanguage) => {
        const selectedOption = options.find((option) => option.name === newLanguage);
        if (selectedOption) {
          locale.value = selectedOption.value;
          cookies.set('i18n', selectedOption.value);
        }
      }
    );
  });
  onUnmounted(() => {
    scope.stop();
  });
}