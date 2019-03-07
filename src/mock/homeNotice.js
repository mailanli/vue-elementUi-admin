import Mock from 'mockjs'
import { param2Obj } from '@/utils'

const List = []
const count = 100
const Random = Mock.Random // 生成各种随机数据
for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    workingOrderNum: '@increment(13727000000)', // 工单号
    'optionName|1': ['待审核', '待销单', '待完成', '待接单'], // 状态
    repairManName: Random.cname(), // 报事处理人
    repairManTel: '@increment(13727000000)', // 报事人电话
    'serviceTypeName|1': ['公区服务', '户内服务'], // 服务类型
    'typeName|1': ['工程', '环境', '安全', '网络'], // 服务类型
    newTime: '@now' // 最近处理时间
  }))
}

export default {
  getList: config => {
    // const { accounts, type, title, page = 1, limit = 20, sort } = param2Obj(config.url)
    // 获取url搜索参数
    const { itemsName, roleName, userName, role, page = 1, limit = 20, sort } = param2Obj(config.url)
    // mock搜索过滤
    let mockList = List.filter(item => {
      if (role && item.role !== role) return false
      if (roleName && item.roleName !== roleName) return false
      if (itemsName && item.accounts.indexOf(itemsName) < 0) return false
      if (userName && item.userName.indexOf(userName) < 0) return false
      return true
    })

    if (sort === '-id') {
      mockList = mockList.reverse()
    }

    const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

    return {
      total: mockList.length,
      items: pageList
    }
  },
  getPv: () => ({
    pvData: [{ key: 'PC', pv: 1024 }, { key: 'mobile', pv: 1024 }, { key: 'ios', pv: 1024 }, { key: 'android', pv: 1024 }]
  })
}
