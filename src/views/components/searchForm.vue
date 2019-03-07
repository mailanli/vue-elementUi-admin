<template>
	<el-form :inline="true" :model="searchForm" class="searchForm">
      <el-col :span="4">
          <el-select v-model="searchForm.select1" placeholder="---选择区域---">
            <el-option label="河南区域" value="shanghai"></el-option>
            <el-option label="湖南区域" value="beijing"></el-option>
          </el-select>
      </el-col>
      <el-col :span="4">
          <el-select v-model="searchForm.select2" placeholder="---选择项目---">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
      </el-col>
      <el-col :span="4">
          <el-select v-model="searchForm.select3" placeholder="---是否认证---">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
      </el-col>
      <el-col :span="4">
          <el-date-picker
            v-model="dateVale"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
      </el-col>
      <el-col :span="4">
          <el-input v-model="searchForm.phone" placeholder="手机"></el-input>
      </el-col>
      <el-col :span="4">
          <el-input v-model="searchForm.identity" placeholder="身份证"></el-input>
      </el-col>
      <el-col :span="4">
          <el-input v-model="searchForm.userName" placeholder="姓名"></el-input>
      </el-col>
      <el-col :span="6">
        <el-button type="primary" @click="onSubmitSearch">查询</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-col>
	</el-form>
</template>

<script src="./searchFormJs.js"></script>
