<template>
  <div class="app-container">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="区域" prop="area">
        <el-select v-model="ruleForm.area" placeholder="请选择区域">
          <el-option label="区域一" value="1"></el-option>
          <el-option label="区域二" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="项目" prop="project" required>
        <el-select v-model="ruleForm.project" placeholder="请选择项目">
          <el-option label="项目一" value="1"></el-option>
          <el-option label="项目二" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="服务地址" prop="serviceAddress">
        <el-select v-model="ruleForm.serviceAddress1" placeholder="请选择苑区">
          <el-option label="苑区一" value="1"></el-option>
          <el-option label="苑区二" value="2"></el-option>
        </el-select>
        <el-select v-model="ruleForm.serviceAddress2" placeholder="请选择街道">
          <el-option label="街道一" value="1"></el-option>
          <el-option label="街道二" value="2"></el-option>
        </el-select>
        <el-select v-model="ruleForm.serviceAddress3" placeholder="请选择楼栋">
          <el-option label="楼栋一" value="1"></el-option>
          <el-option label="楼栋二" value="2"></el-option>
        </el-select>
        <el-select v-model="ruleForm.serviceAddress4" placeholder="请选择单元">
          <el-option label="单元一" value="1"></el-option>
          <el-option label="单元二" value="2"></el-option>
        </el-select>
        <el-select v-model="ruleForm.serviceAddress5" placeholder="请选择楼层">
          <el-option label="楼层一" value="1"></el-option>
          <el-option label="楼层二" value="2"></el-option>
        </el-select>
        <el-select v-model="ruleForm.serviceAddress6" placeholder="请选择房间">
          <el-option label="房间一" value="1"></el-option>
          <el-option label="房间二" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="服务类型"  >
        <el-radio v-model="ruleForm.serviceType" label="1">公区服务</el-radio>
        <el-radio v-model="ruleForm.serviceType" label="2">户内服务</el-radio>
      </el-form-item>
      <el-form-item label="是否有偿"  >
        <el-radio v-model="ruleForm.isPaid" label="1">无偿服务</el-radio>
        <el-radio v-model="ruleForm.isPaid" label="2">有偿服务</el-radio>
      </el-form-item>
      <el-form-item label="报事来源"  >
        <el-radio v-model="ruleForm.postSource" label="1">内部报事</el-radio>
        <el-radio v-model="ruleForm.postSource" label="2">客户</el-radio>
      </el-form-item>
      <el-form-item label="报事人"  >
        <el-input v-model="ruleForm.customerName" placeholder="名称（客户报事时必填）"></el-input>
      </el-form-item>
      <el-form-item label="报事人号码"  >
        <el-input v-model="ruleForm.customerTel" placeholder="手机号码（客户报事时必填）"></el-input>
      </el-form-item>
      <el-form-item label="补充地址"  >
        <el-input v-model="ruleForm.address" placeholder="补充地址（选填）"></el-input>
      </el-form-item>
      <el-form-item label="报事类型" prop="postType">
        <el-select v-model="ruleForm.postType1" placeholder="请选择一级类型">
          <el-option label="1.工程" value="1"></el-option>
          <el-option label="2.环境" value="2"></el-option>
          <el-option label="3.安全" value="3"></el-option>
        </el-select>
        <el-select v-model="ruleForm.postType2" placeholder="请选择二级类型">
          <el-option label="101.电气维修/安装" value="1"></el-option>
          <el-option label="102.空调维修" value="2"></el-option>
          <el-option label="103.给排水维修" value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="派单方式" prop="distribitionType">
        <el-select v-model="ruleForm.distribitionType" placeholder="请选择派单方式">
          <el-option label="项目抢单方式" value="1"></el-option>
          <el-option label="调度指派方式" value="2"></el-option>
          <el-option label="直接指派人员" value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="指定接单人" prop="handlePerson">
        <el-select v-model="ruleForm.handlePerson" placeholder="请选择接单人">
          <el-option label="[张三][13800138000][1单]" value="1"></el-option>
          <el-option label="[张四][13800138001][100单]" value="2"></el-option>
          <el-option label="[张五][13800138002][12单]" value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="报事描述" prop="info" >
        <el-input type="textarea" :rows="6" placeholder="请输入内容" v-model="ruleForm.info"></el-input>
      </el-form-item>
      <el-form-item label="上传图片"  >
        <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>
      <el-form-item label="是否加急"  >
        <el-radio v-model="ruleForm.isUrgent" label="1">是</el-radio>
        <el-radio v-model="ruleForm.isUrgent" label="2">否</el-radio>
      </el-form-item>
      <el-form-item label="是否预约"  >
        <el-radio v-model="ruleForm.isBespeak" label="1">是</el-radio>
        <el-radio v-model="ruleForm.isBespeak" label="2">否</el-radio>
      </el-form-item>
      <el-form-item label="预约时间" prop="bespeakTime" >
        <el-date-picker v-model="ruleForm.bespeakTime" type="date" placeholder="选择日期">
          </el-date-picker>
      </el-form-item>
      <el-form-item label="起单人" pro="createBy">
        <el-input v-model="ruleForm.createBy" :disabled="true" placeholder="起单人"></el-input>
      </el-form-item>
      <el-form-item label="部门" pro="department">
        <el-input v-model="ruleForm.department" :disabled="true" placeholder="部门"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">{{$t('operation.save')}}</el-button>
        <el-button @click="resetForm('ruleForm')">{{$t('operation.reset')}}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script src="./workOrderAddJs.js"></script>