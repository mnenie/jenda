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
        method: 'delete',
        path: '/tasks/comments/:id',
        routes: [
          {
            data: args => ({
              _id: args.params.id,
            }),
            entities: {
              params: {
                id: {
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
        path: '/tasks/comments/:id',
        routes: [
          {
            data: (args) => {
              return {
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
    ],
  },
]

export default flatMockServerConfig
