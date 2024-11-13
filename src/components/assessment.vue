<template>

  <div class="login_block">
    <div class="form_login">
      <h1>Успеваемость [] группы по []</h1>

      <div class="assessment_table">
        <p>Студент</p><p>Дата</p><p>Сред. балл</p>

      </div>

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
<script setup lang="ts">
</script>