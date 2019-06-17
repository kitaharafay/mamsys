<template>
  <el-container style="min-height:100vh;">
    <el-header class="elx-header">Navheader</el-header>
    <el-container>
      <el-aside width="256px" >
        <el-menu style="height:calc(100vh - 80px);">
          <el-submenu index="8">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>系统管理</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="8-1">选项1</el-menu-item>
              <el-menu-item index="8-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="9">
            <template slot="title">
              <i class="el-icon-data-analysis"></i>
              <span>流程设计</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="9-1">选项1</el-menu-item>
              <el-menu-item index="9-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
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
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-collection"></i>
              <span>综合协调</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="4-1">选项1</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-receiving"></i>
              <span>竣工资料</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="5-1">选项1</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-notebook-1"></i>
              <span>实名制管理</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="6-1">选项1</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title">
              <i class="el-icon-set-up"></i>
              <span>工程建设</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="7-1">选项1</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main style="background: rgba(0,0,0,0.1)">
          <router-view></router-view>
        </el-main>
        <el-footer style="background: rgba(0,0,0,0.1)">
          <p style="font-size:14px;text-align:center">Design by ghaoyang 2019-06-17</p>
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<style scoped>
.elx-header {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  z-index: 999;
}
</style>


