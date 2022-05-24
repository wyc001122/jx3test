  
<template>
  <div>
    <template v-for="(item, index) in data">
      <el-submenu :key="index" v-if="item.children" :index="item.nodeCode">
        <template slot="title">
          <i :class="item.nodeIcon" slot="reference"></i>
          <span>{{ item.nodeName }}</span>
        </template>
        <SidebarItem :data="item.children" />
      </el-submenu>
      <template v-else>
        <el-menu-item v-if="item.nodeName!='分割线'" :key="index" :index="item.nodeCode">
          <i :class="item.nodeIcon"></i>
          <span slot="title">{{ item.nodeName }}</span>
        </el-menu-item>
        <div v-else class="line" :key="index"></div>
      </template>
    </template>
  </div>
</template>
<script>
export default {
  name: "SidebarItem",
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
};
</script>
