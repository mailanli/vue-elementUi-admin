export default {
  data() {
    return {
      ruleForm: {
        info: '',
        area: '',
        date1: '',
        date2: '',
        serviceType: '1',
        isPaid: '1',
        postSource: '1',
        postType: '1',
        isUrgent: '1',
        isBespeak: '1',
        bespeakTime: '',
        createBy: '超级管理员',
        department: '物业管理服务部',
        effect: false,
        type: [],
        desc: ''
      },
      rules: {
        info: [
          { required: true, message: '请输入报事描述', trigger: 'blur' },
          { min: 10, max: 100, message: '输入内容长度必须在10到100个字符', trigger: 'blur' }
        ],
        area: [
          { required: true, message: '请选择区域', trigger: 'change' }
        ],
        project: [
          { required: true, message: '请选择项目', trigger: 'change' }
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
