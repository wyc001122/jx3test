<template>
  <div :class="{'has-logo':showLogo}">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu :unique-opened="true" :active-text-color="variables.menuActiveText" :text-color="variables.menuText" @select="menuSelect" :default-active="activeMenu" :collapse="isCollapse" :collapse-transition="false"
        mode="vertical">
        <SidebarItem :data="menusTree" />
      </el-menu>
    </el-scrollbar>
    <Hamburger id="hamburger-container" :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Logo from "./Logo";
import SidebarItem from "./SidebarItem";
import variables from "@/styles/variables.scss";
import toTree from "@/utils/toTree";
import Hamburger from "@/components/Hamburger";
export default {
  components: { SidebarItem, Logo, Hamburger },
  computed: {
    ...mapGetters(["menus", "sidebar"]),
    menusTree() {
      let arr = JSON.parse(JSON.stringify(this.menus));
      arr = arr.filter((item) => item.nodeType != 3);
      return toTree(arr, "root", "nodeCode", "nodePcode")[0].children;
    },
    activeMenu() {
      const fintItem = this.menus.find((item) => item.path == this.$route.path);
      return fintItem.nodeCode;
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo;
    },
    isCollapse() {
      return !this.sidebar.opened;
    },
    variables() {
      return variables;
    },
  },
  data() {
    return {
      defaultActive: "0",
    };
  },
  methods: {
    menuSelect(indexValue) {
      const node = this.menus.find((item) => {
        return item.nodeCode === indexValue;
      });
      if (node && node.nodeType == 2) {
        this.goToPage(node);
      }
    },
    async goToPage(node) {
      if (node.nodeRouter != "") {
        await this.$router.replace({
          name: node.nodeRouter,
        });
      }
    },
    toggleSideBar() {
      this.$store.commit("TOGGLE_SIDEBAR");
    },
  },
};
</script>
<style lang="scss" scoped>

@import "~@/styles/element-variables.scss";
.hamburger-container {
  line-height: 46px;
  height: 100%;
  float: left;
  cursor: pointer;
  transition: background 0.3s;
  -webkit-tap-highlight-color: transparent;
  width: 100%;
  text-align: center;
  border-top: 1px solid #b0c7fe80;
  fill: #b0c7fe;
  &:hover {
    background: rgba(0, 0, 0, 0.025);
  }
}
</style>