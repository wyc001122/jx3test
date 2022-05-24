import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// 解决重复跳转路由的报错
const VueRouterPush = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(to) {
    return VueRouterPush.call(this, to).catch((err) => err);
};

const routes = [{
  path: '/index/:token',
  name: 'index',
  component: () => import('@/views/index.vue'),
  children: [],
}];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({
    y: 0
  }),
  routes
})




export default router