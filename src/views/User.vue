<template>
  <Page>
    <div style="width:100%;">
      <div>
        <el-page-header @back="goBack" content="个人中心"></el-page-header>
      </div>
      <el-divider></el-divider>
      <div style="padding:20px;">
        <el-tabs :tab-position="tabPosition" style="min-height: 500px;width: 100%;">
          <el-tab-pane label="基本设置">
            <BaseSettings></BaseSettings>
          </el-tab-pane>
          <el-tab-pane label="安全设置">
            <SafetySettings></SafetySettings>
          </el-tab-pane>
          <el-tab-pane label="账号绑定">账号绑定</el-tab-pane>
          <el-tab-pane label="新消息通知">
            <NoticeSettings></NoticeSettings>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </Page>
</template>

<script>
import Page from "@/components/common/Page.vue";
import BaseSettings from "@/views/User/BaseSettings.vue";
import SafetySettings from "@/views/User/SafetySettings.vue";
import NoticeSettings from "@/views/User/NoticeSettings.vue";
export default {
  components: { Page, BaseSettings, SafetySettings, NoticeSettings },
  data() {
    return {
      tabPosition: "left"
    };
  },
  methods: {
    goBack() {
      //console.log("go back");
    }
  }
};
</script>

