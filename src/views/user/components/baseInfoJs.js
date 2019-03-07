import { validateURL } from '@/utils/validate'
import { fetchList, fetchArticle } from '@/api/accountManage' // 帐号数据接口


export default {
  data() {
    return {
    	responseData: '',
      editVis:{
        idCard:false,
        userName: false,
        jobNum: false,
        departmentName: false,
      },
      departmentOptions:['物业管理服务部', '工程维修服务部', '物业服务中心', '环境管理服务部'],
      original: '',
    }
  },
  created() {
    const id = this.$route.params && this.$route.params.id
    this.fetchData(id)
  },
  methods: {
  	fetchData(id) {
      fetchArticle(id).then(response => {
        this.responseData = response.data,
        this.original = Object.assign({}, this.responseData)
      }).catch(err => {
        console.log(err)
      })
    },
    // 取消编辑
    cancelEdit(val) {
      this.responseData.idCard = this.original.idCard,
      this.editVis[val]= false
      // this.$message({
      //   message: 'The title has been restored to the original value',
      //   type: 'warning'
      // })
    },
    // 修改
    updateEdit(val) {
      this.editVis[val]= false
      this.$message({
        message: '修改成功!',
        type: 'success'
      })
    },
  }
}
