<template>
  <a-tree
    showLine
    :loadData="onLoadData"
    :treeData="treeData"
    :style="{minWidth:'400px',minHeight:'100vh',margin:'20px'}"
  />
</template>

<script>
import { getArchiveTreeAsync } from "@/api/archive";
export default {
  data() {
    return {
      treeData: [{ title: "Root", key: "0" }]
    };
  },
  methods: {
    onLoadData(treeNode) {
      console.log(treeNode.dataRef.key);
      return new Promise(resolve => {
        if (treeNode.dataRef.children) {
          resolve();
          return;
        }

        getArchiveTreeAsync(treeNode.dataRef.key)
          .then(res => res.data)
          .then(res => {
            console.log(res);
            if (res && res.code === 20000) {
              let data = res.data;
              treeNode.dataRef.children = data.map(element => {
                return {
                  title: element.title,
                  key: element.key
                };
              });
              this.treeData = [...this.treeData];
            }
            resolve();
          });
      });
    }
  }
};
</script>
