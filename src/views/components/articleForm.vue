<template>
  <div class="app-container">
    <el-form class="article-form-container"  ref="articleForm"  :model="articleForm" label-width="80px">
        <el-form-item :label="$t('table.releaseItem')">
          <el-select v-model="articleForm.item">
            <el-option  :label="$t('table.videoCourse')" value="v1"></el-option>
            <el-option  :label="$t('table.articleCourse')" value="v2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('table.title')">
          <el-input v-model="articleForm.title"></el-input>
        </el-form-item>
        <el-form-item :label="$t('table.recHome')">
          <el-checkbox v-model="articleForm.recHome">{{$t('table.recommend')}}</el-checkbox>
        </el-form-item>
        <el-form-item :label="$t('table.recBanner')">
          <el-checkbox v-model="articleForm.recBanner">{{$t('table.recommend')}}</el-checkbox>
        </el-form-item>
        <el-form-item :label="$t('table.status')">
          <el-checkbox v-model="articleForm.recState">{{$t('table.recommend')}}</el-checkbox>
        </el-form-item>
        <el-form-item :label="$t('table.coverPhoto')">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccessImg"
            :before-upload="beforeAvatarUploadImg">
            <img v-if="articleForm.imageUrl" :src="articleForm.imageUrl" class="avatar">
            <div class="el-upload__text">{{$t('table.photo')}}</div>
          </el-upload>
        </el-form-item>
        <el-form-item :label="$t('table.uploadFile')">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            name="file"
            :show-file-list="false"
            :on-success="handleAvatarSuccessFile"
            :before-upload="beforeAvatarUploadFile">
            <div class="el-upload__text">{{$t('table.enclosure')}}</div>
            
          </el-upload>
        </el-form-item>
        <el-form-item :label="$t('table.content')">
          <div class="editor-container">
            <Tinymce :height=400 ref="editor" v-model="articleForm.content" />
          </div>
      </el-form-item>
      <el-form-item class="btnGroupPag">
        <el-button type="primary" @click="onSubmit">{{$t('table.publish')}}</el-button>
        <el-button>{{$t('table.cancel')}}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script src="./articleFormJs.js"></script>
