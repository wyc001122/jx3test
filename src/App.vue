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
          nature: -1,
          skill_describe: `【商陆缀寒】：距离20尺，释放：1.5秒，无调息时间。运功1.5秒，对目标造成379-399点（+1.04*攻击力）毒性内功伤害，并使得自身获得1点寒性。“ 凌然天风”状态下无须读条；招式消耗-10%、招式消耗-20%`,
          skill_secret: ["会心3%", "会心4%", "伤害2%", "伤害3%"],
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
