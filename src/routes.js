import { createWebHistory, createRouter } from "vue-router";

import Home from "./components/Home.vue";
import Code from "./components/Code.vue";

const routes = [
    {
        name: "Home",
        path: "/",
        component: Home,
    },
    {
        name: "Code",
        path: "/code",
        component: Code,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;