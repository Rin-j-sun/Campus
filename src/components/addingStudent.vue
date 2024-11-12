<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>Добавить студента</h3>

    <form class="add_student">
      <div>
        <label type="surname">Фамилия</label>
      </div>
      <div>
        <label type="name">Имя</label>
      </div>

      <div>
        <label type="patronymic">Отчество</label>
      </div>
      <div>
        <select name="num_group">
          <option value="">№ группы</option>
        </select>
      </div>

      <button type="submit">Добавить студента</button>

    </form>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>

<script>
export default {
  data() {
    return {
      formData: {
        surname: "",
        name: "",
        patronymic: "",
      },
      error: "",
      showBlock: "",
    };
  },
  created() {
  },
  methods: {
    async hr() {
      const url = "http://127.0.0.1:8000/api/tours";
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      if (response.ok) {
        // const result = await response.json();
        // this. = result.data;
        console.log("Result: ", result);
      } else {
        this.error = "Ошибка";
        console.error(this.error);
      }
    },
  },
};
</script>