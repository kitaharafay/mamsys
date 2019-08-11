<template>
  <el-container>
    <mamsys-header />
    <el-main></el-main>
    <el-footer></el-footer>
  </el-container>
</template>

<script>
import MamsysHeader from "./Header.vue";
export default {
  components: {
    MamsysHeader
  }
};
</script>