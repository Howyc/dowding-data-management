import { MockMethod } from 'vite-plugin-mock'
import List from './list'

const mockData: MockMethod[] = [
  {
    url: '/api/getList',
    method: 'get',
    timeout: 300, // 毫秒
    response: ({ query }) => {
      // do something with query
      return List
    }
  }
]

export default mockData
