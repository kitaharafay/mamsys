<template>
  <el-container class="gh-main-warpper">
    <el-header>Header</el-header>
    <el-container>
      <gh-sidebar></gh-sidebar>
      <el-container>
        <el-main style="overflow:hidden">Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import LeftSideBar from './components/SideBar.vue'
export default {
  components: {
    'gh-sidebar': LeftSideBar
  }
}
</script>

<style>
.gh-main-warpper {
    min-height: 100vh;
}
</style>
