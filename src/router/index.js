import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import searchStudent from "@/components/searchStudent.vue";
import addingStudent from "@/components/addingStudent.vue";
import login from "@/components/login.vue";
import firstpage from "@/components/firstPage.vue";
import AdminPage from "@/components/AdminPage.vue";
import TeacherPage from "@/components/TeacherPage.vue";
import StudentPage from "@/components/StudentPage.vue";
import assessmentStudent from "@/components/assessmentStudent.vue";
import store from '@/store';


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
        meta: { requiresAuth: false },
    },

    {
        path: '/firstpage',
        component: () => import('@/components/FirstPage.vue'),
        meta: { requiresAuth: true },
    },
    {
        path: '/admin',
        component: AdminPage,
        meta: { requiresAuth: true, role: 'admin' }
    },

    {   path: '/teacher',
        component: TeacherPage,
        meta: { requiresAuth: true, role: 'teacher' }
    },

    { path: '/student',
        component: StudentPage,
        meta: { requiresAuth: true, role: 'student' }
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

router.beforeEach((to, from, next) => {
    const isAuthenticated = store.getters.isAuthenticated;
    const userRole = store.getters.role;
    console.log(`Navigating to: ${to.path}, Authenticated: ${isAuthenticated}, Role: ${userRole}`);

    if (to.meta.requiresAuth) {
        if (!isAuthenticated) {
            next("/login");
        } else if (to.meta.role && to.meta.role !== userRole) {
            next("/"); // Пользователь не имеет нужной роли
        } else {
            next();
        }
    } else {
        next();
    }

    if (store.state.loading) {
        next(false); // Блокируем переход, пока статус не загружен
    }
});


export default router;


