import { createRouter, createWebHistory } from "vue-router";
import MovieInfo from "../components/MovieInfo.vue";
import Home from "../components/Home.vue";
import NotFound from "../components/NotFound.vue";
import User from "../components/User.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/movie",
            name: "movieInfo",
            component: MovieInfo,
        },
        {
            path: "/user/:id",
            name: "user",
            component: User,
        },
        {
            path: "/404",
            component: NotFound,
        },
        //  all regex ((.*)*) to match all paths
        {
            path: "/:pathMatch(.*)*",
            name: "not-found",
            redirect: "/404",
        },
    ],
});

export default router;
