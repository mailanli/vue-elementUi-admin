import { fetchList } from '@/api/article'
import waves from '@/directive/waves' // 水波纹指令
import BMap from 'BMap'
import BMAP_ANIMATION_BOUNCE from 'BMAP_ANIMATION_BOUNCE'
const defaultForm = {
  select1: '', // 选择区域
  select2: '', // 选择项目
  select3: '', // 是否认证
  phone: '', // 手机
  identity: '', // 身份证
  userName: '' // 姓名
}
export default {
  name: 'userMonitorHistory',
  directives: {
    waves
  },
  data() {
    return {
      title: '人员轨迹历史',
      searchForm: defaultForm,
      dateVale: '',
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
      var map = new BMap.Map('allmapHis')
      var point = new BMap.Point(113.275164, 22.929904)
      // var marker = new BMap.Marker(point)
      // map.addOverlay(marker)
      map.centerAndZoom(point, 14)
      this.addMarker(map)
      map.addControl(new BMap.MapTypeControl())
      map.enableScrollWheelZoom(true)
      map.enableDoubleClickZoom(true)
    },
    addMarker(map) {
      var points = []
      var point = new BMap.Point(113.275164, 22.929904)
      var point0 = new BMap.Point(113.314163, 22.936934)
      var point1 = new BMap.Point(113.543165, 22.857954)
      var point2 = new BMap.Point(113.496169, 22.788944)
      points.push(point)
      points.push(point0)
      points.push(point1)
      points.push(point2)
      var line = new BMap.Polyline(points, { strokeColor: 'blue' })
      map.addOverlay(line)
      this.addArrow(map, line)
    },
    addArrow(map, line) { // 绘制标注的函数
      var linePoint = line.getPath() // 线的坐标串
      var arrowCount = linePoint.length
      var end = new BMap.Marker(linePoint[0]) // 创建标注
      map.addOverlay(end) // 将标注添加到地图中
      end.setAnimation(BMAP_ANIMATION_BOUNCE) // 跳动的动画
      var myIcon = new BMap.Icon('http://api0.map.bdimg.com/images/stop_icon.png', new BMap.Size(11, 11))
      for (var i = 0; i < arrowCount; i++) { // 在拐点处添加标注
        var marker = new BMap.Marker(linePoint[i], { icon: myIcon }) // 创建标注
        map.addOverlay(marker) // 将标注添加到地图中
        // var label = new BMap.Label('定位' + (i + 1) + '', { offset: new BMap.Size(20, -10) })
        // label.setStyle({
        //  color: 'blue',
        //  fontSize: '10px',
        //  height: '15px',
        //  lineHeight: '15px',
        //  backgroundColor: 'rgba(255, 255, 255, 0.8) none repeat scroll 0 0 !important', // 设置背景色透明
        //  border: '1px solid blue'
        // })
        // marker.setLabel(label)
      }
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
