<template>
  <router-view></router-view>

  <div class="login_block" >
    <div class="form_login">
      <h1>Добро Пожаловать В Кампус</h1>
      <form @submit.prevent="login">
        <div class="inputs_login">
          <input
              class="input_form"
              type="text"
              v-model="login"
              placeholder="Логин"
          />
          <input
              class="input_form"
              type="password"
              v-model="password"
              placeholder="Пароль"
          />
        </div>

        <div class="buttons">
          <router-link to="/firstpage"><button class="btn_auth_related" type="submit">Войти</button></router-link>
          <img src="../assets/img/image%201.png" />
        </div>
      </form>
    </div>
    <div class="show-error" v-if="showBlock">
      {{ error }}
    </div>
  </div>
</template>

<style>
.login_block{
  margin-left: 60%;
}
h1 {
  width: 370%;
  margin-bottom: 10%;
}

form{
  margin-left: 30%;
}
input{
  margin-bottom: 30%;
}

input::placeholder {
  font-weight: bold;
  opacity: 0.5;
  color: black;
  padding-left: 10px;
}

button{
  margin-left: 80%;
  margin-bottom: 30%;
}

img{
  margin-left: 25%;
}
</style>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },

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
    ...mapActions(['login']),
    login() {
      // Логика аутентификации (например, проверка имени пользователя и пароля)
      if (this.username === 'admin' && this.password === 'admin') {
        this.login({isAuthenticated: true, role: 'admin'});
      } else if (this.username === 'teacher' && this.password === 'teacher') {
        this.login({isAuthenticated: true, role: 'teacher'});
      } else if (this.username === 'student' && this.password === 'student') {
        this.login({isAuthenticated: true, role: 'student'});
      } else {
        alert('Неверные данные для входа');
      }
    },
  },
};
</script>