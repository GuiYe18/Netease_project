import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'
// 使用路由器

Vue.use(VueRouter)
// 生成路由器

const router = new VueRouter({
    routes
})
export default router