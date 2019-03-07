<template>
  <div class="login-container forgetTemplate">
    <div class="logo"></div>
    <div class="login-panel">
        <div class="title-container">
          <h3 class="title">{{$t('login.titleForget')}}</h3>
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

          <div class="trRight"><router-link to="/" class="btn">{{$t('login.backLogin')}}</router-link></div>
          <el-button type="primary" style="width:100%;margin-bottom:30px;" :loading="loading" @click.native.prevent="handleLogin">{{$t('login.confirmSubmit')}}</el-button>
        </el-form>
        <!-- ./表单主体 -->
      </div>
    </div>

</template>
<script src="./forgetPasswordJs.js"></script>

