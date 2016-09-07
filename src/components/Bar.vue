<template>
  <div class="hello">
    <a @click="kicks">{{ msg }}</a>
  </div>
</template>

<script>
  import {kick} from '../vuex/actions'
  import {getMsg} from '../vuex/getters'
  export default {
    vuex: {
      actions: {
        kicks: kick
      },
      getters: {
        msg: getMsg
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    color: #42b983;
  }
</style>
