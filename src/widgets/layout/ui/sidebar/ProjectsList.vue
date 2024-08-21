<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { UiButton } from '@/shared/ui';
import type { Board } from '@/entities/board';
import { CircleFadingPlus } from 'lucide-vue-next';
import { useDark } from '@vueuse/core';

const props = defineProps<{
  boards: Board[];
  isExpanded: boolean;
}>();

const route = useRoute();

const isCurrentPath = (project: Board) =>
  computed(() => {
    return project._id === route.params.id && route.params.id !== undefined;
  });

const _projects = computed(() => {
  return props.boards.map((proj) => ({
    ...proj,
    isActive: isCurrentPath(proj).value
  }));
});

const { t } = useI18n();
const isDark = useDark();

const contentPosition = computed(() => {
  return props.isExpanded ? 'flex-start' : 'center';
});

const projectName = computed(() => {
  return (project: Board) => {
    return project.name.slice(0, 1);
  };
});
</script>

<template>
  <div :class="$style.about">
    <p class="text-sm" :class="$style.section">{{ t('sidebar.projects') }}</p>
    <CircleFadingPlus
      v-if="isExpanded"
      :size="14"
      :color="!isDark ? 'var(--zinc-800)' : 'var(--zinc-300)'"
      style="cursor: pointer;"
    />
  </div>
  <div :class="$style.sidebar_projects">
    <RouterLink
      v-for="project in _projects"
      :key="project._id"
      v-tooltip.right="{
        content: project.name,
        triggers: ['hover'],
        disabled: isExpanded
      }"
      :to="`/board/${project._id}`"
      :class="$style.project"
    >
      <UiButton
        :variant="project.isActive ? 'secondary' : 'ghost'"
        :class="$style.proj_btn"
        :style="{ padding: !isExpanded ? '0px' : '' }"
      >
        <div :class="$style.project_indicator" :style="{ backgroundColor: project.color }">
          {{ projectName(project) }}
        </div>
        <span v-show="isExpanded" class="text-sm">{{ project.name }}</span>
      </UiButton>
    </RouterLink>
  </div>
</template>

<style module lang="scss">
@import '@/app/styles/mixins';

.about {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 12px;

  .section {
    color: var(--zinc-300);
    text-transform: uppercase;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
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
      justify-content: v-bind('contentPosition');
      gap: 6px;
      box-shadow: none;

      .project_indicator {
        width: 20px;
        height: 20px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--zinc-50);
        // text-transform: lowercase;
      }
    }

    & span {
      font-weight: 500 !important;
      color: var(--zinc-900);
    }
  }
}

:global(html.dark) {
  .sidebar_projects {
    .project {
      .proj_btn {
        & span {
          color: var(--zinc-100);
        }
        &:hover {
          background-color: var(--zinc-700);
        }
      }
    }
  }
}
</style>
