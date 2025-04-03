import type { Preset, Shortcut, StaticShortcutMap } from 'unocss'

export type PresetShortcuts<T extends StaticShortcutMap | Shortcut | undefined> = Exclude<Preset['shortcuts'], T>

export type ModuleShortcuts<U extends string = string> = [RegExp, (params: RegExpExecArray) => U][] | Record<U, U>[]
