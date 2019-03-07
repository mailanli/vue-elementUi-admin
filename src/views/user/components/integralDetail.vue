<template>
  <div class="app-container accountManagePag">
  			<div class="describe">当前积分：<span class="num">50</span></div>
	  		<!-- 列表模块 -->
		    <el-table :key='tableKey' :data="list" v-loading="listLoading" border fit highlight-current-row
		      :default-sort = "{prop: 'date', order: 'descending'}" height="400" class="tableList">
		      <el-table-column align="center" :label="$t('table.id')" min-width="80">
		        <template slot-scope="scope">
		          <span>{{scope.row.size}}</span>
		        </template>
		      </el-table-column>
		      <el-table-column  label="交易前积分"  >
		        <template slot-scope="scope">
		          <span>{{scope.row.scoreBefore}}</span>
		        </template>
		      </el-table-column>
		      <el-table-column   label="本次积分">
		        <template slot-scope="scope">
		          <span>{{scope.row.score}}</span>
		        </template>
		      </el-table-column>
		      <el-table-column   label="交易后积分" >
		        <template slot-scope="scope">
		          <span>{{scope.row.balance}}</span>
		        </template>
		      </el-table-column>
		      <el-table-column   label="交易类型" >
		        <template slot-scope="scope">
		          <span>{{scope.row.direction}}</span>
		        </template>
		      </el-table-column>
		      <el-table-column   label="日期" min-width="80">
		        <template slot-scope="scope">
		          <span>{{scope.row.parseTime}}</span>
		        </template>
		      </el-table-column>
		      <el-table-column   label="备注" min-width="200">
		        <template slot-scope="scope">
		          <span>{{scope.row.remark}}</span>
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

<script src="./integralDetailJs.js"></script>