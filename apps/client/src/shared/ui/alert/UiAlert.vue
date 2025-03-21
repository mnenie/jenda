<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import { createReusableTemplate } from '@vueuse/core'
import { alertVariants, type AlertVariants } from '.'
import { cn } from '@/shared/libs/shadcn/utils'

interface AlertProps {
  variant?: AlertVariants['variant']
  closable?: boolean
  content?: string
  rp?: string
  withAnimation?: boolean
  class?: HTMLAttributes['class']
}

const { variant = 'default', class: alertClass, ...props } = defineProps<AlertProps>()

const emits = defineEmits(['close'])

const isAlertVisible = defineModel<boolean>('open', {
  default: true,
})

const valueOfRightPadding = computed(() => (props.rp ? '' : props.closable ? '32px' : '10px'))

function closeAlert() {
  isAlertVisible.value = false
  emits('close')
}

const [DefineTemplate, ReuseTemplate] = createReusableTemplate()
</script>

<template>
  <DefineTemplate>
    <div
      v-if="isAlertVisible"
      :class="cn(
        'alert',
        alertVariants({ variant }),
        alertClass,
      )"
      :style="{ 'padding-right': valueOfRightPadding }"
    >
      <slot v-if="$slots.default || content">
        <span class="text-default">{{ content }}</span>
      </slot>
      <div
        v-if="closable"
        i-lucide-x
        class="alert-close"
        @click="closeAlert"
      />
    </div>
  </DefineTemplate>
  <Transition v-if="withAnimation" name="slide-fade">
    <ReuseTemplate />
  </Transition>
  <ReuseTemplate v-else />
</template>

<style lang="css" scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition:
    opacity 0.15s ease-out,
    transform 0.15s ease-out;
  will-change: transform, opacity;
}

.slide-fade-enter-from {
  transform: translateY(20px) translateX(-50%);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateY(20px) translateX(-50%);
  opacity: 0;
}
</style>
