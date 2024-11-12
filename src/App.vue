<template>
  <div id="app" v-if="isAuthRelatedPage">
    <router-view></router-view>
  </div>
  <div class="container" v-if="!isAuthRelatedPage">
    <nav class="navigation content">
      <span class="nav" v-if="!isAuthenticated">
        <img
            class="logo_nav"
            alt="logo"
            src="../src/assets/img/logo.png"
        />
        <div class="home_page">

          <h1>Добро Пожаловать В Кампус</h1>

          <button><router-link to="/login">Войти</router-link></button>

        </div>
      </span>
      <span class="nav" v-if="isAuthenticated">
        <img
            class="logo_nav"
            alt="logo"
            src="../src/assets/img/logo.png"
        />
        <button><router-link to="/">Главная</router-link></button>
        <button><router-link to="/schedule">Расписание</router-link></button>
        <button><router-link to="/performance">Успеваемость</router-link></button>
        <button><router-link to="/students">Студенты</router-link></button>
        <button><router-link to="/profile">Профиль</router-link></button>

        <router-link to="/" @click="logout">Выход</router-link>
      </span>
    </nav>
    <div id="app">
      <router-view></router-view>
    </div>
    <span v-if="isAuthenticated">
      <nav class="nav_admin">
        <span v-if="isAdmin">
          <div>
            <img
                class="logo_nav_admin"
                alt="logo"
                src="../src/assets/img/admin.png"
            />
            <span class="logo_text">Снежный мир</span>
          </div>
          <router-link to="/disciplines">Дисциплины</router-link>
          <router-link to="/teachers">Преподаватели</router-link>
          <router-link to="/students">Студенты</router-link>
          <router-link to="/profile">Профиль</router-link>

        </span>
      </nav>
    </span>
  </div>
  <footer class="footer_container" v-if="!isAuthRelatedPage">
    <img
        class="footer_background"
        alt="footer_background"
        src="../src/assets/img/image%203.png"
    />

  </footer>
</template>

<style></style>
<script>
export default {
  data() {
    return {
      isAuthenticated: false,
      isAdmin: false,
      isAuthRelatedPage: false,
    };
  },
  watch: {
    $route(to) {
      this.checkAuthRelatedPage(to.path);
    },
  },
  methods: {
    checkAuthRelatedPage(path) {
      this.isAuthRelatedPage =
          path === "/login" ||
          path === "/register" ||
          path === "/password-recovery" ||
          path === "/reset-password" ||
          path === "/password-reset";
    },
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>