<template>
  <div class="login-container registerTemplate">
    <div class="logo"></div>
    <div class="login-panel">
        <div class="title-container">
          <h3 class="title">{{$t('login.registerTit')}}</h3>
        </div>
        <!-- 表单主体 -->
        <el-form class="login-form" autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left">
          <el-form-item prop="telephone">
            <el-input name="telephone" type="text" v-model="loginForm.telephone" autoComplete="on" :placeholder="$t('login.telPlaceholder')"
            />
          </el-form-item>
          <el-form-item prop="telephone">
            <el-col :span="18">
              <el-input name="telCode" type="text" v-model="loginForm.telCode" autoComplete="on" :placeholder="$t('login.telCode')" />
            </el-col>
            <el-col :span="6"><el-button><span>{{$t('login.telCodeGet')}}</span></el-button></el-col>
          </el-form-item>
          <el-form-item prop="password">
            <el-input name="password" :type="passwordType"  v-model="loginForm.password" autoComplete="on"
            :placeholder="$t('login.passPlaceholder')" />
          </el-form-item>
          <el-form-item prop="password">
            <el-input name="confirmPassword" :type="passwordType"  v-model="loginForm.confirmPassword" autoComplete="on"
            :placeholder="$t('login.conPassPlaceholder')" />
          </el-form-item>
          <div class="tr">
            <el-checkbox v-model="loginForm.checked">{{$t('login.hasRead')}}</el-checkbox>
            <a   @click="dialogVisible = true"  class="btn btn-regAgreement">{{$t('login.regAgreement')}}</a>
            <router-link to="/" class="btn-right">{{$t('login.hasAccounts')}}</router-link>
          </div>
          <el-button type="primary" style="width:100%;margin-bottom:30px;" :loading="loading" @click.native.prevent="handleLogin">{{$t('login.confirmSubmit')}}</el-button>
        </el-form>
        <!-- ./表单主体 -->
      </div>
      <!-- 注册协议弹出框 -->
      <el-dialog
        :title="$t('login.regAgreementTit')"
        class="regAgreementDialog"
        :modal-append-to-body="false"
        :visible.sync="dialogVisible"
        width="80%"
        height="80%"
        :before-close="handleClose">
        <slot><regAgreement /></slot>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
      <!-- 注册协议弹出框 -->
    </div>
</template>

<script src="./registerJs.js"></script>

