import { type MaybeRefOrGetter, toValue } from 'vue'

type Id = string

export function findById<T extends { id: Id }>(items: MaybeRefOrGetter<T[]>, id: string): T | undefined {
  return toValue(items).find(item => item.id === id)
}
