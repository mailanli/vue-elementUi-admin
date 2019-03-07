<template>
	<div class="baseinfoComponent" >
		<el-form class="form-container"   ref="postForm">
		<!-- row1 -->
		<el-row :data="responseData">
		  <el-col :span="6" class="contentL">
		  	<div><img  src="../../../assets/images/avatar-2.jpg" class="photo"></div>
		  	<div class="nameTit">{{responseData.userName}}</div>
		  	<ul class="userSubInfo">
		  		<li><span>状态: </span><span>{{responseData.status}}</span></li>
		  		<li><span>积分: </span><span>{{responseData.byHours}}</span></li>
		  		<li><span>等级: </span>
		  			<span>
		  			<svg-icon v-for="n in responseData.importance" icon-class="star" class="meta-item__icon" :key="n"></svg-icon>
		  			<!-- <svg-icon v-for="n in +responseData.importance" icon-class="star" class="meta-item__icon" :key="n"></svg-icon> -->
		  			</span>
		  		</li>
		  	</ul>
		  </el-col>
		  <el-col :span="18" class="contentR">
		  		<ul class="tagGroup">
		  			<li><div><span>{{responseData.byHours}}</span><span>当月工时</span></div></li>
		  			<li><div><span>{{responseData.syHours}}</span><span>上月工时</span></div></li>
		  			<li><div><span>{{responseData.hourTotal}}</span><span>总工时</span></div></li>
		  		</ul>
		  		<ul class="baseInfoList" >
		  			<li><span>帐号(手机)：</span><span>{{responseData.telephone}}</span></li>
		  			<li><span>身份证号：</span>
		  				<span class="InstantEdit" v-if="editVis.idCard">
  							<el-form :inline="true"  class="demo-form-inline">
  								 <el-form-item >
								    <el-input placeholder="请输入" v-model="responseData.idCard"></el-input>
								  </el-form-item>
								  <el-form-item>
								    <el-button type="success" icon="el-icon-check" @click="updateEdit('idCard')"></el-button>
								  </el-form-item>
								  <el-form-item>
								    <el-button icon="el-icon-close" @click="cancelEdit('idCard')" ></el-button>
								  </el-form-item>
  							</el-form>
		  				</span>
		  				<span @click="editVis.idCard=!editVis.idCard" class="underline" v-else>{{responseData.idCard}}</span>
		  			</li>
		  			<li><span>姓名 ：</span>
		  				<span class="InstantEdit" v-if="editVis.userName">
  							<el-form :inline="true"  class="demo-form-inline">
  								 <el-form-item >
								    <el-input placeholder="请输入" v-model="responseData.userName"></el-input>
								  </el-form-item>
								  <el-form-item>
								    <el-button type="success" icon="el-icon-check" @click="updateEdit('userName')"></el-button>
								  </el-form-item>
								  <el-form-item>
								    <el-button icon="el-icon-close" @click="cancelEdit('userName')" ></el-button>
								  </el-form-item>
  							</el-form>
		  				</span>
		  				<span @click="editVis.userName=!editVis.userName" class="underline" v-else>{{responseData.userName}}</span>
		  			</li>
		  			<li><span>工号：</span>
		  				<span class="InstantEdit" v-if="editVis.jobNum">
  							<el-form :inline="true"  class="demo-form-inline">
  								 <el-form-item >
								    <el-input placeholder="请输入" v-model="responseData.jobNum"></el-input>
								  </el-form-item>
								  <el-form-item>
								    <el-button type="success" icon="el-icon-check"  @click="updateEdit('jobNum')"></el-button>
								  </el-form-item>
								  <el-form-item>
								    <el-button icon="el-icon-close" @click="cancelEdit('jobNum')" ></el-button>
								  </el-form-item>
  							</el-form>
		  				</span>
		  				<span @click="editVis.jobNum=!editVis.jobNum" class="underline" v-else>{{responseData.jobNum}}</span>
		  			</li>
		  			<li><span>部门：</span>
						<span class="InstantEdit" v-if="editVis.departmentName">
  							<el-form :inline="true" class="demo-form-inline">
  								 <el-form-item >
								    <el-select v-model="responseData.departmentName" :placeholder="responseData.departmentName">
									    <el-option
									      v-for="item in departmentOptions"
									      :key="item"
									      :label="item"
									      :value="item">
									    </el-option>
									</el-select>
								  </el-form-item>
								  <el-form-item>
								    <el-button type="success" icon="el-icon-check"  @click="updateEdit('departmentName')"></el-button>
								  </el-form-item>
								  <el-form-item>
								    <el-button icon="el-icon-close" @click="cancelEdit('departmentName')" ></el-button>
								  </el-form-item>
  							</el-form>
		  				</span>
		  				<span @click="editVis.departmentName=!editVis.departmentName" class="underline" v-else>{{responseData.departmentName}}</span>

		  				<!-- <span>{{responseData.departmentName}}</span> -->
		  			</li>
		  			<li><span>角色：</span><span>{{responseData.roleName}}</span></li>
		  			<li><span>性别：</span><span>{{responseData.sex}}</span></li>
		  			<li><span>所属项目：</span><span>{{responseData.itemsName}}</span></li>
		  		</ul>
		  		<h4>个人档案</h4>
		  		<ul class="baseInfoList">
		  			<li><span>注册时间：</span><span>{{responseData.parseTime}}</span></li>
		  			<li><span>注册方式：</span><span>{{responseData.registerWay}}</span></li>
		  			<li><span>忙闲状态 ：</span><span>{{responseData.workStatus}}</span></li>
		  			<li><span>签到状态：</span><span>{{responseData.qdTime}}</span></li>
		  			<li><span>签到天数：</span><span>{{responseData.qdDays}}</span></li>
		  			<li><span>签到位置：</span><span>{{responseData.signLongLatitude}}</span></li>
		  			<li><span>详细地址：</span><span>{{responseData.adressDetail}}</span></li>
		  		</ul>
		  		<h4>技能信息</h4>
		  		<ul class="baseInfoList">
		  			<li><span>项目:</span><span>{{responseData.projectName}}</span></li>
		  			<li><span>一级技能:</span><span>{{responseData.parentName}}</span></li>
		  			<li><span>二级技能：</span><span>{{responseData.name}}</span></li>
		  		</ul>

		  </el-col>
		</el-row>
		<!-- ./row1 -->
	</el-form>
	</div>
</template>
<script src="./baseInfoJs.js"></script>
