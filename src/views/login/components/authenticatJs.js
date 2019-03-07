import { isvalidUsername } from '@/utils/validate'
import selItem from './selItem'

export default {
  components: {  selItem },
  name: 'authenticat',
  data() {
    let workNumVal,nameVal;
    const validateWorkNum = (rule, value, callback) => {
      workNumVal=value.trim();
      if (workNumVal === '') {
        callback(new Error('请输入工号'))
      } else {
        callback()
      }
    }
    const validateName = (rule, value, callback) => {
      nameVal=value.trim();
      if (nameVal === '') {
        callback(new Error('请输入姓名'))
      } else {
        callback()
      }
    }
    return {
      dialogVisible: false,
      loginForm: {
        workNumber: '',
        name: '',
        userId: ''
      },
      loginRules: {
        workNumber: [{ required: true, trigger: 'blur', validator: validateWorkNum }],
        name: [{ required: true, trigger: 'blur', validator: validateName }]
      },
      loading: false,
      showDialog: false
    }
  },
  methods: {
    handleLogin() {
    },
  }
}