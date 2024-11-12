import { createStore } from "vuex";

export const store = createStore({
    state () {
        return {
            isAuthenticated: false,
            isAdmin: false,
            isAuthRelatedPage: false,
        }
    },
    getters: {
        isAuthenticated: (state) => !!state.token,
    },
    mutations: {
        increment (state) {
            state.count++
        }
    },
    actions: {
        increment (context) {
            context.commit('increment')
        }
    },
    modules: {},
});