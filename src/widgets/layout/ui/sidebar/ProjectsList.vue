<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { UiButton } from '@/shared/ui';
import type { Board } from '@/entities/board';
import { Arrow, Plus, Project } from '@/shared/assets/icons';

const props = defineProps<{
  boards: Board[];
  isExpanded: boolean;
}>();

const showList = ref(true);
const showPlusIcon = ref(false);

const route = useRoute();

const _projects = computed(() => {
  return props.boards.map((proj) => ({
    ...proj,
    isActive: proj._id === route.params.id && route.params.id !== undefined
  }));
});

const contentPosition = computed(() => {
  return props.isExpanded ? 'flex-start' : 'center';
});

function changeShowList() {
  showList.value = !showList.value;
}
</script>

<template>
  <div :class="$style.about" @mouseover="showPlusIcon = true" @mouseleave="showPlusIcon = false">
    <div :class="$style.name">
      <Arrow
        v-show="isExpanded"
        :class="$style.icon"
        :style="{ transform: !showList ? 'rotate(-90deg)' : '' }"
        @click="changeShowList"
      />
      <p class="text-sm" :class="$style.section">{{ $t('sidebar.projects') }}</p>
    </div>
    <Plus v-show="isExpanded && showPlusIcon" :class="$style.icon" style="font-size: 16px" />
  </div>
  <div v-if="showList" :class="$style.sidebar_projects">
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
        :style="{ padding: !isExpanded ? '0px' : '', justifyContent: contentPosition }"
      >
        <Project :class="$style.project_indicator" :style="{ color: project.color }" />
        <span v-show="isExpanded" class="text-sm">{{ project.name }}</span>
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
    font-size: 18px;
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
  .about{
    .name{
      .section{
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
          background-color: var(--zinc-700);
        }
      }
    }
  }
}
</style>
