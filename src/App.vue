<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
  </div>
</template>

<script>
import api from './them_request.js'
export default {
  name: 'app',
  methods:{
    fetchData: async function () {
      let params = {}
      const res = await this.$http.get(api.get.首页,params)
       console.log(res)
    }

  },
  created(){
    this.fetchData()
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
