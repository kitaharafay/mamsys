<template>
  <el-aside class="mamsys-aside">
    <mamys-nav-menu />
  </el-aside>
</template>

<script>
import MamysNavMenu from "./NavMenu.vue";
export default {
  components: {
    MamysNavMenu
  }
};
</script>

<style>
.mamsys-aside {
  z-index: 200;
}
</style>
