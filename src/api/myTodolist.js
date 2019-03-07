import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/myTodolist/list',
    method: 'get',
    params: query
  })
}
