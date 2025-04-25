import type { FlatMockServerConfig } from 'mock-config-server'
import { board_data } from './constants/board'
import { task_data } from './constants/task'

const flatMockServerConfig: FlatMockServerConfig = [
  {
    baseUrl: '/api/mcs',
  },
  {
    configs: [
      {
        path: '/tasks/:taskId',
        method: 'get',
        routes: [
          {
            entities: {
              params: {
                taskId: {
                  checkMode: 'function',
                  value: actualValue => +actualValue >= 0,
                },
              },
            },
            data: args => ({
              ...task_data,
              _id: args.params.taskId,
            }),
          },
        ],
      },
      {
        path: '/tasks/:taskId',
        method: 'patch',
        routes: [
          {
            entities: {
              params: {
                taskId: {
                  checkMode: 'function',
                  value: actualValue => +actualValue >= 0,
                },
              },
              body: {
                checkMode: 'function',
                value: (body) => {
                  return typeof body === 'object' && body !== null
                },
              },
            },
            data: args => ({
              ...task_data,
              _id: args.params.taskId,
              ...args.body,
              updatedAt: new Date().toISOString(),
            }),
          },
        ],
      },
      {
        path: '/boards/:boardId',
        method: 'get',
        routes: [
          {
            entities: {
              params: {
                boardId: {
                  checkMode: 'function',
                  value: actualValue => +actualValue >= 0,
                },
              },
            },
            data: args => ({
              ...board_data,
              _id: args.params.boardId,
            }),
          },
        ],
      },
      {
        path: '/tasks/:taskId/comments',
        method: 'get',
        routes: [
          {
            entities: {
              params: {
                taskId: {
                  checkMode: 'function',
                  value: actualValue => +actualValue >= 0,
                },
              },
            },
            data: () => (
              [...task_data.commentsGroup]
            ),
          },
        ],
      },
      {
        method: 'delete',
        path: '/tasks/:taskId/comments/:id',
        routes: [
          {
            data: args => ({
              _id: args.params.id,
              taskId: args.params.taskId,
            }),
            entities: {
              params: {
                id: {
                  checkMode: 'function',
                  value: actualValue => +actualValue >= 0,
                },
                taskId: {
                  checkMode: 'function',
                  value: actualValue => +actualValue >= 0,
                },
              },
            },
          },
        ],
      },
      {
        method: 'post',
        path: '/tasks/:taskId/comments',
        routes: [
          {
            data: args => ({
              ...args.body,
              taskId: args.params.taskId,
              _id: `${Date.now()}`,
              createdAt: new Date().toISOString(),
            }),
            entities: {
              body: {
                checkMode: 'function',
                value: (body) => {
                  return typeof body === 'object' && body !== null
                },
              },
              params: {
                taskId: {
                  checkMode: 'function',
                  value: actualValue => +actualValue >= 0,
                },
              },
            },
          },
        ],
      },
      {
        method: 'patch',
        path: '/tasks/:taskId/comments/:id',
        routes: [
          {
            data: (args) => {
              return {
                taskId: args.params.taskId,
                updatedComment: {
                  user: {
                    _id: '1',
                    email: 'alex@test.com',
                    photoUrl: 'https://avatars.githubusercontent.com/u/121057011?v=4',
                    role: 'admin',
                  },
                  _id: args.params.id,
                  ...args.body,
                },
              }
            },
            entities: {
              params: {
                id: {
                  checkMode: 'function',
                  value: actualValue => +actualValue >= 0,
                },
                taskId: {
                  checkMode: 'function',
                  value: actualValue => +actualValue >= 0,
                },
              },
              body: {
                checkMode: 'function',
                value: (body) => {
                  return typeof body === 'object' && body !== null
                },
              },
            },
          },
        ],
      },
      {
        path: '/tasks/:taskId/attachments',
        method: 'get',
        routes: [
          {
            entities: {
              params: {
                taskId: {
                  checkMode: 'function',
                  value: actualValue => +actualValue >= 0,
                },
              },
            },
            data: () => (
              [...task_data.attachments]
            ),
          },
        ],
      },
    ],
  },
]

export default flatMockServerConfig
