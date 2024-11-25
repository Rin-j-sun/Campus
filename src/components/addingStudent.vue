<template>
  <div class="form_block">
    <div class="form_container">
      <h1>Добавление студента</h1>
      <form @submit.prevent="addStudent">
        <div class="inputs_block">
          <input
              class="input_form"
              type="text"
              v-model="studentName"
              placeholder="Имя студента"
          />
          <input
              class="input_form"
              type="email"
              v-model="studentEmail"
              placeholder="Email студента"
          />
          <input
              class="input_form"
              type="text"
              v-model="studentId"
              placeholder="ID студента (например, номер зачётки)"
          />
        </div>
        <div class="buttons">
          <button class="btn_form" type="submit">Добавить</button>
        </div>
      </form>
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
      studentName: '',
      studentEmail: '',
      studentId: '',
      error: null,
    };
  },

  methods: {
    async addStudent() {
      try {
        // Проверка заполнения всех обязательных полей
        if (!this.studentName || !this.studentEmail || !this.studentId) {
          this.error = "Пожалуйста, заполните все поля.";
          return;
        }

        // Имитация добавления студента (замените на вызов API или Firestore)
        console.log(`Имя: ${this.studentName}, Email: ${this.studentEmail}, ID: ${this.studentId}`);
        alert("Студент успешно добавлен!");
        this.error = null;
      } catch (e) {
        console.error(e);
        this.error = "Ошибка при добавлении студента.";
      }
    },
  },
};
</script>

<style scoped>
/*  стили, аналогичные login.vue */
</style>
