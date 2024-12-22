import type {
  CombinedLink,
  ProjectLink,
  WorkspaceLink,
} from '@/shared/config/types-shared'
import { computed, type MaybeRefOrGetter, toValue } from 'vue'
import { useI18n } from 'vue-i18n'
import { type RouterLinkProps, useRoute } from 'vue-router/auto'

export function useLayoutPaths(
  links: MaybeRefOrGetter<WorkspaceLink[]>,
  projects: MaybeRefOrGetter<ProjectLink[]>,
) {
  const route = useRoute()
  const { t } = useI18n()

  const combinedArr = computed(() => {
    return [
      ...toValue(links).map(link => ({
        ...link,
        name: t(`sidebar.${link.name}`),
        icon: link.icon,
      })),
      ...toValue(projects).map(project => ({
        _id: project._id,
        name: project.name,
        pathName: `/boards/${project._id}`,
        color: project.color,
      })),
    ]
  })
  function isProject(
    item: CombinedLink,
  ): item is ProjectLink & { pathName: RouterLinkProps['to'] } {
    return '_id' in item
  }

  function isCurrentPath(item: CombinedLink): boolean {
    if (isProject(item)) {
      return route.path === `/boards/${item._id}`
    }
    return route.path === `/${item.pathName}`
  }

  const active = computed(() => {
    const activeItem = toValue(combinedArr).find(item => isCurrentPath(item))
    return {
      ...activeItem,
      name: activeItem!.name,
      extendedAttrs: {
        color: 'color' in activeItem! ? activeItem.color : undefined,
        icon: 'icon' in activeItem! ? activeItem.icon : undefined,
      },
    }
  })

  return {
    active,
  }
}
