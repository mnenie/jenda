<script setup lang="ts">
import { useExpanded } from '@/shared/lib/composables'

const expandedComposable = useExpanded()

const { isExpanded, onToggleArea } = expandedComposable.getExpanded()
</script>

<template>
  <div
    class="w-full flex items-center"
    :class="[isExpanded ? ' h-48px px-14px py-10px border-b border-b-solid border-layout' : 'pt-14px pb-21px']"
  >
    <div
      class="w-full flex items-center"
      :style="{ justifyContent: isExpanded ? 'space-between' : 'center' }"
    >
      <div
        v-show="isExpanded"
        class="flex items-center gap-px"
      >
        <div
          class="w-30px h-30px bg-neutral-100 border border-solid border-neutral-200 rounded-lg flex items-center
          justify-center mr-1.5 cursor-pointer"
        >
          <img src="https://avatars.githubusercontent.com/u/185750893?s=100&v=4" class="object-cover w-full rounded-lg" />
        </div>
        <p class="text-lg !fw600 dark:text-neutral-100">
          Example.io
        </p>
        <div
          i-lucide-chevron-down
          class="cursor-pointer text-sm text-neutral-600 ml-1px dark:text-neutral-400"
        />
      </div>
      <div
        v-if="isExpanded"
        i-hugeicons-sidebar-left-01
        class="cursor-pointer text-xl text-neutral-700 dark:text-neutral-300"
        @click="onToggleArea"
      />
      <div
        v-else
        i-hugeicons-sidebar-right-01
        class="cursor-pointer text-xl text-neutral-800 dark:text-neutral-200"
        @click="onToggleArea"
      />
    </div>
  </div>
</template>
