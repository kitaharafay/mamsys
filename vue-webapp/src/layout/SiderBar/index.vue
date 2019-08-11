<template>
  <a-layout-sider
    class="mamsys-aside"
    collapsible
    :trigger="null"
    v-model="$store.getters.navCollapse"
    width="300"
  >
    <mamys-nav-menu />
  </a-layout-sider>
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
  min-height: 100vh;
  z-index: 200;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
</style>
