<template>
  <div class="login_block">
    <div class="form_login">
      <h1>Добро Пожаловать В Кампус</h1>
      <form @submit.prevent="login">
        <div class="inputs_login">
          <input
              class="input_form"
              type="email"
              v-model="login"
          placeholder="Логин (Email)"
          />
          <input
              class="input_form"
              type="password"
              v-model="password"
              placeholder="Пароль"
          />
        </div>
        <div class="buttons">
          <button class="btn_auth_related" type="submit">Войти</button>
          <img src="../assets/img/image%201.png" />
        </div>
      </form>
    </div>
    <div class="show-error" v-if="error">
      {{ error }}
    </div>
  </div>
</template>

<script>
import { auth } from "@/firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      login: '',  // email
      password: '',
      error: null,
    };
  },

  methods: {
    ...mapActions(['setAuth', 'setUser']),
    async login() {
      try {
        // Проверка, если email и пароль не пустые
        if (!this.login || !this.password) {
          this.error = "Пожалуйста, введите логин и пароль.";
          return;
        }

        // Выполнение входа через Firebase Auth
        const userCredential = await signInWithEmailAndPassword(auth, this.login, this.password);
        const user = userCredential.user;

        this.$store.dispatch('setAuth', true); // Устанавливаем флаг аутентификации
        this.$store.dispatch('setUser', user); // Сохраняем данные пользователя

        this.$router.push('/firstpage'); // Перенаправляем на главную страницу после авторизации
      } catch (error) {
        this.error = "Неверные данные для входа."; // Обработка ошибок
        console.error(error);
      }
    },
  },
};
</script>
