<template>
  <el-container class="gh-main-warpper">
    <el-header>Header</el-header>
    <el-container>
      <el-aside>Aside</el-aside>
      <el-container>
        <el-main style="overflow:hidden">Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {}
</script>

<style>
.gh-main-warpper {
    min-height: 100vh;
}
</style>
