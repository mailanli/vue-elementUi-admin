<template>
  <div class="login-panel loginTemplate">
  <div class="title-container">
    <h3 class="title">{{$t('login.title')}}</h3>
  </div>
  <!-- 表单主体 -->
  <el-form class="login-form" autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left">
    <el-form-item prop="username">
      <span class="svg-container svg-container_login">
        <svg-icon icon-class="user" />
      </span>
      <el-input name="username" type="text" v-model="loginForm.username" autoComplete="on" :placeholder="$t('login.username')"
      />
    </el-form-item>
    <el-form-item prop="password">
      <span class="svg-container">
        <svg-icon icon-class="password" />
      </span>
      <el-input name="password" type="password" @keyup.enter.native="handleLogin" v-model="loginForm.password" autoComplete="on"
      :placeholder="$t('login.password')" />
    </el-form-item>
    <div class="trRight"><router-link :to="{ path: '/forgetPassword'}"   class="btn">{{$t('login.forgetPassword')}}</router-link></div>
    <el-button type="primary"  :loading="loading" @click.native.prevent="handleLogin">{{$t('login.logIn')}}</el-button>
    <div class="tr">
      <el-checkbox v-model="loginForm.checked">{{$t('login.autoLogon')}} </el-checkbox>
      <router-link :to="{ path: 'register'} " class="btn-newRegister">{{$t('login.newRegister')}}</router-link>
    </div>
  </el-form>
  <!-- ./表单主体 -->
  </div>
</template>
<script src="./loginingJs.js"></script>
