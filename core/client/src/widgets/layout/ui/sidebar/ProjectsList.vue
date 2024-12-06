<script setup lang="ts">
import type { Board } from '@/entities/board'
import { UiButton } from '@/shared/ui'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps<{
  boards: Board[]
  isExpanded: boolean
}>()

const showList = ref(true)
const showPlusIcon = ref(false)

const route = useRoute()

const _projects = computed(() => {
  return props.boards.map(proj => ({
    ...proj,
    isActive: proj._id === route.params.id && route.params.id !== undefined,
  }))
})

const contentPosition = computed(() => {
  return props.isExpanded ? 'flex-start' : 'center'
})

function changeShowList() {
  showList.value = !showList.value
}
</script>

<template>
  <div
    class="flex items-center justify-between w-full px-2 pt-0 pb-3"
    @mouseover="showPlusIcon = true"
    @mouseleave="showPlusIcon = false"
  >
    <div class="flex items-center gap-1.5 w-full">
      <div
        v-show="isExpanded"
        i-lucide-chevron-down
        class="cursor-pointer text-base text-neutral-500 dark:text-neutral-400"
        :style="{ transform: !showList ? 'rotate(-90deg)' : '' }"
        @click="changeShowList"
      />
      <p
        class="text-neutral-500 dark:text-neutral-400 text-sm capitalize text-ellipsis
        whitespace-nowrap overflow-hidden"
      >
        {{ $t('sidebar.projects') }}
      </p>
    </div>
    <div
      v-show="isExpanded && showPlusIcon"
      i-lucide-plus
      class="cursor-pointer text-base text-neutral-500 dark:text-neutral-400"
    />
  </div>
  <div
    v-if="showList"
    class="flex flex-col gap-5px justify-start mb-30px"
  >
    <RouterLink
      v-for="project in _projects"
      :key="project._id"
      v-tooltip.right="{
        content: project.name,
        triggers: ['hover'],
        disabled: isExpanded,
      }"
      :to="`/board/${project._id}`"
      class="flex items-center gap-1.5 cursor-pointer text-neutral-900 justify-start w-full"
    >
      <UiButton
        :variant="project.isActive ? 'secondary' : 'ghost'"
        class="w-full gap-2 shadow-none py-0 px-2 transition-all duration-200 ease
        focus:bg-#e7e7e799 hover:bg-neutral-200/30 dark:focus:bg-neutral-700/50 dark:hover:bg-neutral-700/30"
        :style="{ padding: !isExpanded ? '0px' : '', justifyContent: contentPosition }"
      >
        <div
          i-jenda-custom-project
          class="w-18px h-18px rounded flex justify-center items-center"
          :style="{ color: project.color }"
        />
        <span
          v-show="isExpanded"
          class="text-sm text-ellipsis overflow-hidden max-w-80%
          whitespace-nowrap !fw500 text-neutral-900 dark:text-neutral-100"
        >
          {{ project.name }}
        </span>
      </UiButton>
    </RouterLink>
  </div>
</template>

<style module lang="scss">
@use '@/app/styles/mixins' as *;

.about {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 10px 12px 10px;

  .name {
    display: flex;
    align-items: center;
    gap: 6px;
    width: 100%;

    .section {
      color: var(--zinc-400);
      text-transform: capitalize;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }

  .icon {
    color: var(--zinc-400);
    cursor: pointer;
  }
}

.sidebar_projects {
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: flex-start;
  margin-bottom: 30px;

  .project {
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    color: var(--zinc-900);
    justify-content: flex-start;
    width: 100%;

    .proj_btn {
      width: 100%;
      gap: 6px;
      box-shadow: none;
      padding: 0 10px;
      transition: all 0.1s ease;
      &:hover {
        background-color: rgba(var(--zinc-rgb-200), 0.3);
      }
      &:focus {
        background-color: rgba(231, 231, 231, 0.6);
      }

      .project_indicator {
        width: 18px;
        height: 18px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-transform: lowercase;

        & > span {
          color: var(--zinc-50);
          text-overflow: ellipsis;
        }
      }
    }

    & span {
      font-weight: 500 !important;
      color: var(--zinc-900);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      display: inline-block;
      max-width: 86%;
    }
  }
}

:global(html.dark) {
  .about {
    .name {
      .section {
        color: var(--zinc-300);
      }
    }
    .icon {
      color: var(--zinc-300);
    }
  }
  .sidebar_projects {
    .project {
      .proj_btn {
        & span {
          color: var(--zinc-100);
        }
        &:hover {
          background-color: rgba(var(--zinc-rgb-600), 0.3);
        }
        &:focus {
          background-color: rgba(var(--zinc-rgb-600), 0.5);
        }
      }
    }
  }
}
</style>
