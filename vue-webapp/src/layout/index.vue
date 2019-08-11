<template>
  <el-container class="mamsys-main-wrapper">
    <mamsys-sider-bar />
    <mamsys-app-main />
  </el-container>
</template>

<script>
import MamsysSiderBar from "./SiderBar";
import MamsysAppMain from "./AppMain";
export default {
  components: {
    MamsysSiderBar,
    MamsysAppMain
  }
};
</script>

<style>
.mamsys-main-wrapper {
  height: 100vh;
}
</style>
