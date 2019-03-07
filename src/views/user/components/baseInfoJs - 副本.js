import { validateURL } from '@/utils/validate'
import { fetchList, fetchArticle } from '@/api/accountManage' // 帐号数据接口


export default {
  data() {
    return {
    	responseData: '',
      idCardEdit: false,
      userNameEdit: false,
      jobNumEdit: false,
      originalIdCard: '',
      idCardForm: {
        idCard: '',
      },
    }
  },
  created() {
    const id = this.$route.params && this.$route.params.id
    this.fetchData(id)
  },
  methods: {
  	fetchData(id) {
      fetchArticle(id).then(response => {
        this.responseData = response.data
        // let jsonD = new Object();
        for( const key in this.responseData ){
          let idD = {values: '', edit:false};
          idD.values = this.responseData[key];
          // idD.edit = false;
          const keys = key;
          // jsonD[keys] = idD;
          this.responseData[keys] = idD;
        }
        // alert(jsonD.id.value);
        alert(JSON.stringify(this.responseData));
        // this.$set(this.responseData.idCard, 'edit', false)
        // this.responseData.idCard.edit = true 
        // this.responseDataStr = JSON.stringify(this.responseData)
        // alert(JSON.stringify(this.responseData))
        // alert(this.responseData)
        // this.responseData =response.data,
        // this.originalIdCard = this.responseData.idCard // 原始idCard

        // this.postForm = response.data
        // Just for test
        // this.postForm.title += `   Article Id:${this.postForm.id}`
        // this.postForm.content_short += `   Article Id:${this.postForm.id}`
      }).catch(err => {
        console.log(err)
      })
    },
    // 取消编辑
    cancelEdit() {
      alert(this.originalIdCard)
      this.responseData.idCard = this.originalIdCard,
      this.idCardEdit = false
      // this.$message({
      //   message: 'The title has been restored to the original value',
      //   type: 'warning'
      // })
    },
    // 修改身份证
    confirmEditIdCard() {
      this.idCardEdit = false
      this.$message({
        message: '修改成功!',
        type: 'success'
      })
    },
    // 修改姓名
    confirmEditUserName() {
      this.userNameEdit = false
      this.$message({
        message: '修改成功!',
        type: 'success'
      })
    },
  }
}
