<template>
  <el-container style="margin-left: 30px;">
    <div style="width:100%">
      <div class="elx-list-item">
        <p class="elx-list-item-title">账户密码</p>
        <p class="elx-list-item-content">当前密码强度： 强</p>
        <el-link type="primary" class="elx-right">修改</el-link>
      </div>
      <el-divider></el-divider>
      <div class="elx-list-item">
        <p class="elx-list-item-title">密保手机</p>
        <p class="elx-list-item-content">已绑定手机： 1360019840</p>
        <el-link type="primary" class="elx-right">修改</el-link>
      </div>
      <el-divider></el-divider>
      <div class="elx-list-item">
        <p class="elx-list-item-title">密保问题</p>
        <p class="elx-list-item-content">未设置密保问题，密保问题可以有效的保护账户安全</p>
        <el-link type="primary" class="elx-right">设置</el-link>
      </div>
      <el-divider></el-divider>
      <div class="elx-list-item">
        <p class="elx-list-item-title">备用邮箱</p>
        <p class="elx-list-item-content">已绑定邮箱：1360019840@qq.com</p>
        <el-link type="primary" class="elx-right">修改</el-link>
      </div>
      <el-divider></el-divider>
      <div class="elx-list-item">
        <p class="elx-list-item-title">MFA设备</p>
        <p class="elx-list-item-content">未绑定MFA设备，绑定后，可以进行二次确认</p>
        <el-link type="primary" class="elx-right">绑定</el-link>
      </div>
    </div>
  </el-container>
</template>
<script>
export default {
  name: 'SafetySettings'
}
</script>

<style scoped>
.elx-list-item .elx-right {
  position: absolute;
  right: 10px;
  top: 50%;
}

.elx-list-item {
  position: relative;
}

.elx-list-item .elx-list-item-title {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.65);
}
.elx-list-item .elx-list-item-content {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
}
</style>


