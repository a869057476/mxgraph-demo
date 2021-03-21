<!--
 * @Descripttion: 
 * @version: 
 * @Author: huangwei
 * @Date: 2021-02-15 19:38:24
 * @LastEditors: huangwei
 * @LastEditTime: 2021-02-15 20:21:14
-->
<template>
  <div>
    <Menu></Menu>
    <section class="app-main">
      <transition name="fade-transform" mode="out-in">
        <router-view />
      </transition>
    </section>
  </div>
</template>

<script>
import Menu from './components/menu.vue'
export default {
  name: 'Layout',
  components: {
    Menu
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
</style>
