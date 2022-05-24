<template>
  <div :class="classObj" class="app-wrapper">
    <Sidebar class="sidebar-container"></Sidebar>
    <div class="main-container">
      <div :class="{'fixed-header':fixedHeader}">
        <Navbar />
        <!-- <tags-view v-if="needTagsView" /> -->
      </div>
      <AppMain />
      <!-- <right-panel v-if="showSettings">
        <settings />
      </right-panel> -->
    </div>
  
  </div>
</template>
<script>
import { AppMain, Navbar, Settings, Sidebar, TagsView } from "./components";
import { mapState } from "vuex";
export default {
  components: { AppMain, Navbar, Sidebar },
  computed: {
    ...mapState({
      sidebar: (state) => state.sidebar,
      //   showSettings: (state) => state.settings.showSettings,
      //   needTagsView: (state) => state.settings.tagsView,
      fixedHeader: (state) => state.settings.fixedHeader,
    }),
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
      };
    },
  },
 
};
</script>
<style lang="scss" scoped>
@import "~@/styles/mixin.scss";


.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}

.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}
</style>