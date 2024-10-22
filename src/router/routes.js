import { createWebHistory, createRouter } from "vue-router";

import App from "../App.vue";
import Home from "../view/Home.vue";
import Login from "../view/Login.vue";
import Code from "../view/Code.vue";

const routes = [
    {
        name: "App",
        path: "/PyramIDE/",
        component: App,
        children : [
            {
                name: "Home",
                path: "",
                component: Home,
            },
            {
                name: "Login",
                path: "login",
                component: Login,
            },
            {
                name: "Code",
                path: "code",
                component: Code,
            },
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;