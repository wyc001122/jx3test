<template>
  <div class="navbar">
    <div class="project-name">{{projectName}}</div>
    <div class="right-menu">
      <div class="user">
        <i class="el-icon-user"></i>
        <span style="letter-spacing: 2px;" class="deptName">{{userInfo.deptName}}</span>
      </div>
      <span class="vertical">|</span>
      <div class="logout" @click="logout">
        <i class="el-icon-switch-button"></i>
        <span style="letter-spacing: 2px;" class="logout-text">退出登录</span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { redirect } from "@/utils/auth";

export default {
  data() {
    return {
      projectName: process.env.VUE_APP_BASE_PROJECTCHINESENAME,
    };
  },
  computed: {
    ...mapGetters(["sidebar", "userInfo"]),
  },
  methods: {
    toggleSideBar() {
      this.$store.commit("TOGGLE_SIDEBAR");
    },
    // 退出登录
    logout() {
      localStorage.clear();
      redirect();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/styles/element-variables.scss";
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  display: flex;
  justify-content: space-between;
  .project-name {
    margin-left: 15px;
    color: $--color-primary;
    font-size: 16px;
    font-weight: bold;
    display: flex;
    align-items: center;
  }
  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }
  .right-menu {
    // float: right;
    display: flex;
    align-items: center;
    color: $--color-primary;
    font-size: 16px;

    .user {
      margin: 0 15px;
      color: $--color-primary;
      font-size: 16px;
      cursor: pointer;

      .el-icon-user {
        height: 24px;
        line-height: 28px;
        font-size: 15px;
        margin-right: 5px;
      }
      .deptName {
        // margin: 0 10px;
      }
    }
    .vertical {
      height: 16px;
      line-height: 18px;
    }

    .logout {
      cursor: pointer;
      margin: 0 15px;
      .logout-text {
        margin-left: 5px;
      }
      .el-icon-switch-button {
        height: 24px;
        line-height: 28px;
        font-size: 15px;
      }
    }
  }
}
</style>
