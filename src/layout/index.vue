<template>
  <el-container class="gh-main-warpper">
    <el-header class="gh-header">
      <el-image
        :src="headerLogoImage"
        fit="contain"
        class="gh-header-logo"
      ></el-image>
      <div class="gh-header--left">
        <el-button><i class="el-icon-s-fold"></i></el-button>
        <div style="display:inline-block;margin-left:20px;">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
      <div class="gh-header--right">
        <div><span><i class="el-icon-user"></i> User</span></div>
      </div>
    </el-header>
    <el-container>
      <gh-sidebar></gh-sidebar>
      <el-container>
        <el-main>
          <gh-tabbar></gh-tabbar>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import LeftSideBar from './components/SideBar.vue'
import TabBar from './components/TabBar.vue'
import headerLogo from '../assets/images/header_logo.png'
export default {
  components: {
    'gh-sidebar': LeftSideBar,
    'gh-tabbar': TabBar
  },
  data: () => {
    return {
      headerLogoImage: headerLogo
    }
  }
}
</script>

<style>
.gh-main-warpper {
  min-height: 100vh;
}
.gh-header-logo {
  height: 60px;
  width: 360px;
  float: left;
  margin-right: 30px;
}
.gh-header {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  z-index: 999;
  line-height: 60px;
}
.gh-header--left {
  float: left;
}
.gh-header--right {
  float: right;
  height: 60px;
  line-height: 60px;
  padding: 0 15px;
  transition: all 0.5s ease;
  user-select: none;
  cursor: pointer;
}
.gh-header--right:hover {
  background-color: rgba(0, 0, 0, 0.2);
  color: #1a1a1a;
}
</style>
