<template>
  <div id="app">
    <el-container style="background:#DCDFE6;height:100vh">
      <div class="login-block">
        <el-divider content-position="center">登录</el-divider>
        <el-form label-width="60px" style="margin: auto;padding: 10px;">
          <el-form-item label="用户名">
            <el-input placeholder="Username"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" placeholder="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-checkbox>记住我</el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">登录</el-button>
            <el-button>注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-container>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import mepng from './assets/meweixin.png'

export default {
  name: 'app',
  components: {

  },
  data() {
    return { url: mepng }
  }
}
</script>

<style>
body {
  margin: 0;
}

.login-block {
  width: 400px;
  border: 1px solid #dcdfe6;
  margin: auto;
  background: #fff;
  padding: 10px;
}
</style>