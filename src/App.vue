<template>
  <router-view></router-view>
    <div v-if="!isAuthRelatedPage && !isAuthenticated && !isLoginPage">
      <nav class="navigation content">
        <span class="home">
          <img class="home_logo" alt="logo" src="../src/assets/img/logo.png" />
          <div class="home_page">
            <h1>Добро Пожаловать В Кампус</h1>
            <router-link to="/login">
              <button>Войти</button>
            </router-link>
          </div>
        </span>
      </nav>

      <footer class="footer_container">
        <img class="footer_background" alt="footer_background" src="../src/assets/img/image%203.png" />
      </footer>
    </div>

</template>

<script>
import { mapGetters } from 'vuex';
import { store } from "@/store";
export default {
      created() {
      store.dispatch("monitorAuthState");
    },

  computed: {
    isAuthenticated() {
      console.log('isAuthenticated:', this.$store.getters.isAuthenticated);
      return this.$store.getters.isAuthenticated;
    },
    // Проверяем, находимся ли мы на странице входа
    isLoginPage() {
      return this.$route.path === '/login'; // если текущий маршрут '/login', то страница входа
    },
    isAuthRelatedPage() {
      console.log('isAuthRelatedPage:', this.$store.getters.isAuthRelatedPage);
      return this.$store.getters.isAuthRelatedPage;
    },
  },


  methods: {
  }

};
</script>
