import { type MaybeRefOrGetter, ref, toRaw, toValue } from 'vue'
import { useCommentsMutations } from '../mutations/comments'
import type { Comment } from '../types/comment'

export function useEmojiPicker<T extends Comment, E extends NonNullable<T['reactions']>[number]>(comment: MaybeRefOrGetter<T>, userId?: string) {
  const reactions = ref(toValue(comment).reactions || [])
  const { updateComment } = useCommentsMutations()

  function removeOrSetReaction(emoji: E) {
    const index = reactions.value.findIndex(r => r.type === emoji.type)
    if (index !== -1) {
      const userIndex = (reactions.value[index].users ?? [])?.findIndex(u => u === userId)
      if (userIndex !== -1) {
        reactions.value[index].count!--
        reactions.value[index].users?.splice(userIndex, 1)
      }
      else {
        reactions.value[index].count! += 1
        reactions.value[index].users?.push(userId)
      }
      if (reactions.value[index].users?.length === 0)
        reactions.value.splice(index, 1)
    }
    else {
      reactions.value.push({
        ...emoji,
        count: 1,
        users: [
          ...(emoji.users || []),
          userId,
        ],
      })
    }

    updateComment({
      _id: toValue(comment)._id,
      reactions: toRaw(reactions.value),
    })
  }

  return {
    reactions,
    removeOrSetReaction,
  }
}
