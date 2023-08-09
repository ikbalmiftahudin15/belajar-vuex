import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import User from "../views/User.vue";
import Wilayah from "../views/Wilayah.vue";
import Produk from "../views/Produk.vue";
import SingleProduk from "../views/SingleProduk.vue"
import Kategori from "../views/Kategori.vue"

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
    {
        path: "/produk",
        name: "Produk",
        component: Produk,
    },
    {
        path:"/produk/:id",
        name: "SingleProduk",
        component: SingleProduk,
    },
    {
        path: "/kategori",
        name: "Kategori",
        component: Kategori,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router; 