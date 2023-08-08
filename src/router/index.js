import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import User from "../views/User.vue";
import Wilayah from "../views/Wilayah.vue";
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/users",
        name: "User",
        component: User,
    },
    {
        path: "/wilayah",
        name: "Wilayah",
        component: Wilayah,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router; 