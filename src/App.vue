<template>
    <router-view></router-view>

    <div v-if="!isAuthRelatedPage">
      <nav class="navigation content">
        <span class="home" v-if="!isAuthenticated">
          <img class="home_logo" alt="logo" src="../src/assets/img/logo.png" />
          <div class="home_page">
            <h1>Добро Пожаловать В Кампус</h1>
            <router-link to="/login">
              <button>Войти</button>
            </router-link>
          </div>
        </span>
      </nav>

      <footer class="footer_container" v-if="!isAuthRelatedPage">
        <img class="footer_background" alt="footer_background" src="../src/assets/img/image%203.png" />
      </footer>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    isAuthenticated() {
      console.log('isAuthenticated:', this.$store.getters.isAuthenticated);
      return this.$store.getters.isAuthenticated;
    },
    isAdmin() {
      console.log('isAdmin:', this.$store.getters.isAdmin);
      return this.$store.getters.isAdmin;
    },
    isTeacher() {
      console.log('isTeacher:', this.$store.getters.isTeacher);
      return this.$store.getters.isTeacher;
    },
    isStudent() {
      console.log('isStudent:', this.$store.getters.isStudent);
      return this.$store.getters.isStudent;
    },
    isAuthRelatedPage() {
      console.log('isAuthRelatedPage:', this.$store.getters.isAuthRelatedPage);
      return this.$store.getters.isAuthRelatedPage;
    },
  },


  methods: {
    // loginUser() {
    //
    //   this.$store.dispatch("login", { isAuthenticated: true, role: "admin" });
    //   console.log(this.$store.state.isAuthenticated);
    // },
    // logoutUser() {
    //
    //   this.$store.dispatch("logout");
    //   console.log(this.$store.state.isAuthenticated);
    // },
  }

};
</script>
