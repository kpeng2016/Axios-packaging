<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
  </div>
</template>

<script>
import api from './request/api'

export default {
  name: 'app',
  data(){
    return {
      list: []
    }
  },
  methods:{
    fetchData: async function () {
      let params = {}
      const res = await this.$http.get(api.right,params)
       console.log(res.data.error_msg)
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
