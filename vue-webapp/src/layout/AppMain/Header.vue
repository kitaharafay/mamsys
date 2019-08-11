<template>
  <a-layout-header class="mamsys-header">
    <a-button @click="handleCollapseClick">
      <a-icon :type="$store.getters.navCollapse ? 'menu-unfold' : 'menu-fold'" />
    </a-button>
  </a-layout-header>
</template>

<script>
export default {
  methods: {
    handleCollapseClick() {
      this.$store.dispatch("layout/navCollapseClick");
    }
  }
};
</script>

<style>
.mamsys-header {
  line-height: 60px;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
  z-index: 100;
}
</style>
