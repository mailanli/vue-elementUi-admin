<template>
  <div class="app-container accountManagePag">
	  		<!-- 列表模块 -->
		    <el-table :key='tableKey' :data="list" v-loading="listLoading" border fit highlight-current-row
		      :default-sort = "{prop: 'date', order: 'descending'}" height="400" class="tableList">
		      <el-table-column align="center" :label="$t('table.id')" min-width="80">
		        <template slot-scope="scope">
		          <span>{{scope.row.id}}</span>
		        </template>
		      </el-table-column>
		      <el-table-column  label="工单号"  min-width="150">
		        <template slot-scope="scope">
		          <span>{{scope.row.orderId}}</span>
		        </template>
		      </el-table-column>
		      <el-table-column   label="处理动作">
		        <template slot-scope="scope">
		          <span>{{scope.row.orderName}}</span>
		        </template>
		      </el-table-column>
		      <el-table-column   label="处理时长" min-width="180">
		        <template slot-scope="scope">
		          <span>{{scope.row.timeUsed}}</span>
		        </template>
		      </el-table-column>
		      <el-table-column   label="状态">
		        <template slot-scope="scope">
		          <span>{{scope.row.orderStatusName}}</span>
		        </template>
		      </el-table-column>
		      <el-table-column   label="处理人" min-width="100">
		        <template slot-scope="scope">
		          <span>{{scope.row.handlerName}}</span>
		        </template>
		      </el-table-column>
		    </el-table>
		    <!-- ./列表模块 -->
		    <!-- 页码模块 -->
		    <div class="pagination-container">
		      <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="listQuery.page" :page-sizes="[10,20,30, 50]"  :page-size="listQuery.limit" layout="total, sizes, prev, pager, next, jumper" :total="total">
		      </el-pagination>
		    </div>
		    <!-- ./页码模块 -->
		 
    </div>
</template>

<script src="./processOrderJs.js"></script>