import type { Component } from 'vue'

interface Path {
  pathName: string
}

export interface WorkspaceLink extends Path {
  name: string
  icon?: Component | string
}
export interface ProjectLink extends Path {
  _id: string
  name: string
  color?: string
}

export type CombinedLink = WorkspaceLink | ProjectLink
