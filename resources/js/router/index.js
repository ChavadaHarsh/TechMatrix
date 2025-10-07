import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home/Home.vue";
import AboutUs from "../views/AboutUs/AboutUs.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/aboutUs",
        name: "AboutUs",
        component: AboutUs,
    },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
export default router;
