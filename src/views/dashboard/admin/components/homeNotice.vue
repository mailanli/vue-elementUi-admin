<template>
	<div>
  <div slot="header" class="clearfix" :data="list">
	  <span class="tit">系统公告</span>
   </div>
   <ul v-for="o in list" :key="o" >
   	<template slot-scope="scope">
        {{o.remark}}
      </template>
	     </ul>
	 </div>
</template>

<script src="./homeNoticeJs.js"></script>