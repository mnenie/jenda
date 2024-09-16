import { useEventListener } from '@vueuse/core';
import { nextTick } from 'vue';
import type { Ref } from 'vue';

export default function useFilter(
  inputRef: Ref<HTMLElement | null>,
  props: { isExpanded: boolean },
  emit: (e: 'onToggle') => void
) {
  const onToggleArea = () => {
    if (!props.isExpanded) {
      emit('onToggle');

      nextTick(() => {
        inputRef.value = document.getElementById('input') as HTMLInputElement;
        if (inputRef.value) {
          inputRef.value.focus();
        }
      });
    }
  };
  const handleKeyDownFilter = (e: KeyboardEvent) => {
    if (document) {
      inputRef.value = document.getElementById('input')!;
      if ((e.metaKey && e.key === 'k') || (e.ctrlKey && e.key === 'k')) {
        inputRef.value.focus();
      }
    }
  };

  useEventListener('keydown', handleKeyDownFilter);

  return {
    handleKeyDownFilter,
    onToggleArea
  };
}
