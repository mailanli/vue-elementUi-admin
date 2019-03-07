import { isvalidUsername } from '@/utils/validate'
import regAgreement from './regAgreement'

export default {
  components: { regAgreement },
  name: 'forgetPassword',
  data() {
    // 手机验证
    const validateTelephone = (rule, value, callback) => {
      if (!validateTelephone(value)) {
        callback(new Error('请输入您的手机号码！'))
      } else {
        callback()
      }
    }
    // 验证码
    const validatetelCode = (rule, value, callback) => {
      if (!validatetelCode(value)) {
        callback(new Error('请输入您的验证码！'))
      } else {
        callback()
      }
    }
    // 密码验证
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码不能少于6位数'))
      } else {
        callback()
      }
    }
    return {
      dialogVisible: false,
      loginForm: {
        telephone: '',
        telCode: '',
        password: '',
        confirmPassword: '',
        checked:true
      },
      loginRules: {
        telephone: [{ required: true, trigger: 'blur', validator: validateTelephone }],
        telCode: [{ required: true, trigger: 'blur', validator: validatetelCode }],
        validatePassword: [{ required: true, trigger: 'blur', validator: validatePassword }],
      },
      passwordType: 'password',
      loading: false,
      showDialog: false
    }
  },
  methods: {
    handleLogin() {
      this.$router.push({ path: '/authenticat' })
      // this.$refs.loginForm.validate(valid => {
      //   if (valid) {
      //     this.loading = true
      //     this.$store.dispatch('LoginByUsername', this.loginForm).then(() => {
      //       this.loading = false
      //       this.$router.push({ path: '/' })
      //     }).catch(() => {
      //       this.loading = false
      //     })
      //   } else {
      //     console.log('错误提交!!')
      //     return false
      //   }
      // })
    },
    // 注册协议弹窗关闭事件
    handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
  }
}