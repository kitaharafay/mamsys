<template>
  <div id="app">
    <gh-layout></gh-layout>
  </div>
</template>

<script>
import Layout from './layout/index.vue'
export default {
  components: {
    'gh-layout': Layout
  }
}
</script>

<style>
.el-main {
  padding: 6px;
}
</style>
