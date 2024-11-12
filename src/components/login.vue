<template>
  <img src="../assets/img/" />

  <div class="login_block">
    <div class="form_login">
      <h1>Добро Пожаловать В Кампус</h1>
      <form @submit.prevent="login">
        <div class="inputs_login">
          <input
              class="input_form"
              type="login"
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
          <button class="btn_auth_related" type="submit">Войти</button>
          <img src="../assets/img/image%201.png" />
        </div>
      </form>
    </div>
    <div class="show-error" v-if="showBlock">
      {{ error }}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      login: "",
      password: "",
      error: "",
      showBlock: false,
    };
  },
  methods: {
    async login() {
      const url = "http://127.0.0.1:8000/api/login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
      });
      if (response.ok) {
        this.$router.push("/"); // Перенаправляем пользователя на главную страницу
      } else {
        this.error = "Неверные учетные данные";
        this.login = "";
        this.password = "";
        this.showBlock = true;
        setTimeout(() => {
          this.showBlock = false;
        }, 3000);
        console.error("Ошибка:", this.error);
      }
    },
  },
};
</script>