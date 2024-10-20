import { createWebHistory, createRouter } from "vue-router";

import Home from "./components/Home.vue";
import Code from "./components/Code.vue";

const routes = [
    {
        name: "Home",
        path: "/PyramIDE/",
        component: Home,
    },
    {
        name: "Code",
        path: "/PyramIDE/code",
        component: Code,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;