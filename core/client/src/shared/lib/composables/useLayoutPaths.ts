import type {
  CombinedLink,
  ProjectLink,
  WorkspaceLink,
} from '@/shared/config/types-shared'
import { RouteNames } from '@/shared/config/consts'
import { computed, type MaybeRefOrGetter, toValue } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

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
        pathName: `/board/${project._id}`,
        color: project.color,
      })),
    ]
  })
  function isProject(
    item: CombinedLink,
  ): item is ProjectLink & { pathName: string } {
    return '_id' in item
  }

  function isCurrentPath(item: CombinedLink): boolean {
    if (route.name?.toString().startsWith(RouteNames.members)) {
      return item.pathName === RouteNames.members
    }
    if (isProject(item)) {
      return route.path === `/board/${item._id}`
    }
    return item.pathName === route.name
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
