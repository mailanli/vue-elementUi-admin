import Mock from 'mockjs'
import loginAPI from './login'
import articleAPI from './article'
import accountManageAPI from './accountManage'
import remoteSearchAPI from './remoteSearch'
import transactionAPI from './transaction'
import myTodolistAPI from './myTodolist'

// Mock.setup({
//   timeout: '350-600'
// })

// 登录相关
Mock.mock(/\/login\/login/, 'post', loginAPI.loginByUsername)
Mock.mock(/\/login\/logout/, 'post', loginAPI.logout)
Mock.mock(/\/user\/info\.*/, 'get', loginAPI.getUserInfo)

// 帐号相关
Mock.mock(/\/accountManage\/list/, 'get', accountManageAPI.getList)
Mock.mock(/\/accountManage\/detail/, 'get', accountManageAPI.getArticle)
Mock.mock(/\/accountManage\/pv/, 'get', accountManageAPI.getPv)
Mock.mock(/\/accountManage\/create/, 'post', accountManageAPI.createArticle)
Mock.mock(/\/accountManage\/update/, 'post', accountManageAPI.updateArticle)

// 文章相关
Mock.mock(/\/article\/list/, 'get', articleAPI.getList)
Mock.mock(/\/article\/detail/, 'get', articleAPI.getArticle)
Mock.mock(/\/article\/pv/, 'get', articleAPI.getPv)
Mock.mock(/\/article\/create/, 'post', articleAPI.createArticle)
Mock.mock(/\/article\/update/, 'post', articleAPI.updateArticle)

// 搜索相关
Mock.mock(/\/search\/user/, 'get', remoteSearchAPI.searchUser)

// 账单相关
Mock.mock(/\/transaction\/list/, 'get', transactionAPI.getList)

// 待办工单
Mock.mock(/\/myTodolist\/list/, 'get', myTodolistAPI.getList)

// 待办工单
Mock.mock(/\/homeNotice\/list/, 'get', myTodolistAPI.getList)

export default Mock
