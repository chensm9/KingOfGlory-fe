<template>
  <div id="app">
    <el-menu
      :default-active="$route.path"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router>
      <el-menu-item index="/hero">英雄数据</el-menu-item>
      <el-menu-item index="/equip">装备数据</el-menu-item>
      <el-menu-item index="/rune">铭文搭配</el-menu-item>
      <el-menu-item index="/skin">皮肤壁纸</el-menu-item>
      <el-menu-item index="/summoner">召唤师技能</el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-left: 3%;
  padding-right: 3%;
}

#back {
  width: 100%;
  overflow: hidden;
  /* display: inline; */
}
</style>
