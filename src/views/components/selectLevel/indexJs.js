export default {
    data() {
      return {
        selected: '请选择',
        YX: [{
          text: '请选择',
          ZY: [{
            text: '请选择'
          }, {
            text: ''
          }, {
            text: ''
          }]
        }, {
          text: '计信院',
          ZY: [{
            text: '软件工程'
          }, {
            text: '计算机科学与技术'
          }, {
            text: '信息安全'
          }]
        }, {
          text: '商学院',
          ZY: [{
            text: '旅游管理'
          }, {
            text: '工商管理'
          }, {
            text: '行政管理'
          }]
        }]
      }
    },
    computed: {
      selection: {
        get: function() {
          var that = this
          return this.YX.filter(function(item) {
            return item.text === that.selected
          })[0].ZY
        }
      }
    }
  }