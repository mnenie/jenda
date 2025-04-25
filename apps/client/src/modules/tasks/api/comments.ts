import type { Comment, CommentGroup } from '../types/comment'
import { $fetch } from '@/shared/api/instance'

export async function getTaskComments<T extends CommentGroup>(id: string): Promise<T[]> {
  return $fetch<T[]>(`/tasks/${id}/comments`)
}

export async function postComment<T extends Pick<Comment, 'message' | 'user'>>(taskId: string, data: Partial<T>): Promise<T> {
  return $fetch<T>(`/tasks/${taskId}/comments`, {
    method: 'POST',
    body: {
      ...data,
      taskId,
    },
  })
}

export async function patchComment<T extends Comment>(taskId: string, data: Partial<T>): Promise<T> {
  return $fetch<T>(`/tasks/${taskId}/comments/${data._id}`, {
    method: 'PATCH',
    body: data,
  })
}

export async function deleteCommentById(taskId: string, id: string): Promise<void> {
  return $fetch(`/tasks/${taskId}/comments/${id}`, {
    method: 'DELETE',
  })
}
