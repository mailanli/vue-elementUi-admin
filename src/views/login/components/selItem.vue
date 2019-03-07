<template>
  <div class="selItemTemplate">
    <!-- 表单主体 -->
    <el-form class="login-form" autoComplete="on" :model="selItem" :rules="loginRules" ref="selItem" label-position="left">
      <el-form-item :label="$t('login.selArea')">
       <el-select v-model="arelValue" filterable >
          <el-option
            v-for="item in areaOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item :label="$t('login.selItem')">
       <el-select v-model="itemValue" filterable >
          <el-option
            v-for="item in areaOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item :label="$t('login.selDepartment')">
       <el-select v-model="departmentValue" filterable >
          <el-option
            v-for="item in areaOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item :label="$t('login.selRole')">
       <el-select v-model="roleValue" filterable >
          <el-option
            v-for="item in areaOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item :label="$t('login.selSkill')">
       <el-select v-model="SkillValue" filterable >
          <el-option
            v-for="item in areaOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item :label="$t('login.selSkil2')">
       <el-select v-model="Skil2Value" filterable >
          <el-option
            v-for="item in areaOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <!-- ./表单主体 -->
  </div>
</template>

<script src="./selItemJs.js"></script>