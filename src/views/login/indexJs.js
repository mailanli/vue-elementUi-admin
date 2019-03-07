import { isvalidUsername } from '@/utils/validate'
export default {
  name: 'login',
  data() {
    return {
    }
  },
  computed: {
    key() {
      return this.$route.fullPath
    }
  },
  methods: {
    goRoute() {
      console.log("1"+this.$router);
      return this.$router.push({ path: './forgetPassword' })
    }
  }
}