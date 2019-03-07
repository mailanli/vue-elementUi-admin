<template>
  <div class="login-container authenticatTemplate">
    <div class="logo"></div>
    <div class="login-panel">
        <div class="title-container">
          <h3 class="title">{{$t('login.authenticatTit')}}</h3>
        </div>
        <!-- 表单主体 -->
        <el-form class="login-form" autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left">
          <el-form-item prop="workNumber">
            <el-input name="telephone" type="text" v-model="loginForm.workNumber" autoComplete="on" :placeholder="$t('login.numberPlaceholder')"
            />
          </el-form-item>
          <el-form-item prop="name">
            <el-input name="name" type="text" v-model="loginForm.name" autoComplete="on" :placeholder="$t('login.namePlaceholder')"
            />
          </el-form-item>
          <el-form-item prop="userId">
            <el-input name="userId" type="text" v-model="loginForm.userId" autoComplete="on" :placeholder="$t('login.idPlaceholder')"
            />
          </el-form-item>
          <el-form-item prop="address">
            <el-input name="address" type="text" v-model="loginForm.address"  autoComplete="on" :placeholder="$t('login.addPlaceholder')"
            />
          </el-form-item>
          <el-form-item :label="$t('login.sex')">
            <el-radio-group v-model="loginForm.resource">
              <el-radio label="1">{{$t('login.male')}}</el-radio>
              <el-radio label="2">{{$t('login.female')}}</el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item :label="$t('login.select')">
            <ul class="selItemList">
              <li><div class="text">{{$t('login.selItems')}}</div><el-button class="small-btn" @click="dialogVisible = true">+</el-button></li>
            </ul>
          </el-form-item>
          <div class="tr">
            <router-link to="/" >{{$t('login.hasAccounts')}}</router-link>
          </div>
          <el-button type="primary" style="width:100%;margin-bottom:30px;" :loading="loading" @click.native.prevent="handleLogin">{{$t('login.confirmSubmit')}}</el-button>
        </el-form>
        <!-- ./表单主体 -->
      </div>
      <!-- 注册协议弹出框 -->
      <el-dialog
        :title="$t('login.selItemTit')"
        :modal-append-to-body="false"
        :visible.sync="dialogVisible"
        width="50%"
        :before-close="handleClose">
        <slot><selItem /></slot>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">{{$t('table.cancel')}}</el-button>
          <el-button type="primary" @click="dialogVisible = false">{{$t('table.add')}}</el-button>
        </span>
      </el-dialog>
      <!-- 注册协议弹出框 -->
    </div>
</template>

<script src="./authenticatJs.js"> </script>

