<template>
  <div class="app-container accountManagePag">
  		<!-- 列表模块 -->
	    <el-table :key='tableKey' :data="list" v-loading="listLoading" border fit highlight-current-row
	      :default-sort = "{prop: 'date', order: 'descending'}" height="400" class="tableList">
	      <el-table-column align="center" :label="$t('table.id')" min-width="80">
	        <template slot-scope="scope">
	          <span>{{scope.row.size}}</span>
	        </template>
	      </el-table-column>
	      <el-table-column  label="内容"  min-width="280">
	        <template slot-scope="scope">
	          <span  class="text-left">{{scope.row.content}}</span>
	        </template>
	      </el-table-column>
	      <el-table-column   label="发送人">
	        <template slot-scope="scope">
	          <span>{{scope.row.source}}</span>
	        </template>
	      </el-table-column>
	      <el-table-column   label="发送时间" min-width="180" >
	        <template slot-scope="scope">
	          <span>{{scope.row.createTime}}</span>
	        </template>
	      </el-table-column>
	      <el-table-column   label="阅读状态" >
	        <template slot-scope="scope">
	          <span>{{scope.row.readStatus}}</span>
	        </template>
	      </el-table-column>
	      <el-table-column   label="处理时间" min-width="180">
	        <template slot-scope="scope">
	          <span>{{scope.row.parseTime}}</span>
	        </template>
	      </el-table-column>
	      <el-table-column   label="详情" min-width="280">
	        <template slot-scope="scope">
	          <span class="text-left">{{scope.row.remark}}</span>
	        </template>
	      </el-table-column>
	      <el-table-column  :label="$t('table.actions')"  class-name="small-padding fixed-width tabActionCol" width="80" >
	        <template slot-scope="scope">
	          <el-button type="primary" size="mini" @click="handleVisited(scope.row)">查看</el-button>
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
	 	<!-- 查看 -->
	 	<el-dialog
		  title="查看"
		  :visible.sync="dialogVisible"
		  width="60%"
		  :before-close="handleClose" class="visibleDialogCont">
		  <ul class="container" :data="temp">
		  	<li><el-col :span="4" class="th">发送人：</el-col><el-col :span="20" class="td">{{temp.source}}</el-col></li>
		  	<li><el-col :span="4" class="th">发送时间：</el-col><el-col :span="20" class="td">{{temp.createTime}}</el-col></li>
	  		<li><el-col :span="4" class="th">内容：</el-col><el-col :span="20" class="td">{{temp.content}}</el-col></li>
	  		<li><el-col :span="4" class="th">阅读状态：</el-col><el-col :span="20" class="td">{{temp.readStatus}}</el-col></li>
	  		<li><el-col :span="4" class="th">处理时间：</el-col><el-col :span="20" class="td">{{temp.parseTime}}</el-col></li>
	  		<li><el-col :span="4" class="th">详情：</el-col><el-col :span="20" class="td">{{temp.remark}}</el-col></li>
		  </ul>
		  <span slot="footer" class="dialog-footer">
		    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
		  </span>
		</el-dialog>
		<!-- ./查看 -->
    </div>
</template>

<script src="./webMailJs.js"></script>