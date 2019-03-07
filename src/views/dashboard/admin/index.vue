<template>
  <div class="dashboard-editor-container">
    <el-row :gutter="12" class="row1">
      <el-col :xs="24" :sm="24" :md="8" >
        <el-card class="box-card recordList">
            <homeNotice></homeNotice>
          </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="8" class="boxGroup" >
        <div class="box bg-blue nomarginTop">
          <router-link to="/" class="link">
            <span class="num" >0</span>
            <span>待办工单</span>
            <i class="ion-compose icon"></i>
          </router-link>
        </div>
        <div class="box bg-green nomarginTop">
          <router-link to="/" class="link">
            <span class="num" >0</span>
            <span>本周处理</span>
            <i class="ion-document icon"></i>
          </router-link>
        </div>
        <div class="box bg-red nomarginBottom">
          <router-link to="/" class="link">
            <span class="num" >0</span>
            <span>超时工单</span>
            <i class="ion-ios7-alarm-outline icon"></i>
          </router-link>
        </div>
        <div class="box bg-yellow nomarginBottom">
          <router-link to="/" class="link">
            <span class="num" >0</span>
            <span>完成工单</span>
            <i class="ion-clipboard icon"></i>
          </router-link>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="8" class="chartBox" >
        <el-card class="box-card nopadding">
            <div slot="header" class="clearfix">
              <span class="tit">工单状态分布图</span>
            </div>
            <div class="chart-wrapper nopadding nomargin">
              <pie-chart></pie-chart>
            </div>
          </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="12" class="row2">
      <el-col :xs="24" :sm="24" :md="8" >
        <el-card class="box-card recordList">
            <div slot="header" class="clearfix">
              <span class="tit">帮助手册</span>
            </div>
            <ul v-for="o in 5" :key="o" >
              <li>{{o+'列表内容 '  }}</li>
            </ul>
          </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="16" >
        <el-card class="box-card myTodolistBox">
            <div slot="header" class="clearfix">
              <span class="tit">我的待办工单</span>
              <el-button class="btn" type="text">更多</el-button>
            </div>
            <myTodolist></myTodolist>
          </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script src="./indexJs.js"></script>
