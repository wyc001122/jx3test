<template>
  <div class="out-box">
    <SearchTool :model="form" @search="search" @reset="reset">
      <el-input v-model="form.input1" placeholder="请输入藏品编码/名称" custom-label="藏品编码/名称"></el-input>
      <el-input v-model="form.input2" placeholder="请输入藏品等级" custom-label="藏品等级"></el-input>
      <el-input v-model="form.input3" placeholder="请输入藏品类别" custom-label="藏品类别"></el-input>
      <el-input v-model="form.input4" placeholder="请输入藏品来源" custom-label="藏品来源"></el-input>
      <el-input v-model="form.input5" placeholder="请输入藏品质地" custom-label="藏品质地"></el-input>
    </SearchTool>
    <div class="table-model">
      <BaseTable :data="tableData"></BaseTable>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {},
      tableData: [
        {
          date: "2016-05-02",
          name: "王小123虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小321虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小123虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎123",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  methods: {
    search() {
      console.log(1);
    },
    reset() {
      console.log(2);
    },
  },
};
</script>
<style lang="scss">
.out-box {
  margin: 20px;
  height: 100%;
  background: #fff;
  box-shadow: $base-shadow;
  border-radius: 4px;
  .table-model {
    outline: 1px solid;
    // margin: 20px;
    padding: 20px;
    background-color: #fff;
    // min-height: 200px;
  }
}
</style>