<template>
  <div class="form_block">
    <div class="form_container">
      <h1>Поиск студента</h1>
      <form @submit.prevent="searchStudent">
        <div class="inputs_block">
          <input
              class="input_form"
              type="text"
              v-model="searchQuery"
              placeholder="Введите ID или имя студента"
          />
        </div>
        <div class="buttons">
          <button class="btn_form" type="submit">Искать</button>
        </div>
      </form>
      <div class="results_block" v-if="results.length">
        <h2>Результаты:</h2>
        <ul>
          <li v-for="student in results" :key="student.id">
            {{ student.name }} (ID: {{ student.id }}, Email: {{ student.email }})
          </li>
        </ul>
      </div>
    </div>
    <div class="show-error" v-if="error">
      {{ error }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      results: [],
      error: null,
    };
  },

  methods: {
    async searchStudent() {
      try {
        // Проверка ввода поискового запроса
        if (!this.searchQuery) {
          this.error = "Пожалуйста, введите запрос для поиска.";
          return;
        }

        // Имитация поиска студента (замените на вызов API или Firestore)
        console.log(`Поиск студента по запросу: ${this.searchQuery}`);
        this.results = [
          { id: "123", name: "Иван Иванов", email: "ivanov@example.com" },
          { id: "124", name: "Петр Петров", email: "petrov@example.com" },
        ]; // Пример статических данных
        this.error = null;
      } catch (e) {
        console.error(e);
        this.error = "Ошибка при поиске студента.";
      }
    },
  },
};
</script>

<style scoped>
/* Добавьте стили, аналогичные login.vue */
</style>
