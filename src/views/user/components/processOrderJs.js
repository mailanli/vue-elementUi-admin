import { validateURL } from '@/utils/validate'
import { fetchList, fetchArticle } from '@/api/accountManage' // 帐号数据接口
import waves from '@/directive/waves' // 水波纹指令
export default {
  directives: { waves }, // 水纹
  data() {
    return {
    	tableKey: 0,
	    list: null,
	    total: null,
	    listLoading: true,
	    listQuery: { // 搜索关键字段
	      page: 1,
	      limit: 20
        // areasId: undefined, // 区域
        // project: undefined, // 项目
        // phone: undefined, // 手机
        // UserAttestation: undefined, // 是否认证
        // department: undefined, // 部门
        // role: undefined, // 角色
        // telephone: undefined, // 手机
        // idCard: undefined, // 身份证
        // userName: undefined // 姓名
	    }
    }
  },
  created() {
    // 显示数据
    this.getList()
  },
  methods: {
    // 显示数据事件
    getList() {
      this.listLoading = true
      fetchList(this.listQuery).then(response => {
        this.list = response.data.items
        this.total = response.data.total
        setTimeout(() => {
          this.listLoading = false
        }, 1.5 * 1000)
      })
    },
    // 每页显示条数
    handleSizeChange(val) {
      this.listQuery.limit = val
      this.getList()
    },
    // 当前页
    handleCurrentChange(val) {
      this.listQuery.page = val
      this.getList()
    }
  }
}
