import type { Comment, CommentGroup } from '../types/comment'
import { $fetch } from '@/shared/api/instance'

export async function getTaskComments<T extends CommentGroup>(id: string): Promise<T[]> {
  return $fetch<T[]>(`/tasks/${id}/comments`)
}

export async function postComment<T extends Pick<Comment, 'message' | 'user'>>(data: Partial<T>): Promise<T> {
  return $fetch<T>('/tasks/comments', {
    method: 'POST',
    body: {
      ...data,
    },
  })
}

export async function patchComment<T extends Comment>(data: Partial<T>): Promise<T> {
  return $fetch<T>(`/tasks/comments/${data._id}`, {
    method: 'PATCH',
    body: data,
  })
}

export async function deleteCommentById(id: string): Promise<void> {
  return $fetch(`/tasks/comments/${id}`, {
    method: 'DELETE',
  })
}
