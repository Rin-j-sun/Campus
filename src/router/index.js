import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import searchStudent from "@/components/searchStudent.vue";
import addingStudent from "@/components/addingStudent.vue";
import login from "@/components/login.vue";
import profile from "@/components/profile.vue";
import assessmentStudent from "@/components/assessmentStudent.vue";


const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },

     {
         path: "/login",
         name: "login",
        component: login,
     },
     {
         path: "/profile",
         name: "profile",
         component: profile,
     },
    {
        path: "/assessment",
        name: "assessmentStudent",
        component: assessmentStudent,
    },
    {
        path: "/adding",
        name: "addingStudent",
        component: addingStudent,
    },
    {
        path: "/search",
        name: "searchStudent",
        component: searchStudent,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;