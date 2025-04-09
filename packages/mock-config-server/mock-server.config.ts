import type { FlatMockServerConfig } from 'mock-config-server'
import { task_data } from './constants/task'

const flatMockServerConfig: FlatMockServerConfig = [
  {
    baseUrl: '/api/mcs',
  },
  {
    configs: [
      {
        path: '/task/:taskId',
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
            data: task_data,
          },
        ],
      },
    ],
  },
]

export default flatMockServerConfig
