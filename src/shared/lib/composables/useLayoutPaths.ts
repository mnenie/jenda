import { computed, toValue, type MaybeRefOrGetter } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { RouteNames } from '@/shared/config/consts';
import type { CombinedLink, ProjectLink, WorkspaceLink } from '@/shared/config/types-shared';

export function useLayoutPaths(
  links: MaybeRefOrGetter<WorkspaceLink[]>,
  projects: MaybeRefOrGetter<ProjectLink[]>
) {
  const route = useRoute();
  const { t } = useI18n();

  const combinedArr = computed(() => {
    return [
      ...toValue(links).map((link) => ({
        ...link,
        name: t(`sidebar.${link.name}`)
      })),
      ...toValue(projects).map((project) => ({
        _id: project._id,
        name: project.name,
        pathName: `/board/${project._id}`
      }))
    ];
  });
  function isProject(item: CombinedLink): item is ProjectLink & { pathName: string } {
    return '_id' in item;
  }

  function isCurrentPath(item: CombinedLink): boolean {
    if (route.name?.toString().startsWith(RouteNames.members)) {
      return item.pathName === RouteNames.members;
    }
    if (isProject(item)) {
      return route.path === `/board/${item._id}`;
    }
    return item.pathName === route.name;
  }

  const active = computed(() => {
    const activeItem = toValue(combinedArr).find((item) => isCurrentPath(item));
    return { ...activeItem, name: activeItem!.name };
  });

  return {
    active
  };
}
