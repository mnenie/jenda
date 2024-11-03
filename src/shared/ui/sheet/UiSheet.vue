<script setup lang="ts">
import { computed, ref, useCssModule, useTemplateRef } from 'vue';
import { X } from 'lucide-vue-next';

interface SheetProps {
  overlay?: boolean;
  maxWidth?: number;
  transitionDuration?: number;
  minWidth?: number;
  overlayClickClose?: boolean;
}

const {
  overlay = true,
  maxWidth = 450,
  transitionDuration = 0.35,
  minWidth = 450,
  overlayClickClose = true
} = defineProps<SheetProps>();

const emit = defineEmits(['opened', 'closed']);

const showSheet = ref(false);
const sheetWidth = ref(0);
const translateValue = ref(100);
const overlayColor = ref('#0000004D');

const style = useCssModule();

const sideSheet = useTemplateRef<HTMLElement | null>('sideSheet');
const sideSheetHeader = useTemplateRef<HTMLElement | null>('sideSheetHeader');
const sideSheetMain = useTemplateRef<HTMLElement | null>('sideSheetMain');
const sideSheetFooter = useTemplateRef<HTMLElement | null>('sideSheetFooter');
const sideSheetContent = useTemplateRef<HTMLElement | null>('sideSheetContent');

document.addEventListener('keyup', (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    close();
  }
});

const sheetContentClasses = computed(() => {
  return {
    [style.sheet_content]: true,
    [style.sheet_content__fullscreen]: sheetWidth.value >= window.innerWidth
  };
});

const transitionDurationTime = computed(() => {
  return `${transitionDuration}s`;
});
const sheetWidthString = computed(() => {
  return sheetWidth.value && sheetWidth.value > 0 ? `${sheetWidth.value + 1}px` : 'auto';
});
const translateValueString = computed(() => {
  return `${translateValue.value}%`;
});
const maxWidthStyle = computed(() => {
  return `${maxWidth}px`;
});
const minWidthStyle = computed(() => {
  return `${minWidth}px`;
});

function open() {
  translateValue.value = 0;
  document.documentElement.style.overflowY = 'hidden';
  document.documentElement.style.overscrollBehavior = 'none';
  showSheet.value = true;
  emit('opened');
}
async function close() {
  showSheet.value = false;
  translateValue.value = 100;
  setTimeout(() => {
    document.documentElement.style.overflowY = 'auto';
    document.documentElement.style.overscrollBehavior = '';
    emit('closed');
  }, transitionDuration * 1000);
}

function clickOnOverlayHandler() {
  if (overlayClickClose) {
    close();
  }
}

defineExpose({ open, close });
</script>

<template>
  <Teleport to="body">
    <div ref="sideSheet" :class="$style.sheet" :aria-hidden="!showSheet" role="dialog">
      <Transition>
        <div v-show="overlay && showSheet" :class="$style.sheet_overlay" @click="clickOnOverlayHandler" />
      </Transition>
      <div ref="sideSheetContent" :class="sheetContentClasses">
        <header ref="sideSheetHeader" :class="$style.sheet_header">
          <slot name="header" />
          <X :size="17" :class="$style.header_icon" @click="close" />
        </header>
        <main ref="sideSheetMain" :class="$style.sheet_main">
          <slot />
        </main>
        <footer ref="sideSheetFooter" :class="[$style.sheet_footer, 'text-sm']">
          <slot name="footer" />
        </footer>
      </div>
    </div>
  </Teleport>
</template>

<style module lang="scss">
.sheet {
  z-index: 99999;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: visibility v-bind('transitionDurationTime');

  &[aria-hidden='false'] {
    visibility: visible;
  }

  &[aria-hidden='true'] {
    visibility: hidden;
    pointer-events: none;
  }

  .sheet_overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background: v-bind('overlayColor');
  }

  .sheet_content {
    display: flex;
    flex-direction: column;
    padding: 20px;
    min-width: v-bind('minWidthStyle');
    width: 100%;
    background: #ffffff;
    overflow-y: hidden;
    transform: translate3d(v-bind('translateValueString'), 0, 0);
    width: v-bind('sheetWidthString');
    max-width: v-bind('maxWidthStyle');
    height: 100%;
    box-sizing: border-box;
    pointer-events: all;

    .sheet_content__fullscreen {
      border-radius: 0;
    }

    &:not(.side-sheet__content--dragging) {
      transition: v-bind('transitionDurationTime') ease;
    }
  }

  .sheet_main {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    box-sizing: border-box;
    -webkit-overflow-scrolling: touch;
    touch-action: auto !important;
  }

  .sheet_footer {
    display: flex;
    margin-top: auto;
  }

  .sheet_footer:empty {
    display: none;
  }

  .sheet_header {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 5px 0px;
    margin-bottom: 20px;

    .header_icon {
      cursor: pointer;
      color: var(--zinc-600);
      position: absolute;
      right: 15px;
      top: 15px;
      transition: color 0.1s ease-in;

      &:hover {
        color: var(--zinc-900);
      }
    }
  }
}

:global(html.dark) {
  .sheet {
    .sheet_content {
      background-color: rgba(var(--zinc-rgb-800), 1);
    }
    .sheet_header {
      .header_icon {
        color: var(--zinc-400);
        &:hover {
          color: var(--zinc-300);
        }
      }
    }
  }
}
</style>
