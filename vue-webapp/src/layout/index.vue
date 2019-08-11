<template>
  <a-layout>
    <mamsys-sider-bar />
    <mamsys-app-main />
  </a-layout>
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
