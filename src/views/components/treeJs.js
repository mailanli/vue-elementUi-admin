 export default {
   data() {
     return {
       data: [{
         label: '一级 1',
         children: [{
           label: '二级 1-1',
           children: [{
             label: '三级 1-1-1'
           }]
         }]
       }],
       defaultProps: {
         children: 'children',
         label: 'label'
       }
     }
   },
   methods: {
     handleNodeClick(data) {
       console.log(data)
     }
   }
}