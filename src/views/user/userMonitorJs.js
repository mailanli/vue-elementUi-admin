import { fetchList } from '@/api/article'
import waves from '@/directive/waves' // 水波纹指令
import BMap from 'BMap'
const defaultForm = {
  select1: '', // 选择区域
  select2: '', // 选择项目
  select3: '', // 是否认证
  phone: '', // 手机
  identity: '', // 身份证
  userName: '' // 姓名
}
export default {
  name: 'userMonitor',
  directives: {
    waves
  },
  data() {
    return {
      title: '人员轨迹',
      searchForm: defaultForm,
      dateVale: '',
      dateVale1: '',
      tableKey: 0,
      list: null,
      total: null,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: '+id'
      }
    }
  },
  created() {
    // 显示数据
    this.getList()
  },
  mounted() {
    this.baiduMap()
  },
  methods: {
    baiduMap() {
      var map = new BMap.Map('allmap')
      var point = new BMap.Point(113.275164, 22.929904)
      var marker = new BMap.Marker(point)
      var label = new BMap.Label('总部大楼', { offset: new BMap.Size(-15, -25) })
      marker.setLabel(label)
      map.addOverlay(marker)
      map.centerAndZoom(point, 14)
      this.addMarker(map)
      map.addControl(new BMap.MapTypeControl())
      map.enableScrollWheelZoom(true)
      map.enableDoubleClickZoom(true)
    },
    addMarker(map) {
      // var point = new BMap.Point(113.275164, 22.929904)
      var point0 = new BMap.Point(113.314163, 22.936934)
      var point1 = new BMap.Point(113.543165, 22.857954)
      var point2 = new BMap.Point(113.496169, 22.788944)
      // var marker = new BMap.Marker(point)
      // map.addOverlay(marker)
      var marker0 = new BMap.Marker(point0)
      var label0 = new BMap.Label('总部大楼0', { offset: new BMap.Size(-15, -25) })
      marker0.setLabel(label0)
      map.addOverlay(marker0)
      var marker1 = new BMap.Marker(point1)
      var label1 = new BMap.Label('总部大楼1', { offset: new BMap.Size(-15, -25) })
      marker1.setLabel(label1)
      map.addOverlay(marker1)
      var marker2 = new BMap.Marker(point2)
      var label2 = new BMap.Label('总部大楼2', { offset: new BMap.Size(-15, -25) })
	    marker2.setLabel(label2)
      map.addOverlay(marker2)
    },
    onSubmitSearch() {
      console.log('submit!')
    },
    getList() {
      this.listLoading = true
      fetchList(this.listQuery).then(response => {
        this.list = response.data.items
        this.total = response.data.total
        setTimeout(() => {
          this.listLoading = false
        }, 1.5 * 1000)
      })
    },
    // 每页显示条数
    handleSizeChange(val) {
      this.listQuery.limit = val
      this.getList()
    },
    // 当前页
    handleCurrentChange(val) {
      this.listQuery.page = val
      this.getList()
    },
    // 多选
    handleSelectionChange(val) {
      this.multipleSelection = val
    }
  }
}
