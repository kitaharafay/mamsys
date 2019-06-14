<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
body {
  margin: 0;
}

.login-block {
  width: 400px;
  border: 1px solid #dcdfe6;
  margin: auto;
  background: #fff;
  padding: 10px;
}
</style>