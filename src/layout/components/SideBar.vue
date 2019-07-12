<template>
  <el-aside class="gh-sidebar">
    <el-menu class="gh-navbar">
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>系统管理</span>
        </template>
        <el-menu-item index="2-1">
          <i class="el-icon-menu"></i>
          <span slot="title">流程设计</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<style>
.gh-sidebar {
    height: calc(100vh - 60px);
}

.gh-navbar {
    height: 100%;
}
</style>
