<template>
  <el-card>
    <div slot="header" class="clearfix">
      <div class="title">
        <span>
          {{data.skill_name}}
        </span>
        <!-- 温性 -->
        <template v-if="data.nature>0">
          <div class="nature" v-for="(item,index) in Number((''+data.nature).split('-').pop()) " :key="index">
            <hot></hot>
          </div>
        </template>
        <!-- 寒性 -->
        <template v-if="data.nature<0">
          <div class="nature" v-for="(item,index) in Number((''+data.nature).split('-').pop()) " :key="index">
            <cold></cold>
          </div>
        </template>
      </div>
    </div>
    <div class="content">
      <img :src="getUrl(data.skill_name)">
      <div class="describe">
        距离20尺，释放：1.5秒，无调息时间。运功1.5秒，对目标造成379-399点（+1.04*攻击力）毒性内功伤害，并使得自身获得1点寒性。
      </div>
    </div>
  </el-card>
</template>
<script>
import hot from "./hot";
import cold from "./cold";
export default {
  props: {
    data: {
      type: Object,
    },
  },
  components: {
    hot,
    cold,
  },
  data() {
    return {};
  },
  methods: {
    getUrl(skill_name) {
      return require("../../assets/icon/" + skill_name + ".png");
    },
  },
  mounted() {
    console.log();
    console.log(this.data);
  },
};
</script>
<style lang="scss" scoped>
.el-card {
  width: 800px;
  .title {
    display: flex;
    align-items: center;
    font-size: 18px;
    span {
      margin-right: 5px;
    }
    // font-weight: bold;
    .nature {
      width: 20px;
      height: 20px;
      margin: 0 3px 5px;
    }
  }
  .content {
    display: flex;
    img {
      margin-right: 20px;
    }
    .describe {
      text-indent: 2em;
    }
  }
}
</style>