<template>
  <div class="container">
    <!-- Навигация для авторизованного пользователя -->
    <span class="nav" v-if="isAuthenticated">
          <img class="logo_nav" alt="logo" src="../src/assets/img/logo.png'" />
          <button><router-link to="/">Главная</router-link></button>
          <button><router-link to="/schedule">Расписание</router-link></button>
          <button><router-link to="/performance">Успеваемость</router-link></button>
          <button><router-link to="/students">Студенты</router-link></button>
          <button><router-link to="/profile">Профиль</router-link></button>
        </span>

    <!-- Навигация для администратора -->
    <span v-if="isAdmin">
          <nav class="nav_admin">
            <div>
              <img class="logo_nav_admin" alt="logo" src="../src/assets/img/owl.png" />
            </div>
            <router-link to="/disciplines">Дисциплины</router-link>
            <router-link to="/teachers">Преподаватели</router-link>
            <router-link to="/students">Студенты</router-link>
            <router-link to="/profile">Профиль</router-link>
          </nav>
        </span>

    <!-- Навигация для преподавателя -->
    <span v-if="isTeacher">
          <nav class="nav_teacher">
            <div>
              <img class="logo_nav_teacher" alt="logo" src="../src/assets/img/dmin.png" />
            </div>
            <router-link to="/schedule">Расписание</router-link>
            <router-link to="/performance">Успеваемость</router-link>
            <router-link to="/profile">Профиль</router-link>
          </nav>
        </span>

    <!-- Навигация для студента -->
    <span v-if="isStudent">
          <nav class="nav_student">
            <div>
              <img class="logo_nav_student" alt="logo" src="../src/assets/img/admin.png" />
            </div>
            <router-link to="/schedule">Расписание</router-link>
            <router-link to="/performance">Успеваемость</router-link>
            <router-link to="/profile">Профиль</router-link>
          </nav>
        </span>


  </div>

</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: "HomeView",
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
