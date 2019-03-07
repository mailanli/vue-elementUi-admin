import Tinymce from '@/components/Tinymce' // 富编辑器
  const defaultForm = {
    item: [], // 发布栏目
    title: '', // 标题
    recHome: false, // 首页推荐
    recBanner: false, // 横幅推荐
    recState: false, // 状态
    imageUrl: '', // 图片
    uploadFile: '', // 附件
    content: '' // 文章内容
  }
  export default {
    components: { Tinymce },
    data() {
      return {
        articleForm: defaultForm
      }
    },
    methods: {
      // 上传图片
      handleAvatarSuccessImg(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw)
      },
      beforeAvatarUploadImg(file) {
        const isJPG = file.type === 'image/jpeg'
        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!')
        }
        return isJPG
      },
      // 上传附件
      handleAvatarSuccessFile(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw)
      },
      beforeAvatarUploadFile(file) {
        const isLt2M = file.size / 1024 / 1024 < 2
        if (!isLt2M) {
          this.$message.error('上传附件大小不能超过 2MB!')
        }
        return isLt2M
      },
      // 提交
      onSubmit() {
        console.log('submit!')
      }
    }
  }