import baseInfo from './components/baseInfo' // 基本信息
import processOrder from './components/processOrder' // 处理工单
import reportOrder from './components/reportOrder' // 报事工单
import integralDetail from './components/integralDetail' // 积分明细
import workTimeDetail from './components/workTimeDetail' // 工时明细
import webMail from './components/webMail' // 站内信
import detailLevel from './components/detailLevel' //明细等级
export default {
  name: 'accountInfo',
  components: { baseInfo, processOrder, detailLevel, reportOrder, integralDetail, workTimeDetail, webMail }, // 组件
  data() {
    return {
    }
  },
  methods: {
  }
}
