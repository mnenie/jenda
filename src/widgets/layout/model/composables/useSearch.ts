import { effectScope, nextTick, onScopeDispose, toValue, watch, type Ref } from 'vue';
import { type HippieNav } from '@noction/hippie-nav';
import { useLocalStorage } from '@vueuse/core';

export function useSearch<T extends InstanceType<typeof HippieNav>>(
  hippieNav: Ref<T | null>,
  openFl: Ref<boolean>,
  placeholder: Ref<string>
) {
  const scope = effectScope();

  scope.run(() => {
    watch(
      () => hippieNav.value,
      async () => {
        // problem: @noction/hippie-nav doesn't support i18n
        if (hippieNav.value) {
          await nextTick(() => {
            const input = document.querySelector('.search-panel-input') as HTMLInputElement;
            // console.log(input)
            if (input) {
              input.placeholder = toValue(placeholder);
            }
          });
        }
      },
      { flush: 'post' }
    );
  });

  onScopeDispose(() => {
    scope.stop();
  });
}
