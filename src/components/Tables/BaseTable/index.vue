<template>
  <el-table v-bind="$attrs" v-on="$listeners" :data="data" style="width: 100%">
    <el-table-column prop="date" label="日期" width="180">
    </el-table-column>
    <el-table-column prop="name" label="姓名" width="180">
    </el-table-column>
    <el-table-column prop="address" label="地址">
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
// 消除表头的check
::v-deep .el-table__header th .cell .el-checkbox {
  display: none;
}
// 消除选中框width过小的时候出现的...符号
::v-deep .el-table__body tbody .el-table-column--selection .cell {
  text-overflow: clip;
}
</style>