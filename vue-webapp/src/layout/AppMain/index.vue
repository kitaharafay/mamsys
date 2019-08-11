<template>
  <a-layout>
    <mamsys-header />
    <mamsys-main />
  </a-layout>
</template>

<script>
import MamsysHeader from "./Header.vue";
import MamsysMain from "./Main.vue";
export default {
  components: {
    MamsysHeader,
    MamsysMain
  }
};
</script>