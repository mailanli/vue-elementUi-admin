import elpanel from '../components/panel/index' // 引入面板组件
import { fetchList, fetchPv } from '@/api/accountManage' // 帐号数据接口
import waves from '@/directive/waves' // 水波纹指令
// 搜索表单字段默认值
const defaultSearchForm = {
  areasId: '', // 区域
  project: '', // 项目
  phone: '', // 手机
  UserAttestation: '', // 是否认证
  department: '', // 部门
  role: '', // 角色
  telephone: '', // 手机
  idCard: '', // 身份证
  userName: '' // 姓名
}
export default {
  components: { elpanel }, // 面板组件
  directives: { waves }, // 水纹
  data() {
    return {
    	searchPanelTit: '帐户管理',
    	listPanelTit: '搜索结果',
    	searchForm: defaultSearchForm, // 搜索表单数据
    	tableKey: 0,
	    list: null,
	    total: null,
	    listLoading: true,
	    listQuery: { // 搜索关键字段
	      page: 1,
	      limit: 20,
        areasId: undefined, // 区域
        project: undefined, // 项目
        phone: undefined, // 手机
        UserAttestation: undefined, // 是否认证
        department: undefined, // 部门
        role: undefined, // 角色
        telephone: undefined, // 手机
        idCard: undefined, // 身份证
        userName: undefined // 姓名
	    },
	    // 新增编辑项-状态
	    statusOptions: ['published', 'draft', 'deleted'],
	    // 新增、编辑数据
	    temp: {
	      accounts: undefined,
	      importance: 1,
	      remark: '',
	      timestamp: new Date(),
	      title: '',
	      type: '',
	      status: 'published'
	    },
	    dialogFormVisible: false,
	    dialogStatus: '',
	    textMap: {
	      update: 'Edit',
	      create: 'Create'
	    },
	    dialogPvVisible: false,
	    pvData: [],
	    rules: {
	      type: [{ required: true, message: 'type is required', trigger: 'change' }],
	      timestamp: [{ type: 'date', required: true, message: 'timestamp is required', trigger: 'change' }],
	      title: [{ required: true, message: 'title is required', trigger: 'blur' }]
	    },
	    downloadLoading: false
    }
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
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
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
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
    },
    // 改变操作状态
    handleModifyStatus(row, status) {
      this.$message({
        message: '操作成功',
        type: 'success'
      })
      row.status = status
    },
    resetTemp() {
      this.temp = {
        accounts: undefined,
        importance: 1,
        remark: '',
        timestamp: new Date(),
        title: '',
        status: 'published',
        type: ''
      }
    },
    // 查看
    // handleShowUserInfo() {
    //   return this.$router.push({ path: './accountInfo' })
    // },
    // 查看
    // handleVisited(row) {
    //   this.temp = Object.assign({}, row) // copy obj
    //   this.temp.timestamp = new Date(this.temp.timestamp)
    //   this.dialogStatus = 'visited'
    //   this.dialogFormVisible = true
    //   this.$nextTick(() => {
    //     this.$refs['dataForm'].clearValidate()
    //   })
    // },
    // 删除
    handleDelete(row) {
      this.$notify({
        title: '成功',
        message: '删除成功',
        type: 'success',
        duration: 2000
      })
      const index = this.list.indexOf(row)
      this.list.splice(index, 1)
    },
    handleFetchPv(pv) {
      fetchPv(pv).then(response => {
        this.pvData = response.data.pvData
        this.dialogPvVisible = true
      })
    },
    // 多选
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    // 批量冻结
    freezeGroup(statu){
      let comments = this.multipleSelection
      if(comments != undefined || comments > 0){
        this.$confirm('确定批量冻结吗?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            for (let i = 0;i<comments.length;i++) {
              comments[i].status = statu
            }
            this.$message({
              type: 'success',
              message: '冻结成功!'
            });
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消冻结'
            });          
          });
    }else{
      this.$confirm('请选择帐号?', '提示', {
          type: 'warning',
          // showConfirmButton: false,
          showCancelButton:false
        })    
     }
    },
    // 批量解冻
    thawGroup(statu){
      let comments = this.multipleSelection
      if(comments != undefined || comments > 0){
      this.$confirm('确定批量解冻吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          for (let i = 0;i<comments.length;i++) {
            comments[i].status = statu
          }
          this.$message({
            type: 'success',
            message: '解冻成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消解冻'
          });          
        });
      }else{
        this.$confirm('请选择帐号?', '提示', {
          type: 'warning',
          // showConfirmButton: false,
          showCancelButton:false
        }) 
      }
    }
  }
}
