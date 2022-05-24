// 权限
import router from './router'
import store from './store'
import NProgress from 'nprogress' // 进度条
import 'nprogress/nprogress.css' // 进度条样式
import {
  Message
} from 'element-ui'
import {
  getToken,
  setToken,
  checkToken,
  redirect
} from '@/utils/auth'
import toTree from "@/utils/toTree"

const pageRoute = [{
  path: '/index',
  name: 'index',
  component: () => import('@/views/index.vue'),
  children: [],
}];
const baseRoute = [{
    path: '/',
    name: 'index'
  },
  {
    path: '/index/:token',
    name: 'index'
  }
]

NProgress.configure({
  showSpinner: false
}) // 进度条配置

const whiteList = []; // 路由白名单

router.beforeEach(async (to, from, next) => {
  // 进度条 开始
  NProgress.start();
  // 本项目中,通过跳转index/:token模拟登录
  if (to.name === 'index') {
    // 如果主动去登录
    const token = to.params.token
    if (token != null && token != 'null') {
      store.commit('SETTOKEN', token);
      setToken(token);
      const data = checkToken(token); // 解析token
      const userAccount = data.userAccount; // 从解析的token中取出 userAccount
      await store.dispatch('LOGINDETAIL', userAccount); // 根据用户名 , 获取用户信息，permListVos为功能列表
      const menus = store.state.menus;
      const roles = createRoles(menus);
      router.addRoutes(roles);
      const menusTree = toTree(
        JSON.parse(JSON.stringify(menus)),
        'root',
        'nodeCode',
        'nodePcode'
      );
      const firstFnNode = findFirstFnNode(menusTree)
      next({
        path: firstFnNode.path,
        replace: true
      })
    } else {
      redirect()
    }
  } else {
    // 不是主动去登录
    // vuex中是否有token
    if (store.state.token) {
      // 本身就有token,说明其他也有
      checkToken(store.state.token); // 解析token
      const menus = store.state.menus;
      if (hasPermission(menus, to.path)) {
        next()
      } else {
        redirect()
      }
    } else {
      // 如果没有 , 可能是刷新了页面 , 判断缓存中是否有 token
      const token = getToken()
      if (token) {
        store.commit('SETTOKEN', token);
        // 缓存中还有token
        const data = checkToken(token); // 解析token
        const userAccount = data.userAccount; // 从解析的token中取出 userAccount
        await store.dispatch('LOGINDETAIL', userAccount); // 根据用户名 , 获取用户信息，permListVos为功能列表
        const menus = store.state.menus;
        const roles = createRoles(menus);
        router.addRoutes(roles);
        if (hasPermission(menus, to.path)) {
          next({
            path: to.path,
            replace: true
          })
        } else {
          redirect()
        }
        NProgress.done()
      } else {
        // 缓存中也没token,去登录
        redirect()
      }
    }
  }
  NProgress.done()
})

router.afterEach(() => NProgress.done())

// 创建路由对象
const creatRouter = () => {
  return new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [...baseRoute],
    scrollBehavior(to, from, savedPosition) {
      return {
        x: 0,
        y: 0
      };
    },
  });
};

// 根据 获取的功能节点,生成路由表
function createRoles(data) {
  data.forEach(item => {
    if (item.nodePcode != 'root' && item.nodeType == '2') {
      pageRoute[0].children.push({
        path: item.path,
        name: item.nodeRouter,
        component: () => import('@/views' + item.nodeComponent.split('views')[1])
      })
    }
  })
  return pageRoute
}

// 是否有权限
function hasPermission(roles, path) {
  return roles.some(role => role.path == path)
}

// 递归获取第一个功能节点
function findFirstFnNode(fnTree) {
  const length = fnTree.length
  for (let index = 0; index < length; index++) {
    if (fnTree[index].nodeType == '2') {
      return fnTree[index]
    } else {
      return findFirstFnNode(fnTree[index].children)
    }
  }
}