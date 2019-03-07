<template>
	<div class="baseinfoComponent" >
		<el-form class="form-container"   ref="postForm">
		<!-- row1 -->
		<el-row :data="responseData">
		  <el-col :span="6" class="contentL">
		  	<div><img  src="../../../assets/images/avatar-2.jpg" class="photo"></div>
		  	<div class="nameTit">{{responseData.userName.values}}</div>
		  	<ul class="userSubInfo">
		  		<li><span>状态: </span><span>{{responseData.status.values}}</span></li>
		  		<li><span>积分: </span><span>{{responseData.byHours.values}}</span></li>
		  		<li><span>等级: </span>
		  			<span>
		  			<svg-icon v-for="n in responseData.importance.values" icon-class="star" class="meta-item__icon" :key="n"></svg-icon>
		  			<!-- <svg-icon v-for="n in +responseData.importance" icon-class="star" class="meta-item__icon" :key="n"></svg-icon> -->
		  			</span>
		  		</li>
		  	</ul>
		  </el-col>
		  <el-col :span="18" class="contentR">
		  		<ul class="tagGroup">
		  			<li><div><span>{{responseData.byHours.values}}</span><span>当月工时</span></div></li>
		  			<li><div><span>{{responseData.syHours.values}}</span><span>上月工时</span></div></li>
		  			<li><div><span>{{responseData.hourTota.valuesl}}</span><span>总工时</span></div></li>
		  		</ul>
		  		<ul class="baseInfoList" >
		  			<li><span>帐号(手机)：</span><span>{{responseData.telephone.values}}</span></li>
		  			<li><span>身份证号：</span>
		  				<span class="InstantEdit" v-if="edit">
  							<el-form :inline="true"  :model="idCardForm" class="demo-form-inline">
  								 <el-form-item >
								    <el-input placeholder="请输入" v-model="responseData.idCard.values"></el-input>
								  </el-form-item>
								  <el-form-item>
								    <el-button type="success" icon="el-icon-check" @click="confirmEditIdCard()"></el-button>
								  </el-form-item>
								  <el-form-item>
								    <el-button icon="el-icon-close" @click="cancelEdit()" ></el-button>
								  </el-form-item>
  							</el-form>
		  				</span>
		  				<span @click="edit=!edit" class="underline" v-else>{{responseData.idCard.values}}</span>
		  			</li>
		  			<li><span>姓名 ：</span>
		  				<!-- <span class="InstantEdit" v-if="userNameEdit">
  							<el-form :inline="true"  class="demo-form-inline">
  								 <el-form-item >
								    <el-input placeholder="请输入" v-model="responseData.userName"></el-input>
								  </el-form-item>
								  <el-form-item>
								    <el-button type="success" icon="el-icon-check" @click="confirmEditUserName()"></el-button>
								  </el-form-item>
								  <el-form-item>
								    <el-button icon="el-icon-close" @click="userNameEdit=!userNameEdit" ></el-button>
								  </el-form-item>
  							</el-form>
		  				</span>
		  				<span @click="userNameEdit=!userNameEdit" class="underline" v-else>{{responseData.userName}}</span> -->
		  			</li>
		  			<li><span>工号：</span>
		  				<!-- <span class="InstantEdit" v-if="jobNumEdit">
  							<el-form :inline="true"  class="demo-form-inline">
  								 <el-form-item >
								    <el-input placeholder="请输入" v-model="responseData.jobNum"></el-input>
								  </el-form-item>
								  <el-form-item>
								    <el-button type="success" icon="el-icon-check"  @click="jobNumEdit=!jobNumEdit"></el-button>
								  </el-form-item>
								  <el-form-item>
								    <el-button icon="el-icon-close" @click="jobNumEdit=!jobNumEdit" ></el-button>
								  </el-form-item>
  							</el-form>
		  				</span>
		  				<span @click="jobNumEdit=!jobNumEdit" class="underline" v-else>{{responseData.jobNum}}</span> -->
		  			</li>
		  			<li><span>部门：</span><span>{{responseData.departmentName.values}}</span></li>
		  			<li><span>角色：</span><span>{{responseData.roleName.values}}</span></li>
		  			<li><span>性别：</span><span>{{responseData.sex.values}}</span></li>
		  			<li><span>所属项目：</span><span>{{responseData.itemsName.values}}</span></li>
		  		</ul>
		  		<h4>个人档案</h4>
		  		<ul class="baseInfoList">
		  			<li><span>注册时间：</span><span>{{responseData.parseTime.values}}</span></li>
		  			<li><span>注册方式：</span><span>{{responseData.registerWay.values}}</span></li>
		  			<li><span>忙闲状态 ：</span><span>{{responseData.workStatus.values}}</span></li>
		  			<li><span>签到状态：</span><span>{{responseData.qdTime.values}}</span></li>
		  			<li><span>签到天数：</span><span>{{responseData.qdDays.values}}</span></li>
		  			<li><span>签到位置：</span><span>{{responseData.signLongLatitude.values}}</span></li>
		  			<li><span>详细地址：</span><span>{{responseData.adressDetail.values}}</span></li>
		  		</ul>
		  		<h4>技能信息</h4>
		  		<ul class="baseInfoList">
		  			<li><span>项目:</span><span>{{responseData.projectName.values}}</span></li>
		  			<li><span>一级技能:</span><span>{{responseData.parentName.values}}</span></li>
		  			<li><span>二级技能：</span><span>{{responseData.name.values}}</span></li>
		  		</ul>

		  </el-col>
		</el-row>
		<!-- ./row1 -->
	</el-form>
	</div>
</template>
<script src="./baseInfoJs.js"></script>
