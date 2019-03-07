import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/homeNotice/list',
    method: 'get',
    params: query
  })
}
