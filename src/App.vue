<template>
  <div id="app">
    <el-collapse :value="collapse">
      <el-collapse-item title="套路一：行忌制方" :name="1">
        <skill-card v-for="(item,index) in skillList" :key="index" :data="item"></skill-card>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import skillCard from "@/components/skillCard";
export default {
  name: "App",
  components: { skillCard },
  data() {
    return {
      collapse: [1],
      skillList: [
        {
          skill_name: "商陆缀寒",
          skill_distance: 20,
          nature: -1,
        },
      ],
    };
  },
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 20px;
}
.el-collapse-item {
  .el-collapse-item__header {
    font-size: 18px;
    font-weight: bold;
  }
  .el-collapse-item__content {
    padding: 0 10px;
  }
}
</style>
