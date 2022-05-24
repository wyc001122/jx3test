const mutations = {
    SETUSERINFO(state, value) {
        state.userInfo = value;
    },
    SETMENUS(state, value) {
        state.menus = value;
    },
    SETTOKEN(state, value) {
        state.token = value;
    },
    CLEARTOKEN(state, value) {
        state.token = null;
    },
    CLEARUSERINFO(state, value) {
        state.userInfo = null;
    },
    TOGGLE_SIDEBAR(state) {
        state.sidebar.opened = !state.sidebar.opened
        state.sidebar.withoutAnimation = false
    },
    CLOSE_SIDEBAR(state, withoutAnimation) {
        state.sidebar.opened = false
        state.sidebar.withoutAnimation = withoutAnimation
    }
    // // 系统信息
    // setSystemInfo(state, value) {
    //     state.systemInfo = value;
    // },
    // // 配置
    // setConfigs(state, value) {
    //     state.configs = value;
    // },
    // // token
    // setToken(state, value) {
    //     state.token = value;
    // },
    // // 数据刷新时间
    // setUpdateTime(state, value) {
    //     state.updateTime = value;
    // },
    // // 用户信息
    // setUserInfo(state, value) {
    //     state.userInfo = value;
    // },
    // // 用户类型
    // setUserTypes(state, value) {
    //     state.userTypes = value;
    // },
    // // 功能节点菜单
    // setMenu(state, value) {
    //     state.menu = value;
    // },
    // // 面包屑
    // setCrumbs(state, value) {
    //     state.crumbs = value;
    // },
    // // 缓存页面列表
    // setKeepAliveList(state, value) {
    //     state.keepAliveList = value;
    // },
    // setMapBase(state, value) {
    //     state.mapBase = value;

    // },
    // // 首页点击进入后的保存的id
    // setPerformanceId(state, value) {
    //     state.performanceId = value;
    // },
};

export default mutations