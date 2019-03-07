<template>
  <div class="app-container">
    <el-tabs type="border-card">
      <!-- 基本信息 -->
	  <el-tab-pane label="基本信息">
		<baseInfo></baseInfo>
	  </el-tab-pane>
	  <!-- ./基本信息 -->
	  <!-- 处理工单 -->
	  <el-tab-pane label="处理工单">
	  	<processOrder></processOrder>
	  </el-tab-pane>
	  <!-- ./处理工单 -->
	  <!-- 报事工单 -->
	  <el-tab-pane label="报事工单">
	  	<reportOrder></reportOrder>
	  </el-tab-pane>
	  <!-- ./报事工单 -->
	  <!-- 积分明细 -->
	  <el-tab-pane label="积分明细">
	  	<integralDetail></integralDetail>
	  </el-tab-pane>
	  <!-- ./积分明细 -->
	  <!-- 工时明细 -->
	  <el-tab-pane label="工时明细">
	  	<workTimeDetail></workTimeDetail>
	  </el-tab-pane>
	  <!-- ./工时明细 -->
	  <!-- 明细等级 -->
	  <el-tab-pane label="明细等级">
	  	<detailLevel></detailLevel>
	  </el-tab-pane>
	  <!-- ./明细等级 -->
	  <!-- 站内信 -->
	  <el-tab-pane label="站内信">
	  	<webMail></webMail>
	  </el-tab-pane>
	  <!-- ./站内信 -->
	</el-tabs>
  </div>
</template>

<script src="./accountInfoJs"></script>
