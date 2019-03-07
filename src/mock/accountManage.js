import Mock from 'mockjs'
import { param2Obj } from '@/utils'

const List = []
const count = 100
const Random = Mock.Random // 生成各种随机数据
for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    telephone: '@increment(13727000000)', // 帐号
    idCard: Random.id(), // 身份证
    userName: Random.cname(), // 姓名
    parseTime: +Mock.Random.date('T'), // 注册时间
    level: '@increment(1)', // 会员等级
    'roleName|1': ['APP维修人员', 'root', '测试人员', '工程经理'], // 角色
    'itemsName|1': ['萍乡碧桂园', '惠东碧桂园（A区）', '山水桃园/碧桂花城物业', '测试移动平台接口区域'], // 挂靠项目
    'accountStatusName|1': ['正常', '未认证', '删除'], // 状态
    'status|1': ['正常', '未认证', '停用'], // 状态
    jobNum: '@increment(200000000)', // 工号
    'departmentName|1': ['物业管理服务部', '工程维修服务部', '物业服务中心', '环境管理服务部'], // 部门
    'sex|1': ['男', '女'], // 性别
    'registerWay|1': ['PC端注册', '移动端注册'],
    'workStatus|1': ['闲', '忙'],
    'qdTime|1': ['未签到', '已签到', '未签退', '已签退'],
    'qdDays|1-100': 10, // 签到天数
    signLongLatitude: '@ctitle(9)',
    adressDetail: '@ctitle(9)',
    'projectName|1': ['萍乡碧桂园', '惠东碧桂园（A区）', '山水桃园/碧桂花城物业', '测试移动平台接口区域'], // 项目
    'parentName|1': ['工程', '绿化'], // 一级技能
    'name|1': ['设备维护组', '绿化护养'], // 二级技能
    'byHours|1-100': 30, // 当月工时
    'syHours|1-100': 30, // 上月工时
    'hourTotal|1-100': 60, // 总工时
    'point|1-1000': 100, // 积分
    importance: '@integer(1, 3)',
    'orderId|1': ['WK180719-826-001', 'WK180719-826-002', 'WK180719-826-003', 'WK180719-826-004'],
    'orderStatusName|1': ['待审核', '待销单', '待完成', '待接单'], // 状态
    timeUsed: '@datetime("yyyy-MM-dd A HH:mm:ss")', // 处理时长
    'orderName|1': ['销单', '完成', '处理', '接单'], // 处理动作
    handlerName: Random.cname(), // 当前工单处理人
    currentHandleName: Random.cname(), // 报事处理人
    'isOrderName|1': ['待审核', '待销单', '待完成', '待接单'],
    size: '@increment',
    'scoreBefore|1-1000': 100, // 交易前积分
    'direction|1-1000': 100, // 交易类型
    'score|1-1000': 100, // 交易后积分
    'balance|1-1000': 100, // 本次积分
    remark: '@cparagraph(2)', // 备注
    'hourBefore|1-1000': 100, // 交易前工时
    'hourCurrent|1-1000': 100, // 本次工时
    content: '@cparagraph(2)', // 内容
    source: Random.cname(), // 发送人
    createTime: '@now', // 发送时间
    'readStatus|1': ['未读', '已读'] // 阅读状态
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
  }),
  // 详情
  getArticle: (config) => {
    const { id } = param2Obj(config.url)
    for (const article of List) {
      if (article.id === +id) {
        return article
      }
    }
  },
  // 新增
  createArticle: () => ({
    data: 'success'
  }),
  // 更新
  updateArticle: () => ({
    data: 'success'
  })
}
