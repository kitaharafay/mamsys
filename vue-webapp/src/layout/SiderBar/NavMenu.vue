<template>
  <a-menu
    theme="dark"
    mode="inline"
    :selectedKeys="[$route.path]"
  >
    <a-menu-item :key="'/'">
      <router-link
        to="/"
        replace
      >
        <a-icon type="home" />
        <span>Home</span>
      </router-link>
    </a-menu-item>
    <a-menu-item :key="'/archive'">
      <router-link
        to="/archive"
        replace
      >
        <a-icon type="database" />
        <span>Archive</span>
      </router-link>
    </a-menu-item>
  </a-menu>
</template>

<script>
export default {
  methods: {
    handleIndexClick() {
      console.log(1);
      this.$router.replace("/");
    },
    handleArchiveClick() {
      this.$router.push("/archive");
    }
  }
};
</script>
