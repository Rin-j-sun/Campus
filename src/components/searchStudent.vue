<template>
  <div class="options">


  </div>

  <h1>Поиск студентов</h1>
  <form>
<!--    <input-->
<!--        class="input_form"-->
<!--        type="text"-->
<!--&lt;!&ndash;        v-model="login"&ndash;&gt;-->
<!--        placeholder="Введите значение для поиска"-->
<!--    />-->

    <div>
      <select name="num_group">
        <option value="">Выберите № группы</option>
      </select>
    </div>
    <button type="submit">Поиск</button>
  </form>
</template>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
  position: relative;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;

  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
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