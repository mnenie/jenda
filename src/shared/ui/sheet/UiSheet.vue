<script setup lang="ts">
import { computed, ref, useCssModule } from 'vue';
import { X } from 'lucide-vue-next';

interface Props {
  overlay?: boolean;
  maxWidth?: number;
  transitionDuration?: number;
  overlayClickClose?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  overlay: true,
  maxWidth: 640,
  transitionDuration: 0.35,
  overlayClickClose: true
});

const emit = defineEmits(['opened', 'closed']);

const showSheet = ref(false);
const sheetWidth = ref(0);
const translateValue = ref(100);
const overlayColor = ref('#0000004D');

const style = useCssModule();

const sideSheet = ref<HTMLElement | null>(null);
const sideSheetHeader = ref<HTMLElement | null>(null);
const sideSheetMain = ref<HTMLElement | null>(null);
const sideSheetFooter = ref<HTMLElement | null>(null);
const sideSheetContent = ref<HTMLElement | null>(null);

const isFocused = (element: HTMLElement) => document.activeElement === element;
document.addEventListener('keyup', (event: KeyboardEvent) => {
  const isSheetElementFocused =
    sideSheet.value!.contains(event.target as HTMLElement) && isFocused(event.target as HTMLElement);

  if (event.key === 'Escape' && !isSheetElementFocused) {
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
  return `${props.transitionDuration}s`;
});
const sheetWidthString = computed(() => {
  return sheetWidth.value && sheetWidth.value > 0 ? `${sheetWidth.value + 1}px` : 'auto';
});
const translateValueString = computed(() => {
  return `${translateValue.value}%`;
});
const maxWidthStyle = computed(() => {
  return `${props.maxWidth}px`;
});

const open = () => {
  translateValue.value = 0;
  document.documentElement.style.overflowY = 'hidden';
  document.documentElement.style.overscrollBehavior = 'none';
  showSheet.value = true;
  emit('opened');
};
const close = async () => {
  showSheet.value = false;
  translateValue.value = 100;
  setTimeout(() => {
    document.documentElement.style.overflowY = 'auto';
    document.documentElement.style.overscrollBehavior = '';
    emit('closed');
  }, props.transitionDuration * 1000);
};

const clickOnOverlayHandler = () => {
  if (props.overlayClickClose) {
    close();
  }
};

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
        <footer ref="sideSheetFooter" :class="$style.sheet_footer">
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
    min-width: 450px;
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
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    box-sizing: border-box;
    -webkit-overflow-scrolling: touch;
    touch-action: auto !important;
  }

  .sheet_footer:empty {
    display: none;
  }

  .sheet_header{
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 5px 0px;
    margin-bottom: 20px;

    .header_icon{
      cursor: pointer;
      color: var(--zinc-600);
      position: absolute;
      right: 15px;
      top: 15px;
      transition: color 0.1s ease-in;

      &:hover{
        color: var(--zinc-900);
      }
    }
  }
}
</style>
