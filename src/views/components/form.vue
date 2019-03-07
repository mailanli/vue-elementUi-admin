<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="区域" prop="area">
    <el-select v-model="ruleForm.area" placeholder="请选择活动区域">
      <el-option label="区域一" value="1"></el-option>
      <el-option label="区域二" value="2"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="补充地址"  >
    <el-input v-model="ruleForm.address" placeholder="补充地址（选填）"></el-input>
  </el-form-item>
  <el-form-item label="报事描述" prop="info" >
    <el-input
      type="textarea"
      :rows="2"
      placeholder="请输入内容"
      v-model="ruleForm.info">
    </el-input>
  </el-form-item>
  <el-form-item label="上传图片"  >
    <el-upload
      class="upload-demo"
      drag
      action="https://jsonplaceholder.typicode.com/posts/"
      multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </el-form-item>
  <el-form-item label="活动时间" required>
    <el-col :span="11">
      <el-form-item prop="date1">
        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
      </el-form-item>
    </el-col>
    <el-col class="line textCenter" :span="1">-</el-col>
    <el-col :span="11">
      <el-form-item prop="date2">
        <el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
      </el-form-item>
    </el-col>
  </el-form-item>
  <el-form-item label="即时生效" prop="effect">
    <el-switch v-model="ruleForm.effect"></el-switch>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
</template>

<script src="./formJs.js"></script>
