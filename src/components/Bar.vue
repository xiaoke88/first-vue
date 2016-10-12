<template>
  <div class="hello">
    <a @click="kicks">{{ msg }}</a>
  </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
  export default {
    computed:mapGetters({
      msg:'getMsg'
    }),
    methods:mapActions({
      kicks:'kick'
    })
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    color: #42b983;
  }
</style>
