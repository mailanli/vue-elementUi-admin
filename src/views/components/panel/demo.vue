<template>
  <elpanel :title='titleD'  >
     <searchForm></searchForm>
  </elpanel> 
</template>

<script>
  import elpanel from './index'
  import searchForm from '../searchForm'
  export default {
    components: { elpanel, searchForm },
    data() {
      return {
        titleD: '标题'
      }
    },
    methods: {
    }
  }
</script>
