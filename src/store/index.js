import { createStore } from "vuex";
import { auth } from "@/firebase.js"; // Импортируем auth из файла конфигурации Firebase
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
import { db } from "@/firebase";

export const store = createStore({
    state() {
        return {
            isAuthenticated: false, // Состояние аутентификации
            role: null,             // Роль пользователя (например, "admin", "teacher", "student")
            isAuthRelatedPage: false,
            loading: true, // Загрузка статуса пользователя
        };
    },
    getters: {
        isAuthenticated: (state) => state.isAuthenticated,
        role: (state) => state.role,
        isAdmin: (state) => state.role === "admin",
        isTeacher: (state) => state.role === "teacher",
        isStudent: (state) => state.role === "student",
        isAuthRelatedPage: (state) => state.isAuthRelatedPage,
    },
    mutations: {
        setAuthentication(state, { isAuthenticated, role }) {
            state.isAuthenticated = isAuthenticated;
            state.role = role;
        },
        setAuthRelatedPage(state, isAuthRelatedPage) {
            state.isAuthRelatedPage = isAuthRelatedPage;
        },
        setLoading(state, status) {
            state.loading = status;
        }
    },
    actions: {
        // Аутентификация через Firebase
        async login({ commit }, { email, password }) {
            try {
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;

                // Установим роль на основе данных пользователя
                const role = await fetchUserRole(user); // Получаем роль пользователя (например, из Firestore)

                // Установим статус аутентификации и роль
                commit("setAuthentication", { isAuthenticated: true, role });
                commit("setAuthRelatedPage", true);
            } catch (error) {
                console.error("Ошибка входа:", error);
                throw error; // Можно также передать ошибку обратно, чтобы обработать её в компоненте
            }
        },

        // Выход из Firebase Auth
        async logout({ commit }) {
            try {
                await signOut(auth);
                commit("setAuthentication", { isAuthenticated: false, role: null });
                commit("setAuthRelatedPage", false);
            } catch (error) {
                console.error("Ошибка при выходе:", error);
            }
        },

        // Следим за изменениями в статусе пользователя (например, при обновлении страницы)
        monitorAuthState({ commit }) {
            commit("setLoading", true);
            onAuthStateChanged(auth, async (user) => {
                if (user) {
                    const role = await fetchUserRole(user);
                    commit("setAuthentication", { isAuthenticated: true, role });
                } else {
                    commit("setAuthentication", { isAuthenticated: false, role: null });
                }
                commit("setLoading", false);
            });
        },
    },
});

// Функция для получения роли пользователя
async function fetchUserRole(user) {
    const docRef = doc(db, "users", user.uid); // Путь к документу
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return docSnap.data().role; // Например, "admin" или "student"
    } else {
        console.error("Роль пользователя не найдена");
        return null;
    }
}

export default store;
