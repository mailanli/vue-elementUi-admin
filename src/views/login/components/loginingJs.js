import { isvalidUsername } from '@/utils/validate'

export default {
  name: 'logining',
  data() {
    let passVal
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error('请输入帐号'))
      } else {
        callback()
      }
    }
    // 验证密码
    const validatePassword = (rule, value, callback) => {
      passVal = value.trim()
      if (passVal === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      // 登录默认数据
      loginForm: {
        username: 'admin',
        password: '1111111',
        checked: true
      },
      // 登录验证
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      passwordType: 'password',
      loading: false
    }
  },
  methods: {
    // 登录事件
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('LoginByUsername', this.loginForm).then(() => {
            this.loading = false
            this.$router.push({ path: '/' })
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
