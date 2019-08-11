<template>
  <a-card
    title="竣工资料"
    class="mamsys-card"
  >
    <a-layout>
      <a-layout-sider
        theme="light"
        width="400"
        :style="{ overflow: 'auto', height: '100%', position: 'absolute' }"
      >
        <ArchiveTree />
      </a-layout-sider>
      <a-layout>
        <a-layout-content class="mamsys-card-content">123</a-layout-content>
      </a-layout>
    </a-layout>
  </a-card>
</template>

<script>
import ArchiveTree from "./ArchiveTree.vue";
export default {
  components: { ArchiveTree }
};
</script>

<style>
.mamsys-card {
  min-height: 100%;
}
.mamsys-card-content {
  background: #fff;
}
.mamsys-card .ant-card-body {
  padding: 1px 0 0 0;
  height: calc(100vh - 142px);
  position: relative;
}
</style>
