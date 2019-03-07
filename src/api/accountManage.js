import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/accountManage/list',
    method: 'get',
    params: query
  })
}

export function fetchArticle(id) {
  return request({
    url: '/accountManage/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/accountManage/pv',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: '/accountManage/create',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/accountManage/update',
    method: 'post',
    data
  })
}
