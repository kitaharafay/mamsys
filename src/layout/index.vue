<template>
  <el-container class="gh-main-warpper">
    <gh-sidebar></gh-sidebar>
    <el-container>
      <gh-header></gh-header>
      <el-main>
        <gh-tabbar></gh-tabbar>
      </el-main>
      <el-footer>
        <el-divider>Footer</el-divider>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
import LeftSideBar from './components/SideBar.vue'
import TabBar from './components/TabBar.vue'
import Header from './components/Header.vue'
export default {
  components: {
    'gh-sidebar': LeftSideBar,
    'gh-tabbar': TabBar,
    'gh-header': Header
  }
}
</script>

<style>
.gh-main-warpper {
  min-height: 100vh;
}
</style>
