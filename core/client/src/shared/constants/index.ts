import type { InjectionKey } from 'vue'
import type { AuthWorkspace, Expanded } from '../config/types-shared'

export const expandedKey = Symbol('expanded') as InjectionKey<Expanded>
export const authWorkspaceKey = Symbol('auth-workspace') as InjectionKey<AuthWorkspace>
