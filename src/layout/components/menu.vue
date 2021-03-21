<!--
 * @Descripttion: 
 * @version: 
 * @Author: huangwei
 * @Date: 2021-02-15 20:18:15
 * @LastEditors: huangwei
 * @LastEditTime: 2021-02-15 21:33:21
-->
<template>
  <div class="menu">
    <router-link to="/home">home</router-link>
    <router-link to="/mxgraphView">mxgraphView</router-link>
    <router-link to="/mxgraphTest">mxgraphTest</router-link>
    <router-link to="/mxgraphEdit">mxgraphEdit</router-link>
  </div>
</template>

<script>
import { constantRoutes } from '@/router'

export default {
  data() {
    return {
      // constantRoutes
      routes: []
    }
  },
  created() {
    console.log(constantRoutes)
    this.routes = constantRoutes
  }
}
</script>

<style scoped>
.menu {
  display: flex;
}
.menu>a {
  margin-left: 20px;
}
</style>

