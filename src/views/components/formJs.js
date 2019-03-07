 export default {
    data() {
      return {
        ruleForm: {
          info: '',
          area: '',
          date1: '',
          date2: '',
          effect: false,
          type: [],
          desc: ''
        },
        rules: {
          info: [
            { required: true, message: '请输入报事描述', trigger: 'blur' },
            { min: 10, max: 20, message: '长度在 10 到 20 个字符', trigger: 'blur' }
          ],
          area: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
      }
    }
  }