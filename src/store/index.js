import { createStore } from "vuex";

export const store = createStore({
    state() {
        return {
            isAuthenticated: false,  // Состояние, показывающее, авторизован ли пользователь
            role: null,              // Роль пользователя (admin, teacher, student, или null)
            isAuthRelatedPage: false,
        };
    },
    getters: {
        isAuthenticated: (state) => state.isAuthenticated,
        role: (state) => state.role,
        isAdmin: (state) => state.role === "admin",  // Проверка роли администратора
        isTeacher: (state) => state.role === "teacher",  // Проверка роли преподавателя
        isStudent: (state) => state.role === "student",  // Проверка роли студента
        isAuthRelatedPage: (state) => state.isAuthRelatedPage,
    },
    mutations: {
        setAuthentication(state, { isAuthenticated, role }) {
            state.isAuthenticated = isAuthenticated;
            state.role = role;  // Присваиваем роль пользователю
        },
        setAuthRelatedPage(state, isAuthRelatedPage) {
            state.isAuthRelatedPage = isAuthRelatedPage;
        },
    },
    actions: {
        login({ commit }, { isAuthenticated, role }) {
            commit("setAuthentication", { isAuthenticated, role });
            commit("setAuthRelatedPage", true); // После логина показываем страницы, связанные с авторизацией
        },
        logout({ commit }) {
            commit("setAuthentication", { isAuthenticated: false, role: null });
            commit("setAuthRelatedPage", false); // После выхода показываем страницу входа
        },
    },
    modules: {},
});

export default store;