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
    ],
  },
]

export default flatMockServerConfig
