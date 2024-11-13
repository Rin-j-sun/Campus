<template>
  <div class="container">
    <section id="main" class="regions">
      <img
          class="regions_background"
          alt="regions_background"
          src="../assets/img/"
      />
      <div class="content">
        <div class="main_content">
          <div class="main_content_desc">
            <p>О нашем сайте</p>
            <h1>
              Лучший сайт в мире!
            </h1>
            <p>
              In the first course of the Machine Learning Specialization, you will:
              • Build machine learning models in Python using popular machine learning libraries NumPy and scikit-learn. • Build and train supervised machine learning models for prediction and binary classification tasks, including linear regression and logistic regression
              In the first course of the Machine Learning Specialization, you will:
              • Build machine learning models in Python using popular machine learning libraries NumPy and scikit-learn. • Build and train supervised machine learning models for prediction and binary classification tasks, including linear regression and logistic regression
              In the first course of the Machine Learning Specialization, you will:
              • Build machine learning models in Python using popular machine learning libraries NumPy and scikit-learn. • Build and train supervised machine learning models for prediction and binary classification tasks, including linear regression and logistic regression
              Show More
            </p>
          </div>
        </div>

        <div><img src="/src/assets/img/people.png"></div>

      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {
    // InteractiveMap,
  },
  data() {
    return {
      guids: [],
      showBlock: false,
    };
  },
  created() {
    this.getGuids();
  },
  methods: {
    async getGuids() {
      const url = "";
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      if (response.ok) {
        const result = await response.json();
        this.guids = result.data;
        console.log("Result: ", result);
      } else {
        this.error = "Ошибка";
        console.error(this.error);
      }
    },
  },
};
</script>