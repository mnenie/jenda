import type { Component } from 'vue'

export interface Link {
  id: number
  name: string
  pathName: string
  icon: Component
}

export interface HeaderNavLink {
  id: number
  name: string
  pagePrefix: string
}
