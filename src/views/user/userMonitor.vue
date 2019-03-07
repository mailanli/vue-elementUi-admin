<template>
  <div class="app-container">
  	<div class="panel-default">
	    <div class="panel-body" >
        <slot>
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
                <el-input v-model="searchForm.userName" placeholder="姓名"></el-input>
            </el-col>
            <el-col :span="6">
              <el-date-picker
                v-model="dateVale"
                type="datetime"
                placeholder="选择开始时间">
              </el-date-picker>
            </el-col>
            <el-col :span="6">
              <el-date-picker
                v-model="dateVale1"
                type="datetime"
                placeholder="选择结束时间">
              </el-date-picker>
            </el-col>
            <el-col :span="6">
              <el-button type="primary" @click="onSubmitSearch">{{$t('operation.search')}}</el-button>
              <el-button @click="resetForm('ruleForm')">{{$t('operation.reset')}}</el-button>
            </el-col>
        </el-form>
        </slot>
	    </div>
    </div>
    <div style="width:50%;float:left;">
      <!-- 列表模块 -->
      <el-table :key='tableKey' :data="list" v-loading="listLoading" border fit highlight-current-row
        :default-sort = "{prop: 'date', order: 'descending'}" @selection-change="handleSelectionChange" height="400px">
        <el-table-column align="center" :label="$t('table.date')" prop="date" sortable>
          <template slot-scope="scope">
            <span>{{scope.row.timestamp | parseTime('{y}-{m}-{d} {h}:{i}')}}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('table.title')" min-width="250">
          <template slot-scope="scope">
            <span >{{scope.row.title}}</span>
          </template>
        </el-table-column>
        <el-table-column  align="center" :label="$t('table.author')">
          <template slot-scope="scope">
            <span>{{scope.row.author}}</span>
          </template>
        </el-table-column>
      </el-table>
      <!-- 页码模块 -->
      <div class="pagination-container" style="margin-top:10px !important;">
        <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="listQuery.page" :page-size="listQuery.limit" layout="total, prev, pager, next" :total="total">
        </el-pagination>
      </div>
      <!-- ./页码模块 -->
      <!-- ./列表模块 -->
    </div>
    <div id="allmap" ref="allmap" style="width:50%;height:400px;"></div>
   </div> 
</template>

<script src="./userMonitorJs.js"></script>

