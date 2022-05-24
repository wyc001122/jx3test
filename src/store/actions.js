import Vue from 'vue'
import {
    loginDetail
} from '@/api/user.js';

export default {
    LOGINDETAIL: ({
        commit
    }, userAccount) => {
        return new Promise((resolve, reject) => {
            // 根据用户名 获取用户信息
            loginDetail({
                userAccount
            }).then((res) => {
                if (res.data.code == 0 && res.data.data) {
                    commit("SETUSERINFO", res.data.data);
                    commit('SETMENUS', res.data.data.permListVos);
                } else {}
                resolve();
            })
        })
    },
    // // 系统信息
    // setSystemInfo: ({
    //     commit
    // }, value) => {
    //     commit('setSystemInfo', value);
    // },
    // // 配置
    // setConfigs: ({
    //     commit
    // }, value) => {
    //     commit('setConfigs', value);
    // },
    // setToken: ({
    //     commit
    // }, value) => {
    //     commit('setToken', value);
    // },
    // // 数据刷新时间
    // setUpdateTime: ({
    //     commit
    // }, value) => {
    //     commit('setUpdateTime', value);
    // },
    // // 用户信息
    // setUserInfo: ({
    //     commit
    // }, value) => {
    //     commit('setUserInfo', value);
    // },
    // // 用户类型
    // setUserTypes: ({
    //     commit
    // }, value) => {
    //     commit('setUserTypes', value);
    // },
    // // 功能节点菜单
    // setMenu: ({
    //     commit
    // }, value) => {
    //     commit('setMenu', value);
    // },
    // // 面包屑
    // setCrumbs: ({
    //     commit
    // }, value) => {
    //     commit('setCrumbs', value);
    // },

    // setSession: ({
    //     commit
    // }, value) => {
    //     return new Promise((resolve, reject) => {
    //         allApi.loginSysUserDetailByUserName({
    //             userAccount: value.userAccount
    //         }).then(res => {
    //             console.log(res.data)
    //             if (res.data.code == 0 && res.data.data) {
    //                 // TODO 将用户名上传，获取用户信息
    //                 commit('setUserInfo', res.data.data);
    //                 //存储用户信息
    //                 let _data = [];
    //                 // store.state.configs.base.routeByFunctionNode&& res.data.data.id
    //                 if (store.state.configs.base.routeByFunctionNode) {
    //                     //获取功能节点
    //                     commit('setMenu', res.data.data.permListVos);
    //                     resolve(res.data.data.permListVos);
    //                 } else {
    //                     _data = pagesRoute;
    //                     commit('setMenu', _data);
    //                     resolve(_data);
    //                 }
    //             } else {
    //                 // Vue.prototype.$notify({
    //                 //     title: "登录失败",
    //                 //     message: res.data.message,
    //                 //     type: "error",
    //                 // });
    //                 setTimeout(() => {
    //                     xredirect();
    //                 }, 2000);
    //             }
    //         })

    //     });
    // },
    // // 缓存页面列表
    // setKeepAliveList: ({
    //     commit
    // }, value) => {
    //     commit('setKeepAliveList', value);
    // },
    // //清空session
    // clearSession: ({
    //     commit
    // }, value) => {
    //     commit('setUserInfo', null);
    //     commit('setToken', null);
    // },
    // // 首页点击进入后的保存的id
    // setPerformanceId: ({
    //     commit
    // }, value) => {
    //     commit('setPerformanceId', value);
    // },
};