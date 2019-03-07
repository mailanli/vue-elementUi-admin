<template>
  <div class="app-container">
    <el-tabs type="border-card">
      <el-tab-pane :label="$t('route.userMonitor')">
        <userMonitor/>
      </el-tab-pane>
      <el-tab-pane :label="$t('route.userMonitorHistory')">
        <userMonitorHistory/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import userMonitor from './userMonitor'
  import userMonitorHistory from './userMonitorHistory'
  export default {
    name: 'userMonitorManage',
    components: {
      userMonitor,
      userMonitorHistory
    },
    data() {
      return {
      }
    }
  }
</script>

