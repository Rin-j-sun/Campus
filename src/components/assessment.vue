<template>
  <div class="form_block">
    <div class="form_container">
      <h1>Оценка студента</h1>
      <form @submit.prevent="submitAssessment">
        <div class="inputs_block">
          <input
              class="input_form"
              type="text"
              v-model="studentId"
              placeholder="ID студента"
          />
          <input
              class="input_form"
              type="number"
              v-model="grade"
              placeholder="Оценка"
              min="0"
              max="100"
          />
          <textarea
              class="input_form"
              v-model="comments"
              placeholder="Комментарии (опционально)"
          ></textarea>
        </div>
        <div class="buttons">
          <button class="btn_form" type="submit">Сохранить</button>
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
      studentId: '',
      grade: '',
      comments: '',
      error: null,
    };
  },

  methods: {
    async submitAssessment() {
      try {
        // Проверка, если ID студента и оценка заполнены
        if (!this.studentId || !this.grade) {
          this.error = "Пожалуйста, заполните все обязательные поля.";
          return;
        }

        // Имитация сохранения данных (замените на вызов API или Firestore)
        console.log(`ID студента: ${this.studentId}, Оценка: ${this.grade}, Комментарии: ${this.comments}`);
        alert("Оценка успешно сохранена!");
        this.error = null;
      } catch (e) {
        console.error(e);
        this.error = "Ошибка при сохранении оценки.";
      }
    },
  },
};
</script>

<style scoped>
/*  стили, аналогичные login.vue */
</style>
