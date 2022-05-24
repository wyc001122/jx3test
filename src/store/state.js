import {
    getToken
} from "@/utils/auth.js"
const state = {
    userInfo: null,
    menus: null,
    token: null,
    sidebar: {
        opened: true,
        withoutAnimation: false
    },
    settings: {
        fixedHeader: {},
        sidebarLogo: true,
    }

    // // 系统信息
    // systemInfo: null,
    // // 配置
    // configs: null,
    // // token
    // token: null,
    // // 数据刷新时间
    // updateTime: null,
    // // 用户信息
    // userInfo: null,
    // // 账户类型
    // userTypes: null,
    // // 功能节点菜单
    // menu: null,
    // // 面包屑
    // crumbs: null,
    // // 缓存页面列表
    // keepAliveList: [],
    // //
    // mapForm: null,
    // // 首页点击进入后的保存的id
    // performanceId: null,
};

export default state