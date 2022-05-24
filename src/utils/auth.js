import store from '@/store'
const jwt = require('jwt-simple'); // jwt工具
const key =
    'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAr2s5+yi6WEM8BVi/5KeHgX7UgBElDjTsgeCUGHCF1g630U7Y4jPZQdCVGZXsW+K6yrTjdZj6Q2UNpgYEpU4E/AAscbY61/YQYhWf8dd5eB3t1jO2BVc3jWqAfD/xk+864BFAh/iLBBwopMCZeWw0zvk/M0uq2DTnsecxhPVGtuywy45jUo4Qi6xak8ikwrncHXbMsZuadT5ye7QXYMh3l+vNrsjmtrunVE5F2cagActlXc2YA30lA8I3MwarYc5Zi4UQ9qPzSUdqyZaT7qtcAehwqUc5bEr7o8NaLXNDeGTPswul1zh0xDtGN0TcOEWdJtzxgdCcftqdVyK9KxR86wIDAQAB'; // 解析token使用

const TokenKey = "rftcloud_" + process.env.VUE_APP_BASE_PROJECTNAME + "_token"
// 获取token
export const getToken = () => localStorage.getItem(TokenKey)
// 设置token
export const setToken = (value) => localStorage.setItem(TokenKey, value)
// 移除token
export const removeToken = () => localStorage.removeItem(TokenKey)

// 解析token
// {exp:过期时间,iat:签发时间,iss:签发者,jti:jwt的唯一身份标识，主要用来作为一次性token,从而回避重放攻击,nbf:验证该时间之前token 无效,sub:jwt所面向的用户}
export const checkToken = (token) => {
    const payload = jwt.decode(token, key, true);
    if (new Date().getTime() / 1000 > payload.exp) {
        // 过期=>重定向
        redirect()
    } else {
        return JSON.parse(payload.data)
    }
}

// 重定向
export const redirect = () => {
    store.commit('CLEARTOKEN');
    store.commit('CLEARUSERINFO');
    window.location.replace(process.env.VUE_APP_BASE_REDIRECT)
}