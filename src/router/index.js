import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

    {
        path: '/',
        name: 'Home',
        // component: Home
        components: {
            default: () => import(/* webpackChunkName: "home" */ '../Home.vue'),
        },
    },
    {
        path: '/Documentations',
        name: 'Doc',
        // component: Home
        components: {
            default: () => import(/* webpackChunkName: "home" */ '../Doc.vue'),
        },
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})
export default router