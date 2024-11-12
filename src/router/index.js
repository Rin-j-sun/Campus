import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import UserRegistrations from "@/components/UserRegistrations.vue";
// import Tours from "@/components/ToursList.vue";
// import UserAuthorization from "@/components/UserAuthorization.vue";
// import PasswordRecovery from "@/components/PasswordRecovery.vue";
// import Feedback from "@/components/UserFeedback.vue";
// import AboutTour from "@/components/AboutTour.vue";
// import ToursInRegions from "@/components/ToursInRegions.vue";
// import Cabinet from "@/components/UserCabinet.vue";
// import BookingTour from "@/components/BookingTour.vue";
// import PasswordReset from "@/components/PasswordReset.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    // {
    //     path: "/register",
    //     name: "register",
    //     component: UserRegistrations,
    // },
    // {
    //     path: "/login",
    //     name: "login",
    //     component: UserAuthorization,
    // },
    // {
    //     path: "/password-recovery",
    //     name: "recovery",
    //     component: PasswordRecovery,
    // },
    // {
    //     path: "/reset-password",
    //     name: "reset",
    //     component: PasswordReset,
    // },
    // {
    //     path: "/tours",
    //     name: "tours",
    //     component: Tours,
    // },
    // {
    //     path: "/tour/id",
    //     name: "about",
    //     component: AboutTour,
    // },
    // {
    //     path: "/feedback/create",
    //     name: "feedback",
    //     component: Feedback,
    // },
    // {
    //     path: "/region/id",
    //     name: "tourInRegion",
    //     component: ToursInRegions,
    // },
    // {
    //     path: "/user/id",
    //     name: "cabinet",
    //     component: Cabinet,
    // },
    // {
    //     path: "/booked/create",
    //     name: "bookingTour",
    //     component: BookingTour,
    // },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;