const defaultForm = {
  select1: '', // 选择区域
  select2: '', // 选择项目
  select3: '', // 是否认证
  phone: '', // 手机
  identity: '', // 身份证
  userName: '' // 姓名
}
export default {
  name: 'searchForm',
  data() {
    return {
      searchForm: defaultForm,
      dateVale: '' // 选择日期
    }
  },
  methods: {
    onSubmitSearch() {
      console.log('submit!')
    }
  }
}
