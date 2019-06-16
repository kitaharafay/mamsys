<template>
  <el-container style="min-height:100vh;">
    <el-header>
      Navheader
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu style="height:100%;">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-office-building"></i>
              <span>质量工程</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-sunrise-1"></i>
              <span>环保管理</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项2</el-menu-item>
              <el-menu-item index="2-4">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-umbrella"></i>
              <span>安全管理</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
              <el-menu-item index="3-3">选项2</el-menu-item>
              <el-menu-item index="3-4">选项2</el-menu-item>
              <el-menu-item index="3-5">选项2</el-menu-item>
              <el-menu-item index="3-6">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container style="background:#ccc">
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

