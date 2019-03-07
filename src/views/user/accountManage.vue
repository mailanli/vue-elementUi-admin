<template>
  <div class="app-container accountManagePag">
  		<!-- 搜索面板 -->
  		<elpanel :title='searchPanelTit'  >
  			<el-form :inline="true" :model="searchForm" class="searchForm">
  				<el-col :span="4">
		          <el-select v-model="listQuery.areasId" placeholder="--选择区域--">
		            <el-option label="区域一" value="shanghai"></el-option>
		            <el-option label="区域二" value="beijing"></el-option>
		          </el-select>
		        </el-col>
		        <el-col :span="4">
		          <el-select v-model="listQuery.projectId" placeholder="--选择项目--">
		            <el-option label="区域一" value="shanghai"></el-option>
		            <el-option label="区域二" value="beijing"></el-option>
		          </el-select>
		        </el-col>
		        <el-col :span="4">
		          <el-select v-model="listQuery.UserAttestation" placeholder="--是否认证--">
		            <el-option label="正常" value="shanghai"></el-option>
		            <el-option label="冻结" value="beijing"></el-option>
		            <el-option label="待认证" value="beijing"></el-option>
		            <el-option label="没做认证" value="beijing"></el-option>
		          </el-select>
		        </el-col>
		        <el-col :span="4">
		          <el-select v-model="listQuery.departmentId" placeholder="--选择部门--">
		            <el-option label="正常" value="shanghai"></el-option>
		            <el-option label="未认证" value="beijing"></el-option>
		          </el-select>
		        </el-col>
  				<el-col :span="4">
		          <el-select v-model="listQuery.roleId" placeholder="--选择角色--">
		            <el-option label="root" value="shanghai"></el-option>
		            <el-option label="工程经理" value="beijing"></el-option>
		          </el-select>
		        </el-col>
  				<el-col :span="4">
		          <el-input v-model="listQuery.telephone" placeholder="手机"  ></el-input>
		        </el-col>
		        <el-col :span="4">
		          <el-input v-model="listQuery.idCard" placeholder="身份证"></el-input>
		        </el-col>
		        <el-col :span="4">
		          <el-input v-model="listQuery.userName" placeholder="姓名"></el-input>
		        </el-col>
		        <el-col :span="6">
			        <el-button type="primary" @click="handleFilter">查询</el-button>
			        <el-button @click="resetForm('ruleForm')">重置</el-button>
		        </el-col>
			</el-form>
  		</elpanel>
  		<!-- ./搜索面板 -->
  		<!-- 列表面板 -->
  		<elpanel :title='listPanelTit'  >
  			<!-- 批量操作模块 -->
		    <div class="filter-container">
		      <el-button class="filter-item" style="margin-left: 10px;"  type="danger" @click="freezeGroup('停用')">批量冻结</el-button>
		      <el-button class="filter-item" type="primary" :loading="downloadLoading" v-waves @click="thawGroup('正常')">批量解冻</el-button>
		    </div>
		    <!-- ./批量操作模块 -->
	  		<!-- ./列表面板 -->
	  		<!-- 列表模块 -->
		    <el-table :key='tableKey' :data="list" v-loading="listLoading" border fit highlight-current-row
		      :default-sort = "{prop: 'date', order: 'descending'}" @selection-change="handleSelectionChange" height="400" class="tableList">
		      <el-table-column
		        type="selection"
		        fixed>
		      </el-table-column>
		      <el-table-column  label="用户名(手机号）"  min-width="150">
		        <template slot-scope="scope">
		          <span>{{scope.row.telephone}}</span>
		        </template>
		      </el-table-column>
		      <el-table-column   label="姓名">
		        <template slot-scope="scope">
		          <span>{{scope.row.userName}}</span>
		        </template>
		      </el-table-column>
		      <el-table-column   label="身份证号" min-width="180">
		        <template slot-scope="scope">
		          <span>{{scope.row.idCard}}</span>
		        </template>
		      </el-table-column>
		      <el-table-column   label="会员等级">
		        <template slot-scope="scope">
		          <span>{{scope.row.level}}</span>
		        </template>
		      </el-table-column>
		      <el-table-column   label="角色" min-width="100">
		        <template slot-scope="scope">
		          <span>{{scope.row.roleName}}</span>
		        </template>
		      </el-table-column>
		      <el-table-column label="挂靠项目" min-width="150">
		        <template slot-scope="scope">
		          <span >{{scope.row.itemsName}}</span>
		        </template>
		      </el-table-column>
		      <el-table-column class-name="status-col" label="状态">
		        <template slot-scope="scope">
		          <span :type="scope.row.status | statusFilter">{{scope.row.status}}</span>
		        </template>
		      </el-table-column>
		      <el-table-column  label="注册时间" prop="date" sortable min-width="150">
		        <template slot-scope="scope">
		          <span>{{scope.row.parseTime | parseTime('{y}-{m}-{d} {h}:{i}')}}</span>
		        </template>
		      </el-table-column>
		      <el-table-column  label="操作"  class-name="small-padding fixed-width tabActionCol" width="180" >
		        <template slot-scope="scope">
		          <router-link :to="'/user/accountInfo/'+scope.row.id">
		         	 <el-button type="primary" size="mini" >查看</el-button>
		      	  </router-link>
		          <el-button v-if="scope.row.status =='正常'" size="mini"  type="danger" @click="handleModifyStatus(scope.row,'停用')">冻结
		          </el-button>
		          <el-button v-if="scope.row.status =='停用'" size="mini" type="success" @click="handleModifyStatus(scope.row,'正常')">解冻
		          </el-button>
		          <el-button v-if="scope.row.status =='未认证'" size="mini" @click="handleModifyStatus(scope.row,'正常')">认证
		          </el-button>
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
		    <!-- 编辑、新增 dialog -->
		    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
		      <el-form :rules="rules" ref="dataForm" :model="temp" label-position="left" label-width="70px" style='width: 400px; margin-left:50px;'>
		        <el-form-item :label="$t('table.date')" prop="timestamp">
		          <el-date-picker v-model="temp.timestamp" type="datetime" placeholder="Please pick a date">
		          </el-date-picker>
		        </el-form-item>
		        <el-form-item :label="$t('table.title')" prop="title">
		          <el-input v-model="temp.title"></el-input>
		        </el-form-item>
		        <el-form-item :label="$t('table.status')">
		          <el-select class="filter-item" v-model="temp.status" placeholder="Please select">
		            <el-option v-for="item in  statusOptions" :key="item" :label="item" :value="item">
		            </el-option>
		          </el-select>
		        </el-form-item>
		        <el-form-item :label="$t('table.importance')">
		          <el-rate style="margin-top:8px;" v-model="temp.importance" :colors="['#99A9BF', '#F7BA2A', '#FF9900']" :max='3'></el-rate>
		        </el-form-item>
		        <el-form-item :label="$t('table.remark')">
		          <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="Please input" v-model="temp.remark">
		          </el-input>
		        </el-form-item>
		      </el-form>
		      <div slot="footer" class="dialog-footer">
		        <el-button @click="dialogFormVisible = false">{{$t('table.cancel')}}</el-button>
		        <el-button v-if="dialogStatus=='create'" type="primary" @click="createData">{{$t('table.confirm')}}</el-button>
		        <el-button v-else type="primary" @click="dialogPvVisible = false">{{$t('table.confirm')}}</el-button>
		      </div>
		    </el-dialog>
		    <!-- ./编辑、新增 dialog -->
		    <el-dialog title="Reading statistics" :visible.sync="dialogPvVisible">
		      <el-table :data="pvData" border fit highlight-current-row style="width: 100%">
		        <el-table-column prop="key" label="Channel"> </el-table-column>
		        <el-table-column prop="pv" label="Pv"> </el-table-column>
		      </el-table>
		      <span slot="footer" class="dialog-footer">
		        <el-button type="primary" @click="dialogPvVisible = false">{{$t('table.confirm')}}</el-button>
		      </span>
		    </el-dialog>
	    </elpanel>
    </div>
</template>

<script src="./accountManageJs.js"></script>