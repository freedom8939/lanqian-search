// src/router/index.js
import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import IndexPage from "../pages/IndexPage.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: IndexPage
    },
    {
        path: '/:category',  //动态路由
        component: IndexPage
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
