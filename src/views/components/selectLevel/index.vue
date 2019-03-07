<template>
  <el-form class="search-form" autoComplete="on" >
   <select v-model="selected"  class="level-select">
    <option v-for="yx in YX" :value="yx.text">
      {{yx.text}}
    </option>
  </select>
  <select  class="level-select">
    <option v-for="(zy, index) in selection" :value="zy.text" :selected="index == 0 ? true : false">
      {{zy.text}}
    </option>
  </select>
</el-form>
</template>

<script src="./indexJs.js"></script>
