<template>
  <div class="app-container myTodolist">
  		<!-- 列表模块 -->
	    <el-table :key='tableKey' :data="list" v-loading="listLoading" border fit highlight-current-row
	      :default-sort = "{prop: 'date', order: 'descending'}" height="400" class="tableList" width="100">
	      <el-table-column align="center" :label="$t('table.id')" >
	        <template slot-scope="scope">
	          <span>{{scope.row.id}}</span>
	        </template>
	      </el-table-column>
	      <el-table-column  label="工单号" >
	        <template slot-scope="scope">
	          <span>{{scope.row.workingOrderNum}}</span>
	        </template>
	      </el-table-column>
	      <el-table-column   label="工单状态">
	        <template slot-scope="scope">
	          <span>{{scope.row.optionName}}</span>
	        </template>
	      </el-table-column>
	      <el-table-column   label="报事人">
	        <template slot-scope="scope">
	          <span>{{scope.row.repairManName}}</span>
	        </template>
	      </el-table-column>
	      <el-table-column   label="报事人电话" width="90">
	        <template slot-scope="scope">
	          <span>{{scope.row.repairManTel}}</span>
	        </template>
	      </el-table-column>
	      <el-table-column   label="服务类型">
	        <template slot-scope="scope">
	          <span>{{scope.row.serviceTypeName}}</span>
	        </template>
	      </el-table-column>
	      <el-table-column   label="报事类型" >
	        <template slot-scope="scope">
	          <span>{{scope.row.typeName}}</span>
	        </template>
	      </el-table-column>
	      <el-table-column   label="最新处理时间" width="110">
	        <template slot-scope="scope">
	          <span>{{scope.row.newTime}}</span>
	        </template>
	      </el-table-column>
	    </el-table>
	    <!-- ./列表模块 -->
    </div>
</template>

<script src="./myTodolistJs.js"></script>