<template>
  	<div class="panel-default">
  		<div class="panel-head">
  			<h3>{{title}}</h3>
  		</div>
	    <div class="panel-body" >
        <slot></slot>
	    </div>
    </div>
</template>

<script>
  export default {
    name: 'elpanel',
    props: ['title'],
    data() {
      return {}
    },
    methods: {
    }
  }
</script>
