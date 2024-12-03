import type { Options } from "@/shared/ui/select/types";
import type { Ref } from "vue";
import { useCookies } from "@vueuse/integrations/useCookies";
import { effectScope, onScopeDispose, watch } from "vue";
import { useI18n } from "vue-i18n";

export function useLanguage(options: Options[], language: Ref<string>) {
  const scope = effectScope();

  const cookies = useCookies();
  const { locale } = useI18n();

  scope.run(() => {
    // resolves #31
    watch(
      () => locale.value,
      (newLocale) => {
        const selectedOption = options.find(
          (option) => option.value === newLocale,
        );
        if (selectedOption) {
          language.value = selectedOption.name;
        }
      },
      { immediate: true },
    );
    watch(
      () => language.value,
      (newLanguage) => {
        const selectedOption = options.find(
          (option) => option.name === newLanguage,
        );
        if (selectedOption) {
          locale.value = selectedOption.value;
          cookies.set("i18n", selectedOption.value);
        }
      },
    );
  });

  onScopeDispose(() => {
    scope.stop();
  });
}
