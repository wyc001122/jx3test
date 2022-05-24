import request from "@/utils/request.js"
/**
 * 用户登录
 * @param {*} params
 * @returns
 **/
export const loginDetail = (params, showPageLoading) => {
    return request({
        method: 'get',
        url: '/sys/sysUser/loginDetail',
        showPageLoading
    }, params)
}
/**
 * 用户查询
 * @param {*} params
 * @returns
 **/
export const pageUser = (params, showPageLoading) => {
    return request({
        method: 'get',
        url: '/sys/sysUser/pageUser',
        showPageLoading
    }, params)
}
/**
 * 用户同步
 * @param {*} params
 * @returns
 **/
export const syncUser = (params, showPageLoading) => {
    return request({
        method: 'post',
        url: '/sys/sysUser/syncUser',
        showPageLoading
    }, params)
}
/**
 * 用户绑定权限
 * @param {*} params
 * @returns
 **/
export const userBindPerm = (params, showPageLoading) => {
    return request({
        method: 'post',
        url: '/sys/sysUser/userBindPerm',
        showPageLoading
    }, params)
}